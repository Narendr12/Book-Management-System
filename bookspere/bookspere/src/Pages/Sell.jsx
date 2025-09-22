
export default Sell = ({ user, setView }) => {
    if (!user) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Please log in to sell books.</h2>
                <p className="text-gray-600 mb-8">You need to have an account to list your books on BookSphere.</p>
                <button onClick={() => setView('login')} className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition">Login or Sign Up</button>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to the backend
        alert('Book listed successfully! (Frontend Demo)');
        setView('dashboard');
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">List a Book for Sale</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Book Title</label>
                        <input type="text" id="title" name="title" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                        <input type="text" id="author" name="author" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                     <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <select id="category" name="category" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                             <option value="">Select a Category</option>
                             <option value="Fiction">Fiction</option>
                             <option value="Non-Fiction">Non-Fiction</option>
                             <option value="Sci-Fi">Sci-Fi</option>
                             <option value="Fantasy">Fantasy</option>
                             <option value="Mystery">Mystery</option>
                             <option value="Biography">Biography</option>
                             <option value="History">History</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="condition" className="block text-sm font-medium text-gray-700">Condition</label>
                        <select id="condition" name="condition" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                             <option value="">Select Condition</option>
                             <option value="New">New</option>
                             <option value="Used - Like New">Used - Like New</option>
                             <option value="Used - Good">Used - Good</option>
                             <option value="Used - Acceptable">Used - Acceptable</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
                        <input type="number" id="price" name="price" step="0.01" required placeholder="e.g. 14.99" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="cover" className="block text-sm font-medium text-gray-700">Book Cover Image</label>
                        <input type="file" id="cover" name="cover" accept="image/*" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            List My Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}