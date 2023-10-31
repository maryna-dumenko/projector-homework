detonatorTimer(3);

// This function outputs to the console value every second
function detonatorTimer(delay) {
    const timerId = setInterval(function() {
        if (delay === 0) {
            console.log("BOOM!");
            clearInterval(timerId);
        } else {
            console.log(delay--);
        }
    }, 1000);
}
