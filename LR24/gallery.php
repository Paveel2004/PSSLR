<?php
$uploadDir = 'uploads/';
$images = glob($uploadDir . '*');

foreach ($images as $image) {
    echo '<img src="Без имени.png' . $image . '" alt="Изображение">';
}
?>
