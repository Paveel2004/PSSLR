//Task2
const fileInput = document.getElementById('file-input');
const jsonContent = document.getElementById('json-content');

fileInput.addEventListener('change', (event)=> {
    const selectedFile = event.target.files[0];
    if(selectedFile){
        const reader = new FileReader();

        reader.onload = function(e){
            try{
                const jsonData = JSON.parse(e.target.result)
                jsonContent.textContent = JSON.stringify(jsonData,null,2);
            }
            catch(error)
            {
                jsonContent.textContent="Error 1000-7";
            }
        }
        reader.readAsText(selectedFile);
    }
})