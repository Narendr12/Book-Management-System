<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config/database.php';
require_once '../controllers/UserController.php';
require_once '../controllers/BookController.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$requestMethod = $_SERVER["REQUEST_METHOD"];
$uriSegments = explode('/', $uri);

// This is a simple router. In a real-world app, a library like FastRoute would be better.
if (isset($uriSegments[2])) {
    $controllerName = ucfirst($uriSegments[2]) . 'Controller'; // e.g., /api/user -> UserController
    
    // Check if the controller exists
    if (class_exists($controllerName)) {
        $database = new Database();
        $db = $database->getConnection();
        
        $controller = new $controllerName($db);
        
        $action = isset($uriSegments[3]) ? $uriSegments[3] : 'processRequest';
        
        // Pass the request method and any additional URI segments
        $params = array_slice($uriSegments, 4);
        
        // A simple way to route to methods like login, register, etc.
        // e.g., POST /api/user/register -> UserController->register()
        if (method_exists($controller, $action)) {
             $controller->$action($requestMethod);
        } else if (method_exists($controller, 'processRequest')) {
             $controller->processRequest($requestMethod, $params);
        } else {
            header("HTTP/1.1 404 Not Found");
            exit();
        }

    } else {
        header("HTTP/1.1 404 Not Found");
        exit();
    }
} else {
    header("HTTP/1.1 404 Not Found");
    exit();
}
