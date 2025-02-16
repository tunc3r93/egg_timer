<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "egg_time_history";

try {
    $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Verbindung fehlgeschlagen: " . $e->getMessage();
}
?>
