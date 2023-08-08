function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"dd5ecf845cf2be317825d6f6dd7a7b1f"}&units=metric`;
  /* API KEY from openweathermap.org */
  /*
feels_like
: 
33.82
humidity
: 
81
temp
: 
28.59
*/
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const city = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather span:nth-child(3)");
      const humidity = document.querySelector("#weather span:nth-child(4)");

      const iconImg = document.querySelector("#iconImg");
      const icon = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      iconImg.setAttribute("src", iconUrl);

      city.innerHTML = `Location: ${data.name} <br>`;
      temp.innerHTML = `Temperature: ${data.main.temp.toFixed(1)}℃ <br>`;
      weather.innerHTML = `Today: ${data.weather[0].main} <br>`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}`;
    });
}
function onGeoError() {
  alert("Sorry, we cannot find the weather");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
