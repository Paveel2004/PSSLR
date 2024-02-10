<?php

setcookie("cookie_name", "", time() - 3600, "/");

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $message = "Cookies успешно обнулены!";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Обнуление Cookies</title>
</head>
<body>
    <h2>Обнуление Cookies</h2>
    
    <?php if (isset($message)) : ?>
        <p><?php echo $message; ?></p>
    <?php endif; ?>

    <form method="post" action="">
        <input type="submit" name="submit" value="Обнулить Cookies">
    </form>
</body>
</html>
