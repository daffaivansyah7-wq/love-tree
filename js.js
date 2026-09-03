// ========================================
// NAMA DARI LOGIN
// ========================================

const savedName =
    localStorage.getItem("namaPacar");

const logoTitle =
    document.querySelector(".logo h1");

if (savedName && logoTitle) {

    logoTitle.textContent =
        savedName;

}
const birthdayDate =
    new Date(
        "December 31, 2026 00:00:00"
    ).getTime();


// ========================================
// ELEMENT
// ========================================

const leafContainer =
    document.querySelector(".love-leaves");

const daysEl =
    document.getElementById("days");

const hoursEl =
    document.getElementById("hours");

const minutesEl =
    document.getElementById("minutes");

const secondsEl =
    document.getElementById("seconds");

const popup =
    document.getElementById("popup");

const music =
    document.getElementById("music");


// ========================================
// WARNA LOVE
// ========================================

const colors = [

    "#e60046",
    "#f20d55",
    "#ff1744",
    "#ff245f",
    "#ff3975",
    "#ff4f86",
    "#ff6495",
    "#ff79a5",
    "#ff91b5",
    "#ffabc4"

];


// ========================================
// MEMBUAT KANOPI LOVE
// ========================================

function createTreeLeaves() {

    if (!leafContainer) return;

    leafContainer.innerHTML = "";


    // ====================================
    // JUMLAH LOVE
    // ====================================

    const totalLeaves = 550;


    const positions = [];


    // ====================================
    // RUMUS BENTUK LOVE
    // ====================================

    function insideHeart(x, y) {

        return (

            Math.pow(
                x * x +
                y * y -
                1,
                3
            )

            -

            x * x *
            Math.pow(
                y,
                3
            )

            <= 0

        );

    }


    // ====================================
    // CARI POSISI DI DALAM LOVE
    // ====================================

    while (
        positions.length <
        totalLeaves
    ) {

        const x =
            Math.random() *
            2.5 -
            1.25;


        const y =
            Math.random() *
            2.1 -
            1.05;


        if (
            insideHeart(
                x,
                y
            )
        ) {

            const left =
                (
                    (x + 1.25)
                    / 2.5
                ) * 100;


            const top =
                (
                    (1.05 - y)
                    / 2.1
                ) * 100;


            positions.push({
                left,
                top
            });

        }

    }


    // ====================================
    // URUTKAN DARI ATAS KE BAWAH
    // ====================================

    positions.sort(
        (a, b) =>
            a.top - b.top
    );


    // ====================================
    // BUAT LOVE SATU PER SATU
    // ====================================

    positions.forEach(
        (position, index) => {

            const heart =
                document.createElement(
                    "div"
                );


            heart.className =
                "love";


            heart.innerHTML =
                "♥";


            // =================================
            // POSISI
            // =================================

            heart.style.left =
                `${position.left}%`;

            heart.style.top =
                `${position.top}%`;


            // =================================
            // UKURAN LOVE
            // =================================

            let size;

            const random =
                Math.random();


            /*
             * Sedikit LOVE besar
             */

            if (
                random < .04
            ) {

                size =
                    25 +
                    Math.random() *
                    7;

            }

            /*
             * LOVE sedang
             */

            else if (
                random < .28
            ) {

                size =
                    18 +
                    Math.random() *
                    6;

            }

            /*
             * Mayoritas LOVE kecil
             * supaya kanopi lebih lebat
             */

            else {

                size =
                    11 +
                    Math.random() *
                    6;

            }


            heart.style.fontSize =
                `${size}px`;


            // =================================
            // WARNA RANDOM
            // =================================

            heart.style.color =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];


            // =================================
            // ROTASI
            // =================================

            const rotation =
                Math.random() *
                28 -
                14;


            heart.style.setProperty(
                "--rotation",
                `${rotation}deg`
            );


            // =================================
            // SCALE
            // =================================

            const scale =
                .82 +
                Math.random() *
                .32;


            heart.style.setProperty(
                "--scale",
                scale
            );


            // =================================
            // ANIMASI MUNCUL
            // =================================

            /*
             * 1.5 detik = batang selesai
             *
             * Setelah itu LOVE muncul
             * satu per satu.
             */

            const delay =
                1.65 +
                index *
                0.012;


            heart.style.animationDelay =
                `${delay}s`;


            // =================================
            // MASUKKAN KE POHON
            // =================================

            leafContainer.appendChild(
                heart
            );


            // =================================
            // GERAK HALUS
            // =================================

            setTimeout(
                () => {

                    heart.classList.add(
                        "alive"
                    );

                },

                (
                    delay +
                    .55
                ) * 1000

            );

        }
    );

}


