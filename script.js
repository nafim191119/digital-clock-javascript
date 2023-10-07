let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("period");
let day = document.getElementById("day");
let year = document.getElementById("year");

setInterval(() => {
    let currentTime = new Date();
    let hour = currentTime.getHours();

    if (hour > 12 && hour < 24) {
        hrs.innerHTML = ((hour - 12) < 10 ? "0" : "") + (hour - 12);
    }
    else if(currentTime.getHours() == 00 ){
        hrs.innerHTML = 12;
    }
    else {
        hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    }
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    period.innerHTML = (currentTime.getHours() > 11 ? "PM" : "AM");
}, 1000);


let currentTime = new Date();
let hour = currentTime.getHours()

if (hour > 12 && hour < 24) {
    hrs.innerHTML = (hour - 12)
}
else {
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
}

console.log(currentTime)

