function updateClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    document.getElementById("hour").textContent = hours;
    document.getElementById("minute").textContent = minutes;
    document.getElementById("second").textContent = seconds;
}

updateClock()

setInterval(updateClock, 1000)
