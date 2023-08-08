const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#day");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const dayName = days[date.getDay()];

  const todaydate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}(${dayName})`;

  clock.innerText = `${hours}:${minutes}`;
  day.innerText = todaydate;
}

getClock();
setInterval(getClock, 1000);
