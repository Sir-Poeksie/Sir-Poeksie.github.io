<?php
include 'db_config.php';

$project_name = $_POST['project_name'];
$contact_email = $_POST['contact_email'];
$details = $_POST['details'];

$sql = "INSERT INTO projects (project_name, contact_email, details) VALUES ('$project_name', '$contact_email', '$details')";
if ($conn->query($sql)) {
    echo "Success";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
