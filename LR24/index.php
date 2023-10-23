<!DOCTYPE html>
<html>
<head>
    <title>Галерея изображений</title>
</head>
<body>
    <h1>Загрузка изображений</h1>
    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['image'])) {
        $uploadsDirectory = 'uploads/';
        $uploadFile = $uploadsDirectory . basename($_FILES['image']['name']);

        if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadFile)) {
            echo 'Изображение успешно загружено.';
        } else {
            echo 'Ошибка при загрузке изображения.';
        }
    }
    ?>

    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">
        Выберите изображение для загрузки:
        <input type="file" name="image">
        <input type="submit" value="Загрузить">
    </form>

    <h2>Галерея изображений</h2>
    <?php
    $images = glob($uploadsDirectory . '*.*');
    if (!empty($images)) {
        foreach ($images as $image) {
            echo '<br>';
            echo '<img src="' . $image . '" alt="' . basename($image) . '" width="200">';
                        // Форма для добавления комментария
            echo '<form action="add_comment.php" method="POST">';
            echo '<input type="hidden" name="image_path" value="' . $image . '">';
            echo 'Ваш комментарий: <input type="text" name="comment">';
            echo '<input type="button" value="Добавить комментарий">';
            echo '</form>';

            
        }
    }
    ?> 
    <h1>Анализ текста</h1>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <textarea name="text" rows="5" cols="40"></textarea>
        <br>
        <input type="submit" value="Анализировать">
    </form>
    

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['text'])) {
        $text = $_POST['text'];

        // Разбиваем текст на слова
        $words = str_word_count($text, 1);

        // Считаем частоту встречаемости каждого слова
        $wordCount = array_count_values($words);

        // Сортируем массив по убыванию частоты
        arsort($wordCount);

        // Выводим список слов и их частоту
        echo '<h2>Результаты анализа:</h2>';
        echo '<ul>';
        foreach ($wordCount as $word => $count) {
            echo '<li>' . $word . ': ' . $count . '</li>';
        }
        echo '</ul>';
    }
    ?>
        <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submitted'])) {
        // Обработка данных формы после отправки
        // Ваши действия здесь
    }
    ?>

</body>
</html>
