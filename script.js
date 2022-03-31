/*

const current_date = "12 Jan 2022"; // JS can read these values in miliseconds
const target_date = "1 Jan 2023";

let countdown = target_date - current_date; 

let seconds = (countdown / 1000) % 3600 =  
let minutes = ((countdown / 1000) - (seconds*3600)) % 60 =
let hours = (countdown /1000) - seconds - minutes) =
let days = (countdown /1000) - seconds - minutes - hours) =

*/
const weeksEl = document.getElementById('weeks');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '1 Jan 2023';

function countdown() {

    const newYearsDate = new Date(newYears); 
    
    /* "new Date" appears to pick live data from the JS library down to the milisecond with our date "newYears"
    the non specified hour minute etc will marked as zero, apparently */

    const currentDate = new Date();  

    //nothing written within, appears to account for the current second

    const seconds = (newYearsDate - currentDate) /1000;

    const weeks = Math.floor(seconds / 3600/24/7);
    const days = Math.floor(seconds / 3600/24) % 7;
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const secondsleft = Math.floor(seconds) % 60;

    // variables in functions need to be displayed twice to show as bright lit
    
   // console.log (days, hours, minutes, seconds);
    
    weeksEl.innerHTML = weeks;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = secondsleft; 


}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
//?
}

//intial call
countdown(); //why this mention? to see the miliseconds logged in the console?

setInterval(countdown,1000); //1000? as in iterate 1 time per second?




