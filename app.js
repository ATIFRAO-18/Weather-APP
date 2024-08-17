const apiKey = "eba6e7d63adc7f51902bea83ad1fd525";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weather_image = document.querySelector(".weather-icon");

async function checkWeather(city) {
  console.clear();

  let res = await fetch(url + city + `&appid=${apiKey}`);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let response = await res.json();

    console.log(response);

    document.querySelector(".city").innerHTML = response.name;

    document.querySelector(".temp").innerHTML =
      Math.round(response.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML =
      response.main.humidity + "%";

    document.querySelector(".wind").innerHTML = response.wind.speed + "km/h";

    if (response.weather[0].main == "Clouds") {
      weather_image.src = "./asset/img/clouds.png";
    } else if (response.weather[0].main == "Clear") {
      weather_image.src = "./asset/img/clear.png";
    } else if (response.weather[0].main == "Drizzle") {
      weather_image.src = "./asset/img/drizzle.png";
    } else if (response.weather[0].main == "Humidity") {
      weather_image.src = "./asset/img/humidity.png";
    } else if (response.weather[0].main == "Mist") {
      weather_image.src = "./asset/img/mist.png";
    } else if (response.weather[0].main == "Rain") {
      weather_image.src = "./asset/img/rain.png";
    } else if (response.weather[0].main == "Snow") {
      weather_image.src = "./asset/img/snow.png";
    } else if (response.weather[0].main == "Wind") {
      weather_image.src = "./asset/img/wind.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