createTreeLeaves();


// ========================================
// COUNTDOWN
// ========================================

function updateCountdown() {

    const now =
        Date.now();


    const distance =
        birthdayDate -
        now;


    // ====================================
    // SUDAH ULANG TAHUN
    // ====================================

    if (
        distance <= 0
    ) {

        setCountdown(
            "00",
            "00",
            "00",
            "00"
        );


        const title =
            document.querySelector(
                ".countdown-title"
            );


        if (title) {

            title.textContent =
                "¡Hoy es tu día! 💖";

        }

        return;

    }


    // ====================================
    // HITUNG WAKTU
    // ====================================

    const totalSeconds =
        Math.floor(
            distance / 1000
        );


    const days =
        Math.floor(
            totalSeconds /
            86400
        );


    const hours =
        Math.floor(
            (
                totalSeconds %
                86400
            ) / 3600
        );


    const minutes =
        Math.floor(
            (
                totalSeconds %
                3600
            ) / 60
        );


    const seconds =
        totalSeconds %
        60;


    setCountdown(
        days,
        hours,
        minutes,
        seconds
    );

}


// ========================================
// SET COUNTDOWN
// ========================================

function setCountdown(
    days,
    hours,
    minutes,
    seconds
) {

    if (daysEl) {

        daysEl.textContent =
            String(days)
            .padStart(
                2,
                "0"
            );

    }


    if (hoursEl) {

        hoursEl.textContent =
            String(hours)
            .padStart(
                2,
                "0"
            );

    }


    if (minutesEl) {

        minutesEl.textContent =
            String(minutes)
            .padStart(
                2,
                "0"
            );

    }


    if (secondsEl) {

        secondsEl.textContent =
            String(seconds)
            .padStart(
                2,
                "0"
            );

    }

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


// ========================================
// FLOATING HEARTS
// ========================================

const floatingColors = [

    "#ff1744",
    "#ff2f70",
    "#ff4081",
    "#ff80ab",
    "#ffb3cc",
    "#e91e63"

];


const symbols = [

    "♥",
    "❤",
    "💗",
    "💖",
    "💕"

];


const MAX_HEARTS = 35;

let floatingHeartCount = 0;


// ========================================
// BUAT FLOATING HEART
// ========================================

function createFloatingHeart(
    options = {}
) {

    if (
        floatingHeartCount >=
        MAX_HEARTS
    ) {
        return;
    }


    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "floating-heart";


    heart.innerHTML =
        options.symbol ||
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        `${options.left ??
        Math.random() * 100}vw`;


    const size =
        options.size ||
        Math.random() *
        22 +
        12;


    heart.style.fontSize =
        `${size}px`;


    heart.style.color =
        options.color ||
        floatingColors[
            Math.floor(
                Math.random() *
                floatingColors.length
            )
        ];


    const duration =
        options.duration ||
        Math.random() *
        6 +
        6;


    heart.style.animationDuration =
        `${duration}s`;


    heart.style.opacity =
        options.opacity ||
        Math.random() *
        .5 +
        .5;


    document.body.appendChild(
        heart
    );


    floatingHeartCount++;


    setTimeout(
        () => {

            heart.remove();

            floatingHeartCount--;

        },

        (duration + 1) *
        1000
    );

}


// ========================================
// FLOATING HEART LOOP
// ========================================

let heartInterval = null;


function startFloatingHearts() {

    if (heartInterval) return;


    setTimeout(
        () => {

            heartInterval =
                setInterval(
                    () => {

                        if (
                            Math.random() >
                            .72
                        ) {
                            return;
                        }


                        createFloatingHeart();

                    },

                    450
                );

        },

        2500
    );

}


startFloatingHearts();


// ========================================
// HEART EXPLOSION
// ========================================

function heartExplosion(
    amount = 40
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            () => {

                const heart =
                    document.createElement(
                        "div"
                    );


                heart.className =
                    "gift-heart";


                heart.innerHTML =
                    symbols[
                        Math.floor(
                            Math.random() *
                            symbols.length
                        )
                    ];


                heart.style.color =
                    floatingColors[
                        Math.floor(
                            Math.random() *
                            floatingColors.length
                        )
                    ];


                heart.style.left =
                    "50%";


                heart.style.top =
                    "55%";


                // =================================
                // ARAH RANDOM
                // =================================

                const angle =
                    Math.random() *
                    Math.PI *
                    2;


                const distance =
                    Math.random() *
                    300 +
                    100;


                const x =
                    Math.cos(angle) *
                    distance;


                const y =
                    Math.sin(angle) *
                    distance;


                heart.style.setProperty(
                    "--x",
                    `${x}px`
                );


                heart.style.setProperty(
                    "--y",
                    `${y}px`
                );


                document.body.appendChild(
                    heart
                );


                setTimeout(
                    () => {

                        heart.remove();

                    },

                    1500
                );


            },

            i * 35
        );

    }

}


