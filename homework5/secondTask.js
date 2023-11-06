const buttonToggle = document.querySelector(".button--toggle");
const container = document.querySelector(".section");
const infoMessage = document.querySelector(".info-message")

let pageState = {};
document.addEventListener('DOMContentLoaded', () => {
    pageState = localStorage.getItem('pageState') !== null
        ? JSON.parse(localStorage.getItem('pageState'))
        : {
            isTurnedOn: false,
            lastTimeTurnedOn: null,
            lastTimeTurnedOff: null
        };

    updatePage();
});

buttonToggle.addEventListener("click", function (e){
    updateState(e, new Date());
})

function updatePage() {
    buttonToggle.innerText = pageState.isTurnedOn ? "Turn on" : "Turn off";
    if (pageState.isTurnedOn) {
        container.classList.add("section--dark");
        infoMessage.innerText = pageState.lastTimeTurnedOn ? `Last turn off: ${pageState.lastTimeTurnedOn}` : "";
    } else {
        container.classList.remove("section--dark");
        infoMessage.innerText =  pageState.lastTimeTurnedOff ? `Last turn on: ${pageState.lastTimeTurnedOff}`: "";
    }
}

function getDateFormatted(date) {
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

function updateState(event, date) {
    pageState.lastTimeTurnedOff = pageState.isTurnedOn? getDateFormatted(date) : pageState.lastTimeTurnedOff;
    pageState.lastTimeTurnedOn = !pageState.isTurnedOn? getDateFormatted(date) : pageState.lastTimeTurnedOn;
    pageState.isTurnedOn = !pageState.isTurnedOn;

    localStorage.setItem('pageState', JSON.stringify(pageState));
    updatePage();
}
