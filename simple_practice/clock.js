const clockContainer = document.querySelector(".js-clock");
const clockTitle =clockContainer.querySelector("h1");

function returnSeconds(date){
    const seconds = date.getSeconds();
    return seconds < 10 ? `0${seconds}` : seconds;
}

function returnMinutes(date){
    const minutes = date.getMinutes();
    return minutes < 10 ? `0${minutes}` : minutes;
}

function returnHours(date){
    const hours = date.getHours();
    return hours < 10 ? `0${hours}` : hours;
}


function getTime(){
    const date = new Date();
    clockTitle.innerText = `${returnHours(date)}:${returnMinutes(date)}:${returnSeconds(date)}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();