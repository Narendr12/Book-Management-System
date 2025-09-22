<?php
class UserController {
    private $db;
    private $table_name = "users";

    public function __construct($db) {
        $this->db = $db;
    }

    // Handles /api/user/register
    public function register($requestMethod) {
        if (strtoupper($requestMethod) !== 'POST') {
            $this->methodNotAllowedResponse();
        }
        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->name) && !empty($data->email) && !empty($data->password)) {
            $query = "INSERT INTO " . $this->table_name . " SET name=:name, email=:email, password=:password, created_at=:created";
            
            $stmt = $this->db->prepare($query);

            // Sanitize
            $name = htmlspecialchars(strip_tags($data->name));
            $email = htmlspecialchars(strip_tags($data->email));
            $password = password_hash($data->password, PASSWORD_BCRYPT); // Hash password
            $created = date('Y-m-d H:i:s');

            $stmt->bindParam(":name", $name);
            $stmt->bindParam(":email", $email);
            $stmt->bindParam(":password", $password);
            $stmt->bindParam(":created", $created);

            if ($stmt->execute()) {
                http_response_code(201);
                echo json_encode(array("message" => "User was created."));
            } else {
                http_response_code(503);
                echo json_encode(array("message" => "Unable to create user. Email might already exist."));
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Unable to create user. Data is incomplete."));
        }
    }

    // Handles /api/user/login
    public function login($requestMethod) {
        if (strtoupper($requestMethod) !== 'POST') {
             $this->methodNotAllowedResponse();
        }
        $data = json_decode(file_get_contents("php://input"));

        if (!empty($data->email) && !empty($data->password)) {
            $query = "SELECT id, name, password FROM " . $this->table_name . " WHERE email = :email LIMIT 0,1";
            $stmt = $this->db->prepare($query);

            $email = htmlspecialchars(strip_tags($data->email));
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            
            $num = $stmt->rowCount();

            if ($num > 0) {
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                $id = $row['id'];
                $name = $row['name'];
                $password_hash = $row['password'];

                if (password_verify($data->password, $password_hash)) {
                    // In a real app, you'd generate a JWT (JSON Web Token) here
                    http_response_code(200);
                    echo json_encode(array(
                        "message" => "Successful login.",
                        "data" => array(
                            "id" => $id,
                            "name" => $name,
                            "email" => $email
                        )
                    ));
                } else {
                    http_response_code(401);
                    echo json_encode(array("message" => "Login failed. Incorrect password."));
                }
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Login failed. User not found."));
            }
        } else {
             http_response_code(400);
             echo json_encode(array("message" => "Unable to login. Data is incomplete."));
        }
    }
    
    private function methodNotAllowedResponse() {
        header("HTTP/1.1 405 Method Not Allowed");
        exit();
    }
}
?>
