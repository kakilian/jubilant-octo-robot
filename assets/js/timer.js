console.log('timer.js');

/**
 * Timer
 */
export function startTimer(duration, display, endCallBack) {
    console.log('Timers running');
    let timer = duration,
        minutes, seconds;

    console.log(timer);

    /**
     * Function to stop the Timer
     */
    let stop = () => {
        clearInterval(timeInterval);
        if (typeof endCallBack === 'function') {
            endCallBack();
        }
    };

    /**
     *  Start the interval
     */
    let timeInterval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        console.log(timer);
        console.log(typeof timer);

        if (--timer < 0) {
            alert("Time is up!");
            stop();
        }
    }, 1000);
    /**
     * WHen the users finishes the Quiz before the timer has stopped.
     */
    return stop;
}