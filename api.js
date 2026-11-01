async function getWeather(city) {

    let url = "https://geocoding-api.open-meteo.com/v1/search?name="
        + encodeURIComponent(city);

    let response = await fetch(url);

    let data = await response.json();

    return data;
}