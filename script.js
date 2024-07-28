const apiKey = "2a6282f1a487551528446f0d0521c527";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-button input");
const searchBtn = document.querySelector(".search-button button");
const weatherImg = document.querySelector(".weatherImg");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        alert("Invalid City Name");
        // document.querySelector(".weather").Style.display == "none";
    }
    else {

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "images/cloudy.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherImg.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherImg.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherImg.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snaw") {
            weatherImg.src = "images/snaw.png";
        }
        else if (data.weather[0].main == "Haze") {
            weatherImg.src = "images/haze.png";
        }
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
// checkWeather();