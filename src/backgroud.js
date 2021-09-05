const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const random = Math.floor(Math.random() * images.length);

const bgImage = document.createElement("img");
bgImage.src =`img/${random}.jpg`;
document.body.appendChild(bgImage);
bgImage.classList.add("bg");

// document.body.style.backgroundImage = `url(img/${random}.jpg)`;
// document.body.classList.add("bg");


