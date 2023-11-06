const buttonToggle = document.querySelector(".button--toggle");
const container = document.querySelector(".section");
const infoMessage = document.querySelector(".info-message")

function getPageStateFromStorage() {
    return JSON.parse(localStorage.getItem('pageState')) || {
        isTurnedOn: false,
        lastTimeTurnedOn: null,
        lastTimeTurnedOff: null
    };
}

buttonToggle.addEventListener("click", function (){
    updateState(getPageStateFromStorage(), new Date());
})

function updatePage(state) {
    buttonToggle.innerText = state.isTurnedOn ? "Turn on" : "Turn off";
    if (state.isTurnedOn) {
        container.classList.add("section--dark");
        infoMessage.innerText = state.lastTimeTurnedOn ? `Last turn off: ${state.lastTimeTurnedOn}` : "";
    } else {
        container.classList.remove("section--dark");
        infoMessage.innerText =  state.lastTimeTurnedOff ? `Last turn on: ${state.lastTimeTurnedOff}`: "";
    }
}

function getDateFormatted(date) {
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

function updateState(state, date) {
    state.lastTimeTurnedOff = state.isTurnedOn? getDateFormatted(date) : state.lastTimeTurnedOff;
    state.lastTimeTurnedOn = !state.isTurnedOn? getDateFormatted(date) : state.lastTimeTurnedOn;
    state.isTurnedOn = !state.isTurnedOn;

    localStorage.setItem('pageState', JSON.stringify(state));
    updatePage(state);
}

updatePage(getPageStateFromStorage());