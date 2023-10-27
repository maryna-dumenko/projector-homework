detonatorTimer(3);

// This function outputs to the console value every second
function detonatorTimer(delay) {
    setTimeout(function timerDelay(){
        if(delay === 0) {
            console.log("BOOM!");
        } else {
            console.log(delay--);
            setTimeout(timerDelay, 1000);
        }

    }, 1000);
}
