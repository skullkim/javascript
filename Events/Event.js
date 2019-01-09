const title = document.querySelector("#title");

function handleResize(evnet){
    title.style.color = "blue";
}

title.addEventListener("click", handleResize);//Event가 진행될때 까지(resize 될떄까지) 기다렸다가 handleResize를 실행함