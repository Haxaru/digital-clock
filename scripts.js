const time = document.querySelector(".time");
function updateTime() {
  time.textContent = new Date().toTimeString();
}

setInterval(updateTime, 1000);
