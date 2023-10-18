
const image = document.getElementById("enlargable-image");
const originalWidth = image.width;
const originalHeight = image.height;

image.addEventListener("mouseover",()=>{
    image.style.width = (originalWidth * 2) + "px";
    image.style.height = (originalHeight * 2) + "px";
});
image.addEventListener("mouseout",()=>{
    image.style.width = originalWidth + "px";
    image.style.height = originalHeight + "px";
});

const text = document.getElementById("text");
const replaseButton = document.getElementById("replace-button");
replaseButton.addEventListener("click",()=>{
    const imageElement = document.createElement("img");
    imageElement.src = "photo_2023-10-16_17-33-06.jpg";
    imageElement.style.height = "200px";
    imageElement.style.width = "200px";
    text.innerHTML = "";
    text.appendChild(imageElement);
});

//3
 const draggables = document.querySelectorAll('.draggable');

        let offsetX, offsetY;
        let isDragging = false;

        draggables.forEach(draggable => {
            draggable.addEventListener('mousedown', (event) => {
                isDragging = true;
                offsetX = event.clientX - draggable.getBoundingClientRect().left;
                offsetY = event.clientY - draggable.getBoundingClientRect().top;
            });

            document.addEventListener('mousemove', (event) => {
                if (isDragging) {
                    const x = event.clientX - offsetX;
                    const y = event.clientY - offsetY;
                    draggable.style.left = x + 'px';
                    draggable.style.top = y + 'px';
                }
            });

            document.addEventListener('mouseup', () => {
                isDragging = false;
            });
        });
