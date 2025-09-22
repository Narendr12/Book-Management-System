import { useState,useEffect } from "react";
import { mockBooks } from "../data/mockBooks";
import { SearchIcon } from "../components/Icons";
export default Browse = () => {
    const [books, setBooks] = useState(mockBooks);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({ category: 'All', condition: 'All', price: 'All' });
    
    useEffect(() => {
        let filteredBooks = mockBooks.filter(book => 
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filters.category !== 'All') {
            filteredBooks = filteredBooks.filter(book => book.category === filters.category);
        }
        if (filters.condition !== 'All') {
            const conditionMap = {
                'New': 'New',
                'UsedLikeNew': 'Used - Like New',
                'UsedGood': 'Used - Good',
                'UsedAcceptable': 'Used - Acceptable'
            };
            if(conditionMap[filters.condition]) {
                 filteredBooks = filteredBooks.filter(book => book.condition === conditionMap[filters.condition]);
            }
        }
        if (filters.price !== 'All') {
            const [min, max] = filters.price.split('-').map(Number);
            filteredBooks = filteredBooks.filter(book => book.price >= min && (max ? book.price <= max : true));
        }

        setBooks(filteredBooks);
    }, [searchTerm, filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({...prev, [name]: value}));
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Browse All Books</h2>
            
            {/* Search and Filters */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-8 sticky top-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="relative col-span-1 md:col-span-2 lg:col-span-1">
                        <input 
                            type="text" 
                            placeholder="Search by title or author..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                             <SearchIcon />
                        </div>
                    </div>
                    <div>
                        <select name="category" onChange={handleFilterChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="All">All Categories</option>
                            <option value="Fiction">Fiction</option>
                            <option value="Dystopian">Dystopian</option>
                            <option value="Classic">Classic</option>
                            <option value="Romance">Romance</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Non-Fiction">Non-Fiction</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                        </select>
                    </div>
                     <div>
                        <select name="condition" onChange={handleFilterChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="All">All Conditions</option>
                            <option value="New">New</option>
                            <option value="UsedLikeNew">Used - Like New</option>
                            <option value="UsedGood">Used - Good</option>
                            <option value="UsedAcceptable">Used - Acceptable</option>
                        </select>
                    </div>
                    <div>
                        <select name="price" onChange={handleFilterChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="All">All Prices</option>
                            <option value="0-10">$0 - $10</option>
                            <option value="10-20">$10 - $20</option>
                            <option value="20-50">$20 - $50</option>
                            <option value="50-">$50+</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {books.length > 0 ? (
                    books.map(book => <BookCard key={book.id} book={book} />)
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-lg">No books found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};
