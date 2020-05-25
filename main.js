let start = document.getElementById('start');
let reset = document.getElementById('stop');
let stop = document.getElementById('reset');

let workMinutes = document.getElementById('work-minutes');
let workSeconds = document.getElementById('work-seconds');

let breakMinutes = document.getElementById('break-minutes');
let breakSeconds = document.getElementById('break-seconds');

let startTime

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
    if (workMinutes.innerText == 0 && workSeconds == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0) {

    }
}