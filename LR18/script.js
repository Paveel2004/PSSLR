
      
    document.addEventListener("DOMContentLoaded",()=>{
        //1
        document.getElementById('moveButton').addEventListener('click',()=>{
            const list1 = document.getElementById('list1');
            const list2 = document.getElementById('list2');

            const list2Items = list2.querySelectorAll('li');

            list2Items.forEach(function(item){
                list1.appendChild(item);
            });
        });

        //2
        const itemText = document.getElementById("itemText");
        const addToStartButton = document.getElementById("addToStart");
        const addToEndButton = document.getElementById("addToEnd");
            
        addToStartButton.addEventListener("click",()=>{
            addItem(true);
        });
        addToEndButton.addEventListener("click",()=>{
            addItem(false);
        });
        function addItem(atStart){
            const text = itemText.value.trim();
            if(text === ""){
                 alert("Введите текст");
                return;
            }
            const li = document.createElement("li");
            li.textContent = text;

            if(atStart){
                itemList.insertBefore(li, itemList.firstChild);
            } 
            else{
                itemList.appendChild(li);
            }
            itemText.value = ""

        }

        //3
        function removeTextNodes(element){
        const childNodes = element.childNodes;

        for(let i = 0; i < childNodes.length; i++) {
            const node = childNodes[i];
            if(node.nodeType === Node.TEXT_NODE){
                element.removeChild(node);
            }
        }
    }
    const test = document.getElementById("test");
    test.addEventListener("click",()=>{removeTextNodes(document.getElementById("myElement"))});

    });

    //4
    const del = document.getElementById("del");
    del.addEventListener('click',()=>{
        const list1 = document.getElementById("GG");
        const list2 = document.getElementById("WP");

        while (list1.firstChild){
            list1.removeChild(list1.firstChild);
        }
        while (list2.firstChild){
            list2.removeChild(list2.firstChild);
        }

    });

    //5
    const del2 = document.getElementById("del2");
    del2.addEventListener('click',()=>{
        const main = document.getElementById("main");

        while(main.firstChild){
            main.removeChild(main.firstChild);
        }

    });

    //6
    const tic = document.getElementById('tic');
    tic.addEventListener('click',()=>{
        const myList = document.getElementById('myList');
        const options = myList.getElementsByTagName('option');

        for(const option of options){
            if(option.textContent === 'Модель'){
                const newText = document.createTextNode('Чертёж');
                option.replaceChild(newText, option.firstChild);
                break;
            }

        }
    })
