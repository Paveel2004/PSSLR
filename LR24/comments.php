<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['image']) && isset($_POST['comment'])) {
        $image = $_POST['image'];
        $comment = $_POST['comment'];

        // Создаем массив с комментариями для каждого изображения
        if (!isset($_SESSION['image_comments'])) {
            $_SESSION['image_comments'] = [];
        }

        // Добавляем комментарий в массив
        $_SESSION['image_comments'][$image][] = $comment;

        // После успешной отправки комментария, перенаправляем на галерею
        //header('Location: gallery.php');
        exit; // Завершаем выполнение скрипта, чтобы избежать дополнительных перенаправлений
    }
}

?>
