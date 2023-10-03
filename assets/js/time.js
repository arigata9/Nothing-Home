window.onload = displayTimeDate;

function displayTimeDate() {
    const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];


    var d = new Date();
    var mm = monthNames[d.getMonth()];
    var dd = d.getDate();
    var min = (mins = ('0' + d.getMinutes()).slice(-2));
    var hh = (hours = ('0' + d.getHours()).slice(-2));
    

    document.getElementById('hour').innerText = hh;
    document.getElementById('separator').innerHTML = '- -';
    document.getElementById('minutes').innerText = min;
    document.getElementById('day').innerText = dd;
    document.getElementById('month').innerHTML = mm;

    setTimeout(displayClock, 5000);
}