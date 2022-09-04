function currentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let time = hours + ':' + minutes + ':' + seconds;

  document.getElementById("clock").innerText = time;

  setTimeout(function() {currentTime()}, 1000);
}

function changeColor() {
  let colors = ["orange", "red", "blue", "yellow", "grey", "purple", "brown", "black", "green"];
  let max = 9;
  let randomNumber = Math.floor(Math.random() * max);
  document.getElementById("clock").style.color = colors[randomNumber];
}

currentTime();