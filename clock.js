function currentTime() {
    var date = newDate();
    var hour = date.getHours();
    console.log(hour);
    var mins = date.getMinutes();
    var secs = date.getSeconds();
}

document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;



function updateTime(x) {
    if (x < 10) {
        return "0" + x;
    } else {
        return x;
    }
}



currentTime();