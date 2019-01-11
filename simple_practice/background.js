const body = document.querySelector("body");
const IMG_NUMBER = 3;

function painImage(imgNumber){
    const image = new Image();
    image.src = `${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function getRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    painImage(randomNumber);
}

init();