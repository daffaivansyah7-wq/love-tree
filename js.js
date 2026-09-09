const savedName =
    localStorage.getItem("namaPacar");

const logoTitle =
    document.querySelector(".logo h1");

if (savedName && logoTitle) {
    logoTitle.textContent = savedName;
}

const birthdayDate =
    new Date("2027-06-02T00:00:00").getTime();

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

function createTreeLeaves() {

    if (!leafContainer) return;

    leafContainer.innerHTML = "";

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
            Math.pow(y, 3)
            <= 0
        );

    }

    while (positions.length < totalLeaves) {

        const x =
            Math.random() * 3.2 - 1.6;

        const y =
            Math.random() * 2.7 - 1.35;

        if (insideHeart(x, y)) {

            const left =
                ((x + 1.6) / 3.2) * 100;

            const top =
                ((1.35 - y) / 2.7) * 100;

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
                document.createElement("div");

            heart.className =
                "love";

            heart.innerHTML =
                "♥";

            heart.style.left =
                `${position.left}%`;

            heart.style.top =
                `${position.top}%`;

            let size;

            const random =
                Math.random();

           if (Math.random() < 0.15) {
                size = Math.random() * 12 + 40;
            } else if (Math.random() < 0.5) {
                size = Math.random() * 10 + 30;
            } else {
                size = Math.random() * 8 + 24;
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
                Math.random() * 20 - 10;

            heart.style.setProperty(
                "--rotation",
                `${rotation}deg`
            );

            const scale =
                .9 +
                Math.random() * .2;

            heart.style.setProperty(
                "--scale",
                scale
            );

            heart.style.animationDelay =
                `${index * .004}s`;

            leafContainer.appendChild(
                heart
            );

            setTimeout(
                () => {

                    heart.classList.add(
                        "alive"
                    );

                },
                300
            );

        }
    );

}

createTreeLeaves();

function updateCountdown() {

    const now =
        Date.now();

    const distance =
        birthdayDate - now;

    if (distance <= 0) {

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
            totalSeconds / 86400
        );

    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;

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
            String(days).padStart(
                2,
                "0"
            );

    }

    if (hoursEl) {

        hoursEl.textContent =
            String(hours).padStart(
                2,
                "0"
            );

    }

    if (minutesEl) {

        minutesEl.textContent =
            String(minutes).padStart(
                2,
                "0"
            );

    }

    if (secondsEl) {

        secondsEl.textContent =
            String(seconds).padStart(
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

const MAX_HEARTS = 25;

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

    const size =
        options.size ||
        Math.random() * 24 + 15;

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
        Math.random() * 6 + 6;

    heart.style.animationDuration =
        `${duration}s`;

    heart.style.opacity =
        options.opacity ||
        Math.random() * .4 + .4;

    document.body.appendChild(
        heart
    );

    floatingHeartCount++;

    setTimeout(
        () => {

            heart.remove();

            floatingHeartCount--;

        },
        (duration + 1) * 1000
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
                            Math.random() > .55
                        ) {
                            return;
                        }

                        createFloatingHeart();

                    },
                    700
                );

        },
        2500
    );

}

startFloatingHearts();

function heartExplosion(
    amount = 30
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

                const explosionSize =
                    Math.random() * 16 + 20;

                heart.style.fontSize =
                    `${explosionSize}px`;

                const angle =
                    Math.random() *
                    Math.PI *
                    2;

                const distance =
                    Math.random() * 250 + 100;

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

function openGift() {

    if (!popup) return;

    popup.classList.add(
        "active"
    );

    heartExplosion(30);

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
                        18 +
                        20

                });

            },
            i * 100
        );

    }

}

function closeGift() {

    if (!popup) return;

    popup.classList.remove(
        "active"
    );

}

if (popup) {

    popup.addEventListener(
        "click",
        (event) => {

            if (
                event.target === popup
            ) {

                closeGift();

            }

        }
    );

}

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeGift();

        }

    }
);

let musicPlaying = false;

function updateMusicButton(isPlaying) {

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

function playMusic() {

    if (!music) return;

    music.volume = 0.5;

    music.play()
        .then(() => {

            musicPlaying = true;

            localStorage.setItem(
                "playMusic",
                "true"
            );

            updateMusicButton(true);

        })
        .catch(() => {

            console.log(
                "Menunggu interaksi pengguna."
            );

        });

}

function toggleMusic() {

    if (!music) return;

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        localStorage.setItem(
            "playMusic",
            "false"
        );

        updateMusicButton(false);

    }
    else {

        playMusic();

    }

}

function startMusic() {

    if (!music) return;

    music.volume = 0.5;

    const savedTime =
        localStorage.getItem(
            "musicTime"
        );

    if (
        savedTime &&
        !isNaN(
            parseFloat(savedTime)
        )
    ) {

        try {

            music.currentTime =
                parseFloat(
                    savedTime
                );

        }
        catch (error) {}

    }

    if (
        localStorage.getItem(
            "playMusic"
        ) === "true"
    ) {

        playMusic();

    }

}

if (music) {

    music.addEventListener(
        "play",
        () => {

            musicPlaying = true;

            updateMusicButton(true);

        }
    );

    music.addEventListener(
        "pause",
        () => {

            musicPlaying = false;

            updateMusicButton(false);

        }
    );

    music.addEventListener(
        "ended",
        () => {

            musicPlaying = false;

            updateMusicButton(false);

        }
    );

    window.addEventListener(
        "beforeunload",
        () => {

            if (
                !isNaN(
                    music.currentTime
                )
            ) {

                localStorage.setItem(
                    "musicTime",
                    music.currentTime
                );

            }

        }
    );

    window.addEventListener(
        "load",
        () => {

            startMusic();

        }
    );

    document.addEventListener(
        "click",
        () => {

            if (
                !musicPlaying &&
                localStorage.getItem(
                    "playMusic"
                ) === "true"
            ) {

                playMusic();

            }

        }
    );

}

