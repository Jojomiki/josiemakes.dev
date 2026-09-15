
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
/* ========================================
   GLITTER CRIMES
   ======================================== */

const sparkleSymbols = ["✦", "✧", "⋆", "·"];
const sparkleColors = [
    "#ff3ea5",
    "#315cff",
    "#c7f900",
    "#ff7a00",
    "#8b45ff"
];

function makeSparkleBurst(x, y, amount = 8) {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    for (let i = 0; i < amount; i++) {
        const sparkle = document.createElement("span");

        sparkle.className = "click-sparkle";
        sparkle.textContent =
            sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        sparkle.style.color =
            sparkleColors[Math.floor(Math.random() * sparkleColors.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = 35 + Math.random() * 70;

        sparkle.style.setProperty(
            "--sparkle-x",
            `${Math.cos(angle) * distance}px`
        );

        sparkle.style.setProperty(
            "--sparkle-y",
            `${Math.sin(angle) * distance}px`
        );

        sparkle.style.setProperty(
            "--sparkle-rotate",
            `${Math.random() * 360 - 180}deg`
        );

        sparkle.style.fontSize = `${12 + Math.random() * 18}px`;

        document.body.appendChild(sparkle);

        sparkle.addEventListener("animationend", () => {
            sparkle.remove();
        });
    }
}


/* sparkle when artwork flips */

document.querySelectorAll(".star-card").forEach((card) => {
    card.addEventListener("pointerdown", (event) => {
        makeSparkleBurst(event.clientX, event.clientY, 9);
    });
});


/* THE BIG STAR HAS NO ADULT SUPERVISION */

const titleStar = document.querySelector(".star-title");

if (titleStar) {
    titleStar.addEventListener("pointerdown", (event) => {
        makeSparkleBurst(event.clientX, event.clientY, 28);
    });
}
