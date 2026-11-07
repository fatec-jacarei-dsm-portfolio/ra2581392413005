const mainTitle = document.getElementById('main-title');
const textToType = "CLAUDIO DOS SANTOS SIQUEIRA";
const timeDisplay = document.getElementById("time-display");
const parallaxBg = document.querySelector(".parallax-bg");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

if (mainTitle) {
    if (prefersReducedMotion) {
        mainTitle.textContent = textToType;
    } else {
        let index = 0;

        function typeWriter() {
            if (index < textToType.length) {
                mainTitle.textContent += textToType.charAt(index);
                index++;
                window.setTimeout(typeWriter, 85);
            }
        }

        if (document.readyState === "complete") {
            typeWriter();
        } else {
            window.addEventListener("load", typeWriter, { once: true });
        }
    }
}

function updateClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    if (timeDisplay) {
        timeDisplay.textContent = `/ ${hours}:${minutes}:${seconds} :: BRASIL :: ©${time.getFullYear()} /`;
    }
}

window.setInterval(updateClock, 1000);
updateClock();

if (hasFinePointer && !prefersReducedMotion) {
    let activeCard = null;

    document.addEventListener("pointermove", (event) => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);

        const card = event.target.closest(".about-section, .project");
        if (!card) {
            return;
        }

        const bounds = card.getBoundingClientRect();
        const pointerX = event.clientX - bounds.left;
        const pointerY = event.clientY - bounds.top;
        const rotateX = ((pointerY / bounds.height) - 0.5) * -4;
        const rotateY = ((pointerX / bounds.width) - 0.5) * 4;

        if (activeCard && activeCard !== card) {
            activeCard.style.setProperty("--tilt-x", "0deg");
            activeCard.style.setProperty("--tilt-y", "0deg");
        }

        activeCard = card;
        card.style.setProperty("--card-pointer-x", `${pointerX}px`);
        card.style.setProperty("--card-pointer-y", `${pointerY}px`);
        card.style.setProperty("--tilt-x", `${rotateX}deg`);
        card.style.setProperty("--tilt-y", `${rotateY}deg`);
    });

    document.addEventListener("pointerout", (event) => {
        const card = event.target.closest(".about-section, .project");
        if (card && !card.contains(event.relatedTarget)) {
            card.style.setProperty("--tilt-x", "0deg");
            card.style.setProperty("--tilt-y", "0deg");
            if (activeCard === card) {
                activeCard = null;
            }
        }
    });
}

if (parallaxBg && !prefersReducedMotion) {
    let scrollUpdateScheduled = false;

    document.addEventListener("pointerdown", (event) => {
        if (event.button !== 0 || !event.isPrimary) {
            return;
        }

        const ripples = parallaxBg.querySelectorAll(".water-ripple");
        if (ripples.length >= 5) {
            ripples[0].remove();
        }

        const ripple = document.createElement("span");
        ripple.className = "water-ripple";
        ripple.setAttribute("aria-hidden", "true");
        ripple.style.left = `${event.clientX}px`;
        ripple.style.top = `${event.clientY}px`;
        ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
        parallaxBg.appendChild(ripple);
    });

    window.addEventListener("scroll", () => {
        if (!scrollUpdateScheduled) {
            window.requestAnimationFrame(() => {
                parallaxBg.style.setProperty("--scroll-offset", `${window.scrollY * 0.12}px`);
                scrollUpdateScheduled = false;
            });
            scrollUpdateScheduled = true;
        }
    }, { passive: true });
}