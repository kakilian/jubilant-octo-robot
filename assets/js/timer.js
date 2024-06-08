console.log('timer.js');

export function startTimer(duration, display) {
    let timer = duration,
        minutes, seconds;
    const interval = setInterval(() => {
        minutes = parsInt(timer / 60, 10);
        seconds = parsInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            alert("Time is up!");
            endQuiz();
        }
    }, 1000);
}