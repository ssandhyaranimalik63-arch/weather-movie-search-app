async function searchWeather() {

let city = document.getElementById("city").value;

if (city === "") {
    alert("Please enter a city name");
    return;
}

try {
    let data = await getWeather(city);

    if (!data.results || data.results.length === 0) {
        document.getElementById("weatherResult").innerHTML =
            "City not found!";
        return;
    }

    let location = data.results[0];

    let url = "https://api.open-meteo.com/v1/forecast?latitude="
        + location.latitude
        + "&longitude=" + location.longitude
        + "&current=temperature_2m,relative_humidity_2m,wind_speed_10m";

    let response = await fetch(url);
    let weather = await response.json();


document.getElementById("weatherResult").innerHTML =

    "<div class='weather-card'>" +

    "<h2>" + location.name + "</h2>" +

    "<h1>🌤️ " +
    weather.current.temperature_2m + " °C</h1>" +

    "<div class='weather-details'>" +

    "<p>💧 Humidity: " +
    weather.current.relative_humidity_2m + "%</p>" +

    "<p>💨 Wind Speed: " +
    weather.current.wind_speed_10m + " km/h</p>" +

    "</div>" +

    "</div>";

} catch (error) {
    document.getElementById("weatherResult").innerHTML =
        "Something went wrong. Please try again.";
}

}

document.getElementById("searchBtn").addEventListener("click", searchWeather);