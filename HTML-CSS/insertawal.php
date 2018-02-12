<?php
include('koneksi.php');
$name = $_POST['nama'];
$email = $_POST['email'];
$telpon  = $_POST['telpon'];
$tanya  = $_POST['tanya'];
$query = "INSERT INTO kontak SET nama='$name', email='$email', telpon='$telpon', kritik='$tanya'";
$saved = mysqli_query($query, $conn);

if ($conn->query($query) === TRUE) {
    header('Location: index.html');
    // header("location:index.html");
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
}

?>