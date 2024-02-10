<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST["name"];
    $age = $_POST["age"];
    if (!empty($fname) && !empty($age)) {
        setcookie("user_name", $fname, time() + 3600);
        setcookie("user_age", $age, time() + 3600);
    }
}
if (isset($_POST["delete_cookies"])) {
    setcookie("user_name", "", time() - 3600);
    setcookie("user_age", "", time() - 3600);
    echo "Куки успешно удалены!";
}
if (isset($_POST["view_cookies"])) {
    $user_name = $_COOKIE["user_name"];
    $user_age = $_COOKIE["user_age"];
    echo "Имя пользователя: " . $user_name . "<br>";
    echo "Возраст: " . $user_age;
}
if (isset($_POST["array_cookies"])){
    setcookie("lang[1]", "PHP");
    setcookie("lang[2]", "C#");
    setcookie("lang[3]", "Java");
    if (isset($_COOKIE["lang"])){
        foreach($_COOKIE["lang"] as $name => $value){
            $name = htmlspecialchars($name);
            $value = htmlspecialchars($value);
            echo "$name. $value <br>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Печеньки</title>
</head>
<body>
    <form method="post" action="">
        <p>Имя: <input type="text" name="name"></p>
        <p>Возраст: <input type="text" name="age"></p>
        <input type="submit" name="save_cookies" value="Записать куки">
        <input type="submit" name="delete_cookies" value="Удалить куки">
        <input type="submit" name="view_cookies" value="Просмотреть куки">
        <input type="submit" name="array_cookies" value="Массив куки">
    </form>
</body>
</html>
