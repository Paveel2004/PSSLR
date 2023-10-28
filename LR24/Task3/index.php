<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Список слов по частоте встречаемости</title>
</head>
<body>
    <h1>Список слов по частоте встречаемости</h1>
    <form action="" method="POST">
        <textarea name="text" placeholder="Введите текст" rows="4" cols="50"></textarea>
        <br>
        <input type="submit" value="Получить список слов">
    </form>
    
    <?php
    
    ///
    ///
    ///
    /// Этот код полная хуйня
    ///
    ///
    ///


    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['text'])) {
        $text = $_POST['text'];

        // Преобразуем текст в нижний регистр и разделяем его на слова
        $words = str_word_count(strtolower($text), 1);

        // Считаем частоту встречаемости каждого слова
        $wordCount = array_count_values($words);

        // Сортируем слова по убыванию частоты
        arsort($wordCount);

        echo "<h2>Список слов по частоте встречаемости:</h2>";
        echo "<ul>";
        foreach ($wordCount as $word => $count) {
            echo "<li>$word ($count раз)</li>";
        }
        echo "</ul>";
    }
    ?>


</body>
</html>
