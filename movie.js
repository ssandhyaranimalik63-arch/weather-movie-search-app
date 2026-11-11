async function searchMovie() {

    let movieName = document.getElementById("movieName").value;

    if (movieName === "") {
        alert("Please enter a movie name");
        return;
    }

    let apiKey = ".....";

    let url = "https://www.omdbapi.com/?apikey="
        + apiKey + "&t=" + encodeURIComponent(movieName);

    try {

        let response = await fetch(url);
        let data = await response.json();

        if (data.Response === "False") {
            document.getElementById("movieResult").innerHTML =
                "Movie not found!";
            return;
        }

        let poster = data.Poster;

        if (poster === "N/A") {
            poster = "";
        }

        document.getElementById("movieResult").innerHTML =

            "<h2>" + data.Title + "</h2>" +

            (poster !== "" ?
            "<img src='" + poster + "' width='200'>" : "") +

            "<p>Release Date: " + data.Released + "</p>" +

            "<p>Rating: " + data.imdbRating + "/10</p>" +

            "<p>" + data.Plot + "</p>";

    }

    catch (error) {

        document.getElementById("movieResult").innerHTML =
            "Unable to load movie. Please try again.";

    }
}

document.getElementById("searchMovie")
    .addEventListener("click", searchMovie);