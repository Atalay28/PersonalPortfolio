document.addEventListener("DOMContentLoaded", function () {
  var apibutton = document.querySelector("#button");

  if (apibutton) {
    apibutton.addEventListener("click", function () {
      var apisection = document.querySelector("#api");
      if (apisection) {
        apisection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

fetch("https://ghibliapi.vercel.app/films")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const movieContainer = document.getElementById("game-data");
    if (!movieContainer) return;

    movieContainer.innerHTML = "";

    data.slice(0, 5).forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("game-item", "mb-4", "p-3", "border", "rounded");

      const title = document.createElement("h4");
      title.textContent = movie.title;

      const desc = document.createElement("p");
      desc.textContent = movie.description.substring(0, 150) + "...";

      const year = document.createElement("p");
      year.innerHTML = `<strong>Yıl:</strong> ${movie.release_date}`;

      movieCard.appendChild(title);
      movieCard.appendChild(desc);
      movieCard.appendChild(year);

      movieContainer.appendChild(movieCard);
    });
  })
  .catch((error) => {
    console.error("Film verileri alınamadı:", error);
  });