// ========================================
// OPEN GIFT
// ========================================

function openGift() {

    if (!popup) return;


    popup.style.display =
        "flex";


    requestAnimationFrame(
        () => {

            popup.classList.add(
                "show"
            );

        }
    );


    heartExplosion(45);


    // Hati tambahan
    for (
        let i = 0;
        i < 10;
        i++
    ) {

        setTimeout(
            () => {

                createFloatingHeart({

                    size:
                        Math.random() *
                        15 +
                        18

                });

            },

            i * 80
        );

    }

}


// ========================================
// CLOSE GIFT
// ========================================

function closeGift() {

    if (!popup) return;


    popup.classList.remove(
        "show"
    );


    setTimeout(
        () => {

            popup.style.display =
                "none";

        },

        300
    );

}


// ========================================
// KLIK LUAR POPUP
// ========================================

if (popup) {

    popup.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                popup
            ) {

                closeGift();

            }

        }
    );

}


// ========================================
// ESC
// ========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key ===
            "Escape"
        ) {

            closeGift();

        }

    }
);


// ========================================
// MUSIK
// ========================================

let musicPlaying =
    false;


function toggleMusic() {

    if (!music) return;


    if (musicPlaying) {

        music.pause();

        musicPlaying =
            false;

        updateMusicButton(
            false
        );

    }

    else {

        music.play()

            .then(
                () => {

                    musicPlaying =
                        true;

                    updateMusicButton(
                        true
                    );

                }
            )

            .catch(
                () => {

                    console.log(
                        "Browser memblokir pemutaran musik."
                    );

                }
            );

    }

}


// ========================================
// UPDATE MUSIC BUTTON
// ========================================

function updateMusicButton(
    isPlaying
) {

    const button =
        document.querySelector(
            ".music-btn"
        );


    if (!button) return;


    if (isPlaying) {

        button.classList.add(
            "playing"
        );


        button.innerHTML =
            "⏸️ <span>Musik</span>";

    }

    else {

        button.classList.remove(
            "playing"
        );


        button.innerHTML =
            "🎵 <span>Musik</span>";

    }

}


// ========================================
// MUSIC ENDED
// ========================================

if (music) {

    music.addEventListener(
        "ended",
        () => {

            musicPlaying =
                false;

            updateMusicButton(
                false
            );

        }
    );

}