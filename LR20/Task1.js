
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
//  const draggables = document.querySelectorAll('.draggable');
// function Move(draggables) {
//     let offsetX, offsetY;
//     let isDragging = false;

//     draggables.forEach(draggable => {
//         draggable.addEventListener('mousedown', (event) => {
//             isDragging = true;
//             offsetX = event.clientX - draggable.getBoundingClientRect().left;
//             offsetY = event.clientY - draggable.getBoundingClientRect().top;
//         });

//         document.addEventListener('mousemove', (event) => {
//             if (isDragging) {
//                 const x = event.clientX - offsetX;
//                 const y = event.clientY - offsetY;
//                 draggable.style.left = x + 'px';
//                 draggable.style.top = y + 'px';
//             }
//         });

//         document.addEventListener('mouseup', () => {
//             isDragging = false;
//         });
//     });
// }

// const element = document.querySelectorAll('.draggable');
// const element2 = document.querySelectorAll(".draggable2");

// Move(element);
// Move(element2);


function Move (el){
let offsetX, offsetY;
let isDragging = false;

el.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - el.getBoundingClientRect().left;
    offsetY = event.clientY - el.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
}
const draggableText = document.getElementById('draggable-text');
const draggableImage = document.getElementById('draggable-image');

Move(draggableText);
Move(draggableImage);