export default Help = () => (
    <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Help Desk & FAQ</h2>
            <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">How do I sell a book?</h3>
                    <p className="text-gray-600">Click on the "Sell" button in the navigation bar. If you're logged in, you'll see a form to fill out your book's details. If not, you'll be prompted to log in or create an account first. Fill in all the required information, upload a photo, and click "List My Book".</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">How do I buy a book?</h3>
                    <p className="text-gray-600">Browse our collection from the "Home" or "Browse" pages. When you find a book you like, click on it for more details. From the details page, you can add the book to your cart and proceed to checkout.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">What are the shipping policies?</h3>
                    <p className="text-gray-600">Shipping is handled directly between the buyer and seller. When you list a book, you can specify your shipping options and costs. We recommend using a tracked shipping service for security.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">How do payments work?</h3>
                    <p className="text-gray-600">BookSphere uses a secure payment processor (like Stripe or PayPal, to be implemented) to handle transactions. When a book is sold, the payment is held until the buyer confirms they have received the item. The funds are then released to the seller's account.</p>
                </div>
            </div>
            <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-6">Our support team is here to help.</p>
                <a href="mailto:support@booksphere.com" className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition">Contact Support</a>
            </div>
        </div>
    </div>
)