const fs = require('fs');

function createDirectory(directoryName) {
    fs.mkdir(directoryName, { recursive: true }, (err) => {
        if (err) {
            console.error(`Ошибка при создании каталога: ${err}`);
        } else {
            console.log(`Каталог "${directoryName}" успешно создан.`);
        }
    });
}

// Пример использования:
createDirectory('Тестовый каталог');
