//Events
// const title = document.querySelector("#title");

// function handleResize(evnet){
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleResize);//Event가 진행될때 까지(resize 될떄까지) 기다렸다가 handleResize를 실행함

//if else + evnets
const age = prompt("How old are you");
if(age >= 18 && age <= 21) console.log("You can drink but you should not");
else if(age > 21) console.log("go ahead");
else console.log("you are too young");