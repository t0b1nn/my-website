function updateClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0")
    const mins = String(time.getMinutes()).padStart(2, "0")
    const secs = String(time.getSeconds()).padStart(2, "0")
    document.getElementById("clock").textContent = `${hour}:${mins}:${secs}`
}

updateClock()

setInterval(updateClock, 1000)
