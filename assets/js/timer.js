console.log('timer.js');

/**
 * Timer
 */
export function startTimer(duration, display, endCallBack) {
    console.log('Timers running');
    let timer = duration,
        minutes, seconds;

    /**
     * Function to stop the Timer
     */
    let stop = () => {
        clearInterval(timeInterval);
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

        if (--timer < 0) {
            stop();
            alert("Time is up!");
            if (typeof endCallBack === 'function') {}
            endCallBack();
        }
    }, 1000);
}