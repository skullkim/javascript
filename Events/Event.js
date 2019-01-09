//Events
// const title = document.querySelector("#title");

// function handleResize(evnet){
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleResize);//Event가 진행될때 까지(resize 될떄까지) 기다렸다가 handleResize를 실행함

//if else
// const age = prompt("How old are you");
// if(age >= 18 && age <= 21) console.log("You can drink but you should not");
// else if(age > 21) console.log("go ahead");
// else console.log("you are too young");

//if else + evnets
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)"
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    console.log(title.style.color);
}

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) title.style.color = OTHER_COLOR;
    else title.style.color = BASE_COLOR;
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();
//js DOM events mdn:https://developer.mozilla.org/ko/docs/Web/Events


