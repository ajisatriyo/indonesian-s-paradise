const slideShowImages = document.querySelectorAll(".intro .slideshow-img");
const nextImageDelay = 6000;
let currentImageCounter = 0;

// slideShowImages[currentImageCounter].style.display = "block";
slideShowImages[currentImageCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay);

function nextImage() {
    // slideShowImages[currentImageCounter].style.display = "none";
    // slideShowImages[currentImageCounter].style.opacity = 0;
    slideShowImages[currentImageCounter].style.zIndex = -2;
    const tempCounter = currentImageCounter;
    setTimeout(() => {
        slideShowImages[tempCounter].style.opacity = 0;
    });
    currentImageCounter = (currentImageCounter + 1) % slideShowImages.length;
    // slideShowImages[currentImageCounter].style.display = "block";
    slideShowImages[currentImageCounter].style.opacity = 1;
    slideShowImages[currentImageCounter].style.zIndex = -1;
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Surabaya", "Bali", "Wonosobo", "Raja Ampat", "And More"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
})