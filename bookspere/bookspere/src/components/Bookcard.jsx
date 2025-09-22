export default BookCard = ({ book }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-1 transition-transform duration-300">
    <img src={book.cover} alt={book.title} className="w-full h-64 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x450/cccccc/ffffff?text=Image+Not+Found'; }}/>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 truncate">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.author}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold text-blue-500">${book.price.toFixed(2)}</span>
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{book.condition}</span>
      </div>
      <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
        View Details
      </button>
    </div>
  </div>
);
