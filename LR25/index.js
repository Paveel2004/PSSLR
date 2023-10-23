console.log("Task 1");
function helloName(name){
    console.log(`Привет, я ${name}!`)
}
console.log(helloName(`Павел`))

console.log("Task 2")
const myAwesomeArray = [
    {id: 1, name: "Кирилл"},
    {id: 2, name: "Мища"},
    {id: 3, name: "Антон"}    
]
function getName (array){
    array.forEach(array => {
        console.log(array.name);
    });
}

getName(myAwesomeArray);

console.log("Task 3")
myAwesomeArray2 = ["Кирилл", "Миша", "Антон", "Саша", "Женя", "Андрей", "Виктория", "Валерия", "Григорий"];
let vip = ["Саша","Артур", "Валерий", "Давид"];
let vip2 = ["Миша", "Саша", "Женя"];
function get(item,array){
    for (i = 0; i < array.length; i++){
        return array.includes(item);
    }
    
}
function getVIP(array, vip){
    k = 0;
    for(i = 0; i < array.length; i++)
    {
        for (j = 0; j < vip.length; j++)
        {
            if(array[i] === vip[j])
            {              
                console.log(array[i]);
                k++;
            }
        }
    }
    if (k === vip.length) console.log(`Все эелементы массива`);
    else console.log(`Не все элементы массива`);
}
console.log("имена которые есть в массиве: vip");
getVIP(myAwesomeArray2, vip)
console.log("имена которые есть в массиве: vip2");
getVIP(myAwesomeArray2, vip2)
