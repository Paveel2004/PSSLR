const fs = require('fs');

//Task 1
const personInfo = {
    name: "Pavel",
    age: 25,
    subject: {
        Math: [7,5,3,8,9],
        Physics: [4,2,3,5]
    }
}
const gangster = {
    name: "Roma",
    articles: [205,206,207],
    age: 19,
    
}
// Преобразование объекта в JSON-строку
const jsonContent = JSON.stringify(personInfo, null, 2); // null и 2 используются для форматирования вывода
const gangsterJson = JSON.stringify(gangster, null, 2);
// Запись JSON-строки в файл
fs.writeFileSync('gangster.json', gangsterJson, 'utf-8');
fs.writeFileSync('personInfo.json', jsonContent, 'utf-8');
