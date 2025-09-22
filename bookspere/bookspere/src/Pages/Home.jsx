import { mockBooks } from "../data/mockBooks";
import BookCard from "../components/Bookcard";
export default Home = ({ setView }) => (
  <div>
    {/* Hero Section */}
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Find Your Next Great Read</h2>
        <p className="text-lg text-gray-600 mb-8">Buy and sell new or pre-owned books in our vibrant community marketplace.</p>
        <div className="flex justify-center">
          <button onClick={() => setView('browse')} className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-transform transform hover:scale-105">
            Start Browsing
          </button>
          <button onClick={() => setView('sell')} className="ml-4 bg-white text-blue-500 px-8 py-3 rounded-full font-semibold border border-blue-500 hover:bg-blue-50 transition-all">
            Sell Your Books
          </button>
        </div>
      </div>
    </section>

    {/* Featured Books */}
    <section className="py-16">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Featured Books</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {mockBooks.slice(0, 4).map(book => <BookCard key={book.id} book={book} />)}
            </div>
        </div>
    </section>
  </div>
);