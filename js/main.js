let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = 'stopped';

let display = document.querySelector('.display');
let stopStart = document.querySelector('#startStop');

function stopWatch(){
    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) displaySeconds = `0${seconds}`;
    else displaySeconds = seconds;
    if(minutes < 10) displayMinutes = `0${minutes}`;
    else displayMinutes = minutes;
    if(hours < 10) displayHours = `0${hours}`;
    else displayHours = hours;

    display.innerHTML = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;
}

function startStop(){
    if (status === 'stopped'){
        interval = setInterval(stopWatch, 1000);
        stopStart.innerHTML = 'стоп';
        status = 'started';
    }else{
        clearInterval(interval);
        stopStart.innerHTML = 'старт';
        status = 'stopped';
    }

}

function reset(){
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.innerHTML = "00 : 00 : 00";
    stopStart.innerHTML = 'старт';
}