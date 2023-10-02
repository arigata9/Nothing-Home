window.onload = displayClock;

function displayClock() {
    var d = new Date();
    var dd = d.getDate();
    var min = (mins = ('0' + d.getMinutes()).slice(-2));
    var hh = d.getHours();

    document.getElementById('hour').innerText = hh;
    document.getElementById('separator').innerHTML = '- -';
    document.getElementById('minutes').innerText = min;

    setTimeout(displayClock, 1000);
}