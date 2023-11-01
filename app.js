let daysItem = document.getElementById('days');
let hoursItem = document.getElementById('hours');
let minutesItem = document.getElementById('minutes');
let secItem = document.getElementById('sec');
let year = document.getElementById('year');
let intervalId = null;

function viewCountdown() {
    let date = new Date();
    let newYr = new Date(`1 Jan ${date.getFullYear() + 1}`);
    let subt = newYr.getTime() - date.getTime();
    let daysLeft = Math.floor(subt / 1000 / 60 / 60 / 24);
    let hoursLeft = Math.floor(subt / 1000 / 60 / 60) % 24;
    let minutesLeft = Math.floor(subt / 1000 / 60) % 60;
    let secondsLeft = Math.floor(subt / 1000) % 60;

    if (daysLeft === 0 && hoursLeft === 0 && minutesLeft === 0 && secondsLeft == 0) {
        clearInterval(intervalId);
        Swal.fire({
            title: 'Happy New Year!',
            text: `Welcome to the new year ${newYr.getFullYear()}`,
            confirmButtonText: 'OK'
        }).then(() => {
            intervalId = setInterval(viewCountdown, 1000);
        });
    }
    daysItem.innerHTML = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
    hoursItem.innerHTML = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
    minutesItem.innerHTML = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
    secItem.innerHTML = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
    year.innerHTML = newYr.getFullYear();
}
viewCountdown();
intervalId = setInterval(viewCountdown, 1000);