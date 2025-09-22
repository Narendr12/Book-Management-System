<?php
class BookController {
    private $db;
    private $table_name = "books";

    public function __construct($db) {
        $this->db = $db;
    }

    public function processRequest($requestMethod, $params) {
        switch ($requestMethod) {
            case 'GET':
                if (isset($params[0])) {
                    $this->getBook($params[0]);
                } else {
                    $this->getAllBooks();
                };
                break;
            case 'POST':
                $this->createBook();
                break;
            default:
                $this->notFoundResponse();
                break;
        }
    }
    
    private function getAllBooks() {
        $query = "SELECT b.id, b.title, b.author, b.price, b.condition, b.category, b.cover_image, u.name as seller_name FROM " . $this->table_name . " b LEFT JOIN users u ON b.seller_id = u.id ORDER BY b.created_at DESC";
        
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        
        $books_arr = array();
        $books_arr["records"] = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $book_item = array(
                "id" => $id,
                "title" => $title,
                "author" => $author,
                "price" => $price,
                "condition" => $condition,
                "category" => $category,
                "cover" => $cover_image,
                "seller" => $seller_name
            );
            array_push($books_arr["records"], $book_item);
        }

        http_response_code(200);
        echo json_encode($books_arr);
    }
    
    private function getBook($id) {
        // Implementation for getting a single book
        // ... (similar to getAllBooks but with a WHERE clause)
         http_response_code(200);
         echo json_encode(array("message" => "Get single book with ID $id - Not implemented"));
    }

    private function createBook() {
        $data = json_decode(file_get_contents("php://input"));

        if (
            !empty($data->title) && !empty($data->author) &&
            !empty($data->price) && !empty($data->condition) &&
            !empty($data->category) && !empty($data->seller_id)
        ) {
            $query = "INSERT INTO " . $this->table_name . " SET title=:title, author=:author, price=:price, `condition`=:condition, category=:category, seller_id=:seller_id, cover_image=:cover_image, created_at=:created";

            $stmt = $this->db->prepare($query);

            // Sanitize
            $title = htmlspecialchars(strip_tags($data->title));
            $author = htmlspecialchars(strip_tags($data->author));
            $price = htmlspecialchars(strip_tags($data->price));
            $condition = htmlspecialchars(strip_tags($data->condition));
            $category = htmlspecialchars(strip_tags($data->category));
            $seller_id = htmlspecialchars(strip_tags($data->seller_id));
            $cover_image = htmlspecialchars(strip_tags($data->cover_image ?? ''));
            $created = date('Y-m-d H:i:s');

            $stmt->bindParam(":title", $title);
            $stmt->bindParam(":author", $author);
            $stmt->bindParam(":price", $price);
            $stmt->bindParam(":condition", $condition);
            $stmt->bindParam(":category", $category);
            $stmt->bindParam(":seller_id", $seller_id);
            $stmt->bindParam(":cover_image", $cover_image);
            $stmt->bindParam(":created", $created);

            if ($stmt->execute()) {
                http_response_code(201);
                echo json_encode(array("message" => "Book was listed."));
            } else {
                http_response_code(503);
                echo json_encode(array("message" => "Unable to list book."));
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Unable to list book. Data is incomplete."));
        }
    }

    private function notFoundResponse() {
        header("HTTP/1.1 404 Not Found");
        exit();
    }
}
?>
