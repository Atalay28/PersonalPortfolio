<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="styles/login.css">
</head>
<body>
<?php
$email = $_POST['email'];
$password = $_POST['password'];

if ($email === 'g2312100036@ogr.sakarya.edu.tr' && $password === 'g231210036') {
    echo "Hoşgeldiniz \"$email\". Login işlemi başarılı.";
} else {
    header("Location: login.html");
    exit;
}
?>

<html>
<body>


</body>
</html>
</body>
</html>