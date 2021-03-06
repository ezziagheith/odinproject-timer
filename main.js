let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');

let workMinutes = document.getElementById('work-minutes');
let workSeconds = document.getElementById('work-seconds');

let breakMinutes = document.getElementById('break-minutes');
let breakSeconds = document.getElementById('break-seconds');

/* functionality for btns */

let startTime; 

// need to add functionality for btns

start.addEventListener('click', function(){
    if(startTime === undefined){
        startTime = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

stop.addEventListener('click', function () {
    stopInterval()
    startTime = undefined;
})

reset.addEventListener('click', function(){
    workMinutes.innerHTML = 25;
    workSeconds.innerHTML = '00';

    breakMinutes.innerHTML = 5;
    workSeconds.innerHTML = '00';

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTime = undefined;
})


timer = () => {
    // this is the work timer countdown
    if (workSeconds.innerText != 0) {
        workSeconds.innerText--;
    } else if (workMinutes.innerText != 0 && workSeconds.innerText == 0) {
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    }

    // this is the break timer countdown
    if (workMinutes.innerText == 0 && workSeconds.innerText == 0) {
        if (breakSeconds.innerText != 0) {
            breakSeconds.innerText--;
        } else if (breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
            breakSeconds.innerText = 59;
            breakMinutes.innerText--;
        }
    }
    // this is the increment counter (cycles) that'll go up by 1 if both work and break timers completed
    if (workMinutes.innerText == 0 && workSeconds.innerHTML == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0) {
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

// function to stop timer
stopInterval = () => {
    clearInterval(startTime)
}