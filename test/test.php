<?php
$servername = "racingsocial.ci5f81mkv0wt.us-west-2.rds.amazonaws.com";
$username = "forge";
$password = "GP8wDgo1l6IO7efOG4zr";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";