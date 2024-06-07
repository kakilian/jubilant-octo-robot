
console.log('timer.js');

export function myTimer () {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec === -1) {
        clearInterval(time);
        alert("Time is almost up!",(''));
    }
};