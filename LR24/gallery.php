<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Галерея изображений</title>
</head>
<body>
    <h1>Галерея изображений</h1>

    <form action="gallery.php" method="POST" enctype="multipart/form-data">
        <input type="file" name="image" accept="image/*" required>
        <input type="submit" value="Загрузить изображение">
    </form>

    <h2>Изображения в галерее:</h2>
    <div class="gallery">
        <?php
            $imageFiles = glob('uploads/*.{jpg,jpeg,png,gif}', GLOB_BRACE);

            foreach ($imageFiles as $image) {
                echo "<img src='$image' alt='Изображение'>";
                echo "<form method='POST'>";
                echo "<input type='hidden' name='image' value='$image'>";
                echo "<input type='text' name='comment' placeholder='Оставьте комментарий' required>";
                echo "<input type='submit' value='Добавить комментарий'>";
                echo "</form>";
                echo "<h3>Комментарии:</h3>";

                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    if (isset($_POST['image']) && isset($_POST['comment'])) {
                        $image = $_POST['image'];
                        $comment = $_POST['comment'];

                        // Выводим новый комментарий
                        echo "<p>$comment</p>";
                    }
                }
            }
        ?>
    </div>
</body>
</html>
