<?php
if (isset($_GET['userType'])) {
    $userType = $_GET['userType'];
    setcookie('userType', $userType, time() + 30, "/");
} else {
    if (isset($_COOKIE['userType'])) {
        $userType = $_COOKIE['userType'];
    }
}
if (isset($userType)){
    switch ($userType) {
        case 'beginner':
            echo "<p>Привет, новичок!</p>";
            break;
        case 'average':
            echo "<p>Привет, средний пользователь!</p>";
            break;
        case 'experienced':
            echo "<p>Привет, опытный пользователь!</p>";
            break;
        default:
            echo "<p>Добро пожаловать на сайт!</p>";
    }
} else {
    echo "<p>Добро пожаловать на сайт!</p>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Приветствие</title>
</head>
<body>

</body>
</html>
