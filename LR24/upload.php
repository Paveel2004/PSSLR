<?php
$uploadDir = 'uploads/';

if (isset($_FILES['image'])) {
    $image = $_FILES['image'];

    // Проверка, что файл - изображение
    $imageType = exif_imagetype($image['tmp_name']);
    $allowedTypes = [IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_GIF];
    
    if (in_array($imageType, $allowedTypes)) {
        $fileName = $uploadDir . uniqid() . '_' . $image['name'];
        
        // Сохранение изображения
        move_uploaded_file($image['tmp_name'], $fileName);
    }
}

header('Location: gallery.php');
?>
