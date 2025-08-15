const parallaxBg = document.querySelector('.parallax-bg');
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.01}px)`;
});



const mainTitle = document.getElementById('main-title');
const textToType = "CLAUDIO DOS SANTOS SIQUEIRA";
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        mainTitle.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 150); 
    }
}

window.addEventListener("load", typeWriter);


const timeDisplay = document.getElementById("time-display");

function updateClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    
    timeDisplay.textContent = `/ ${hours}:${minutes}:${seconds} :: BRASIL :: ©2025 /`;
}

setInterval(updateClock, 1000);
updateClock();