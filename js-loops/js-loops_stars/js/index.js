console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let stars = 1; stars <= 5; stars++) {
    const img = document.createElement("img");

    if (stars <= filledStars) {
      img.src = "assets/star-filled.svg";
    } else {
      img.src = "assets/star-empty.svg";
    }
    img.addEventListener("click", () => {
      renderStars(stars);
    });
    starContainer.append(img);
  }

  // --^-- write or modify code above this line --^--
}

renderStars();
