const heartContainer = document.querySelector(".floating-hearts");

const heartSymbols = [
    "♥",
    "♡",
    "❤",
    "💗",
    "💖",
    "💓",
    "💞"
];


function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() * heartSymbols.length
            )
        ];

    /* POSISI RANDOM */

    heart.style.left =
        Math.random() * 100 + "%";


    /* UKURAN RANDOM */

    const size =
        10 + Math.random() * 25;

    heart.style.fontSize =
        size + "px";


    /* KECEPATAN RANDOM */

    const duration =
        6 + Math.random() * 8;

    heart.style.animationDuration =
        duration + "s";


    /* DELAY RANDOM */

    heart.style.animationDelay =
        Math.random() * 2 + "s";


    /* OPACITY RANDOM */

    heart.style.opacity =
        0.2 + Math.random() * 0.6;


    heartContainer.appendChild(heart);


    /* HAPUS SETELAH SELESAI */

    setTimeout(() => {

        heart.remove();

    }, (duration + 3) * 1000);

}


/* BUAT LOVE TERUS */

setInterval(() => {

    createHeart();

}, 450);


/* AWALNYA LANGSUNG BANYAK */

for (let i = 0; i < 18; i++) {

    setTimeout(() => {

        createHeart();

    }, i * 180);

}