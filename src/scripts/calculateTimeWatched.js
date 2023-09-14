export function addPauseLocalStorage() {
    const timerWatched = JSON.parse(localStorage.getItem("timerWatched"));
    if (timerWatched) {
        const currentDate = getTimeCurrent();
        timerWatched.pause = currentDate
        localStorage.setItem("pause", JSON.stringify(currentDate))
    }

}

export function getTimeCurrent() {
    const date = new Date();
    const days = date.getDate() * 24 * 60 * 60;
    const hours = date.getHours() * 60 * 60;
    const minutes = date.getMinutes() * 60;
    const seconds = date.getSeconds();
    const currenTimeFormated = days + hours + minutes + seconds;

    return currenTimeFormated;
}

export function calculateTimerByCurrentTimer(){
    const timerWatched = JSON.parse(localStorage.getItem("timerWatched"));
    const currentTime = getTimeCurrent()
    
    if(timerWatched){
        if(timerWatched.play >= timerWatched.pause){
            let differenceValues = Math.floor(currentTime - timerWatched.play);
            timerWatched.timer += differenceValues
            timerWatched.play = currentTime;
            localStorage.setItem("timerWatched", JSON.stringify(timerWatched))
        }
        return timerWatched.timer
    } else return 0
}