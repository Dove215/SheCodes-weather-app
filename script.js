function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#time");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function showTemperature(response) {
  console.log(response.data);
  let roundTemp = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#warmth");
  console.log(temperature);
  temperature.innerHTML = `${roundTemp} °`;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humid").innerHTML = response.data.main.humidity;
}

function cityWeather(event) {
  event.preventDefault();
  let input = document.querySelector("#input-city");
  console.log(input.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${input.value}`;
  let apiKey = "515c9ddbeb3cda9061acfab71031839e";
  let city = document.querySelector("#input-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(event);
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-engine");
form.addEventListener("submit", cityWeather);
