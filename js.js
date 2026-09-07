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
        "juni 2, 2027 00:00:00"
    ).getTime();





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
    // JUMLAH LOVE DIPERBANYAK
    // ====================================

    const totalLeaves = 800;


    const positions = [];



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



    while (
        positions.length <
        totalLeaves
    ) {

        // =================================
        // AREA HATI DIPERBESAR
        // =================================

        const x =
            Math.random() *
            3.2 -
            1.6;


        const y =
            Math.random() *
            2.7 -
            1.35;


        if (
            insideHeart(
                x,
                y
            )
        ) {

            const left =
                (
                    (x + 1.6)
                    / 3.2
                ) * 100;


            const top =
                (
                    (1.35 - y)
                    / 2.7
                ) * 100;


            positions.push({
                left,
                top
            });

        }

    }



    positions.sort(
        (a, b) =>
            a.top - b.top
    );




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


            heart.style.left =
                `${position.left}%`;

            heart.style.top =
                `${position.top}%`;



            // =================================
            // UKURAN LOVE DIPERBESAR
            // =================================

            let size;

            const random =
                Math.random();



            // LOVE BESAR
            if (
                random < .08
            ) {

                size =
                    40 +
                    Math.random() *
                    12;

            }


            // LOVE SEDANG
            else if (
                random < .35
            ) {

                size =
                    28 +
                    Math.random() *
                    10;

            }


            // LOVE KECIL
            else {

                size =
                    16 +
                    Math.random() *
                    8;

            }


            heart.style.fontSize =
                `${size}px`;



            

            heart.style.color =
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ];



            

            const rotation =
                Math.random() *
                28 -
                14;


            heart.style.setProperty(
                "--rotation",
                `${rotation}deg`
            );



            
            const scale =
                .82 +
                Math.random() *
                .32;


            heart.style.setProperty(
                "--scale",
                scale
            );



            // =================================
            // ANIMATION DELAY
            // =================================

            const delay =
                1.65 +
                index *
                0.009;


            heart.style.animationDelay =
                `${delay}s`;



            leafContainer.appendChild(
                heart
            );



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
// LOVE MELAYANG
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


// ========================================
// JUMLAH LOVE MELAYANG DITAMBAH
// ========================================

const MAX_HEARTS = 45;

let floatingHeartCount = 0;



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



    // =================================
    // UKURAN LOVE MELAYANG DIPERBESAR
    // =================================

    const size =
        options.size ||
        Math.random() *
        28 +
        16;


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
                // UKURAN EXPLOSION
                // =================================

                const explosionSize =
                    Math.random() *
                    18 +
                    22;


                heart.style.fontSize =
                    `${explosionSize}px`;



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


    heartExplosion(55);



    // =================================
    // LOVE TAMBAHAN
    // =================================

    for (
        let i = 0;
        i < 15;
        i++
    ) {

        setTimeout(
            () => {

                createFloatingHeart({

                    size:
                        Math.random() *
                        20 +
                        22

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

