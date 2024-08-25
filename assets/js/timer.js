console.log('timer.js');

/**
 * Starts a countdown timer and updates the display.
 * @param {number} duration - The duration of the timer in seconds.
 * @param {HTMLElement} display - The element to display the timer.
 * @param {Function} endCallback - Function to call when the timer ends.
 */
export function startTimer(duration, display, endCallback) {
    let timer = duration;
    const stop = () => {
        clearInterval(timeInterval);
        endCallback();
    };

    const timeInterval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (--timer < 0) {
            stop();
            alert("Time's up!");
        }
    }, 1000);

    return stop;
}