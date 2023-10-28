

// ID валюты по ИСО 4217
const ID = "496";

const URL = `https://api.nbrb.by/exrates/rates/${ID}`;
document.getElementById('get-api').addEventListener('click', function (event) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    // при получении
    xhr.onload = () => {
        if (xhr.status == 200) {                
            const jsonResponse = JSON.parse(xhr.responseText);
            console.log(jsonResponse);
        } else {                                
            console.log("Server response: ", xhr.statusText);
        }
    };
    xhr.send();
})



function CreateTable(json) {
    let root = document.getElementById('tableContent');

    let table = document.createElement('table');
    let head = document.createElement('thead');

    let row_head = document.createElement('tr');

    ['флаг',"Название страны RUS", "Название страны EN", "Название страны BEL", "Курс"]
    .forEach(element => {
        let th = document.createElement('th');
        th.textContent = element;
        row_head.parentElement(th);
    });
    


}