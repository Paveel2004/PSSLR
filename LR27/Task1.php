<?php
function setVisitorCookie($name, $value) {
    setcookie($name, $value, time() + 30);
}

if (isset($_COOKIE['visitor'])) {
    $visitorName = $_COOKIE['visitor'];
    echo "Вы снова зашли на сайт студента $visitorName.";
} else {
    $visitorName = "Торкайло П. А.";
    setVisitorCookie('visitor', $visitorName);
    echo "Я вас не знаю.";
}
?>
