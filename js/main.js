/* ========================================
   JOSIE MAKES — MAIN JAVASCRIPT
   ======================================== */


/* ========================================
   HOMEPAGE VERB SWITCHER
   ======================================== */

function setupVerbSwitcher() {
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

    // Not the homepage? Nothing to do.
    if (!verbButton || !verb) return;

    let verbIndex = 0;

    verbButton.addEventListener("click", () => {
        verbIndex = (verbIndex + 1) % verbs.length;

        verb.textContent = verbs[verbIndex];

        const randomColor =
            colors[Math.floor(Math.random() * colors.length)];

        verb.style.color = randomColor;
    });
}


/* ========================================
   STAR CARD FLIPS
   ======================================== */

function setupStarCards() {
    const starCards = document.querySelectorAll(".star-card");

    starCards.forEach((card) => {
        card.addEventListener("click", () => {
            const flipped = card.classList.toggle("is-flipped");
            card.setAttribute("aria-pressed", flipped);
        });
    });
}


/* ========================================
   GLITTER CRIMES
   ======================================== */

const sparkleSymbols = [
    "✦", "*", "⋆", "·",
    "★", "✧", "⋆",
    "★", "✶", "✷"
];

const sparkleColors = [
    "#ff2fa8", // electric pink
    "#ff71c8", // bubblegum
    "#ffb3e6", // cotton candy
    "#9b5cff", // electric violet
    "#c9a7ff", // lavender
    "#654cff", // ultraviolet
    "#45caff", // electric sky
    "#9eeaff", // icy blue
    "#58ffd1", // mint/cyan
    "#d7ff45", // radioactive lime
    "#ffe66d", // warm gold
    "#ff9f68", // peach
    "#ffffff"  // actual starlight
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
            sparkleSymbols[
                Math.floor(Math.random() * sparkleSymbols.length)
            ];

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;

        sparkle.style.color =
            sparkleColors[
                Math.floor(Math.random() * sparkleColors.length)
            ];

        const angle = Math.random() * Math.PI * 2;
        const distance = 45 + Math.random() * 140;

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

        const sizeRoll = Math.random();
        let size;

        if (sizeRoll < 0.55) {
            size = 6 + Math.random() * 10;
        } else if (sizeRoll < 0.9) {
            size = 16 + Math.random() * 18;
        } else {
            size = 34 + Math.random() * 22;
        }

        sparkle.style.fontSize = `${size}px`;

        document.body.appendChild(sparkle);

        sparkle.addEventListener("animationend", () => {
            sparkle.remove();
        });
    }
}


/* ========================================
   STAR GLITTER
   ======================================== */

function setupStarGlitter() {
    const starCards = document.querySelectorAll(".star-card");

    starCards.forEach((card) => {
        card.addEventListener("pointerdown", (event) => {
            makeSparkleBurst(
                event.clientX,
                event.clientY,
                13
            );
        });
    });

    // The big STAR has absolutely no adult supervision.
    const titleStar = document.querySelector(".star-title");

    if (titleStar) {
        titleStar.addEventListener("pointerdown", (event) => {
            makeSparkleBurst(
                event.clientX,
                event.clientY,
                84
            );
        });
    }
}


/* ========================================
   START EVERYTHING
   ======================================== */

function initializeJosieMakes() {
    setupVerbSwitcher();
    setupStarCards();
    setupStarGlitter();
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeJosieMakes
    );
} else {
    initializeJosieMakes();
}


/* =========================================================
   STARS — THREE P's
   ========================================================= */

function setupThreePs() {

    /* -------------------------
       PERSPECTIVE
       ------------------------- */

    const perspective = document.querySelector(".perspective-word");

    if (perspective) {

        const perspectives = [
            "perspective-normal",
            "perspective-tiny",
            "perspective-huge",
            "perspective-far"
        ];

        let perspectiveIndex = 0;

        perspective.addEventListener("click", () => {

            perspective.classList.remove(...perspectives);

            perspectiveIndex =
                (perspectiveIndex + 1) % perspectives.length;

            perspective.classList.add(
                perspectives[perspectiveIndex]
            );
        });
    }


    /* -------------------------
       PURPOSE
       ------------------------- */

    const purpose = document.querySelector(".purpose-word");
    const purposeText = document.querySelector(".purpose-text");

    if (purpose && purposeText) {

        const messages = [
            "PURPOSE.",
            "PURPOSE?",
            "YOU DECIDE. ✦"
        ];

        let purposeIndex = 0;

        purpose.addEventListener("click", () => {

            purposeIndex =
                (purposeIndex + 1) % messages.length;

            purposeText.textContent =
                messages[purposeIndex];

            purpose.classList.remove("purpose-reveal");

            void purpose.offsetWidth;

            purpose.classList.add("purpose-reveal");
        });
    }
}


if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        setupThreePs
    );
} else {
    setupThreePs();
}
