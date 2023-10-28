<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($_FILES['image']['name']);
        
        if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadFile)) {
            
        } else {
            echo "Ошибка при загрузке изображения.";
        }
    } else {
        echo "Ошибка: Неверный файл или ошибка при загрузке.";
    }
}
?>
