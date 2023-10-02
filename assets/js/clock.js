window.onload = displayClock;

function displayClock() {
    var d = new Date();
    var min = (mins = ('0' + d.getMinutes()).slice(-2));
    var hh = (hours = ('0' + d.getHours()).slice(-2));
    

    document.getElementById('hour').innerText = hh;
    document.getElementById('separator').innerHTML = '- -';
    document.getElementById('minutes').innerText = min;

    setTimeout(displayClock, 5000);
}