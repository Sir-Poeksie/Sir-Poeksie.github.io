<?php
$host = "localhost";
$user = "root";
$pass = "";
$db_name = "portfolio_db";

$conn = new mysqli($host, $user, $pass, $db_name);
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}
?>

<?php
require_once 'db_config.php';

header('Content-Type: application/json');

$sql = "SELECT name, type, percentage FROM skills";
$result = mysqli_query($conn, $sql);

$skills = [];

while ($row = mysqli_fetch_assoc($result)) {
    $skills[] = $row;
}

echo json_encode($skills);
?>
