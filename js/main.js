
    const verbs = [
      "MAKES",
      "BUILDS",
      "CREATES",
      "LEARNS",
      "ANALYZES",
      "DESIGNS",
      "BAKES",
      "PAINTS",
      "FIGURES IT OUT"
    ];

    const colors = [
      "#ff3ea5",
      "#315cff",
      "#8b45ff",
      "#ff7a00",
      "#c7f900"
    ];

    const verbButton = document.getElementById("verbButton");
    const verb = document.getElementById("verb");

    let verbIndex = 0;

    function changeVerb() {
      verbIndex = (verbIndex + 1) % verbs.length;

      verb.textContent = verbs[verbIndex];

      const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

      verb.style.color = randomColor;
    }

 if (verbButton && verb) {
    verbButton.addEventListener("click", changeVerb);
}

/* ========================================
   STARS
   ======================================== */

function setupStarCards() {
    const starCards = document.querySelectorAll(".star-card");

    starCards.forEach((card) => {
        card.addEventListener("click", function () {
            const flipped = this.classList.toggle("is-flipped");
            this.setAttribute("aria-pressed", flipped);
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupStarCards);
} else {
    setupStarCards();
}
