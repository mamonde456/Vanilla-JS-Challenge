const API_KEY = "c6199987f38226d5bb01b99c0e904674";

function onGe0k(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather-inner");
      const temperature = document.querySelector(".temperature-inner");
      const city = document.querySelector(".place");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} /`;
      temperature.innerText = ` ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weaher");
}

navigator.geolocation.getCurrentPosition(onGe0k, onGeoError);
