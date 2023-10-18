
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
