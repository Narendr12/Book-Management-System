export default  Footer = () => (
    <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto px-4 py-6 text-center">
            <p>&copy; {new Date().getFullYear()} BookSphere. All rights reserved.</p>
            <p className="text-sm text-gray-400">A Full-Stack Marketplace Project</p>
        </div>
    </footer>
);