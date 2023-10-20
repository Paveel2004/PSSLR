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


//Task 3
const usetsData = [
    { name: "Петр", age: 22 },
    { name: "Мария", age: 17 },
    { name: "Иван", age: 30 },
    { name: "Анна", age: 25 },
];
//Создаём Jon файл
const jsonUser = JSON.stringify(usetsData,null,2);
fs.writeFileSync('users.json',jsonUser,'utf-8');
//Читаем
const readJson = fs.readFileSync('users.json','utf-8');
const jsonObj = JSON.parse(readJson);
function filterUsersByAge(users){
    return users.filter(user => user.age > 18);
}

console.log(jsonObj);
const result = filterUsersByAge(jsonObj);
console.log(result);

//Task 4
const book = {
    name: "Мафиозники",
    author: "Зубенко Михаил",
    Publication:{
        name: "RU MAFIA",
        year: 1993
    }
}
const bookJson = JSON.stringify(book,null,2);
fs.writeFileSync("book.json",bookJson,"utf-8");
const parseBook = JSON.parse(bookJson);
console.log(parseBook.author);

//Task 5
let car = {
    wheels: 4,
    places:2,
    maxSpeed: 200,  
}
const jsonCar = JSON.stringify(car,null,2);
console.log("Строка json \n"+jsonCar);
car = JSON.parse(jsonCar)
console.log(car);