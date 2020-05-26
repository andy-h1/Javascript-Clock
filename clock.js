function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;
    var t = setTimeout(currentTime, 1000);
}

function updateTime(x) {
    if (x < 10) {
        return "0" + x;
    } 
    else {
        return x;
    }
}

currentTime();