<?php
include 'db_config.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
if ($conn->query($sql)) {
    echo "Success";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
