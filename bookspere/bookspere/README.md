BookSphere: A Full-Stack Online Book Marketplace
BookSphere is a responsive and intuitive online marketplace that enables users to buy and sell new and pre-owned books. Built with a modern tech stack, it provides a seamless platform for book lovers to connect and trade. The project features secure user authentication, personalized dashboards, advanced filtering, and a built-in help desk.

✨ Key Features
User Authentication: Secure registration and login functionality for users.

Browse & Filter: An extensive browsing page with advanced filters for category, condition, and price.

Book Listings: Authenticated users can easily list their books for sale through a simple form.

Personalized Dashboard: Users can view their active listings and purchase history.

Responsive Design: A mobile-first design built with Tailwind CSS ensures a great experience on any device.

Help Desk & FAQ: A dedicated page to answer common user questions and provide support.

🛠️ Technologies Used
This project is a full-stack application utilizing the following technologies:

Frontend:

React.js: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Backend:

PHP: A server-side scripting language for handling API logic.

REST API: Custom-built API for handling communication between the frontend and backend.

Database:

MySQL: A relational database for storing user, book, and order information.

📂 Project Structure
The project is organized into two main directories: frontend and backend.

/BookSphere-Marketplace
├── /frontend           # Contains the React.js application
│   ├── /src
│   │   └── App.jsx     # Main React component
│   └── package.json
├── /backend            # Contains the PHP backend and API
│   ├── /api
│   │   └── index.php   # API router
│   ├── /config
│   │   └── database.php # Database connection
│   └── /controllers
│       ├── UserController.php
│       └── BookController.php
└── database.sql        # SQL schema for database setup

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js & npm: For running the React frontend.

XAMPP / MAMP / WAMP: A local server environment to run PHP and MySQL.

Git: For version control.

Installation & Setup
1. Clone the repository:

git clone [https://github.com/YOUR_USERNAME/BookSphere-Marketplace.git](https://github.com/YOUR_USERNAME/BookSphere-Marketplace.git)
cd BookSphere-Marketplace

2. Backend Setup (PHP & MySQL):

a. Start your XAMPP/MAMP server. Ensure that the Apache and MySQL services are running.

b. Create the Database:
-   Open phpMyAdmin (usually at http://localhost/phpmyadmin).
-   Create a new database named booksphere_db.
-   Select the new database and go to the "Import" tab.
-   Upload and import the database.sql file provided in the root of the project.

c. Configure Database Connection:
-   Open backend/config/database.php.
-   Update the $username and $password variables to match your MySQL credentials (for XAMPP, the default is often root with no password).

d. Run the Backend Server:
-   Move the entire backend folder into the htdocs (for XAMPP) or www (for MAMP) directory of your local server installation.
-   Your API will now be accessible at http://localhost/backend/api/.

3. Frontend Setup (React):

a. Navigate to the frontend directory:

cd frontend

b. Install NPM packages:

npm install

c. Start the React development server:

npm start

Your application should now be running on http://localhost:3000.

d. Connect Frontend to Backend (Important):
-   In a real application, you would update the fetch requests in your React components (App.jsx) to point to your local PHP API endpoints (e.g., http://localhost/backend/api/books). The current version uses mock data for demonstration.

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request
