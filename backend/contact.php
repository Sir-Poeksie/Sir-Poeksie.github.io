<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "portfolio_db";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
  echo "Message sent!";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
