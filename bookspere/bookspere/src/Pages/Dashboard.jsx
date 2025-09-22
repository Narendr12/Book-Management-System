export default Dashboard = ({ user, setView }) => {
    if (!user) {
        // Should not happen if logic is correct, but a good safeguard
        setView('login');
        return null;
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, {user.name.split(' ')[0]}!</h2>
            <p className="text-gray-500 mb-8">Here's your personalized dashboard.'</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* My Listings */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">My Listings</h3>
                    <div className="space-y-4">
                        {user.listings.map(book => (
                            <div key={book.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                <div>
                                    <p className="font-semibold">{book.title}</p>
                                    <p className="text-sm text-gray-500">${book.price.toFixed(2)}</p>
                                </div>
                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${book.status === 'Listed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {book.status}
                                </span>
                            </div>
                        ))}
                         <button onClick={() => setView('sell')} className="w-full mt-4 text-blue-600 font-semibold hover:underline">+ List a New Book</button>
                    </div>
                </div>

                {/* Purchase History */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Purchase History</h3>
                     <div className="space-y-4">
                        {user.purchases.map(book => (
                             <div key={book.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                <div>
                                    <p className="font-semibold">{book.title}</p>
                                    <p className="text-sm text-gray-500">Sold by {book.seller}</p>
                                </div>
                               <p className="text-gray-700 font-semibold">${book.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
