const gallery = document.getElementById("gallery");

const totalImages = 50; // Change this if you have more or fewer images

let currentImage = 0;
const images = [];

// Generate Gallery
for (let i = 1; i <= totalImages; i++) {

    const file = `images/${i}.jpeg`;

    images.push(file);

    const img = document.createElement("img");

    img.src = file;
    img.alt = `Photo ${i}`;
    img.loading = "lazy";

    img.onclick = () => openImage(i - 1);

    gallery.appendChild(img);
}

// Lightbox Elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Open Image
function openImage(index) {
    currentImage = index;
    lightbox.style.display = "flex";
    lightboxImage.src = images[currentImage];
}

// Close
closeBtn.onclick = () => {
    lightbox.style.display = "none";
};

// Previous
prevBtn.onclick = () => {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    lightboxImage.src = images[currentImage];
};

// Next
nextBtn.onclick = () => {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    lightboxImage.src = images[currentImage];
};

// Keyboard Controls
document.addEventListener("keydown", (e) => {

    if (lightbox.style.display !== "flex") return;

    if (e.key === "ArrowRight") {
        nextBtn.click();
    }

    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }

    if (e.key === "Escape") {
        closeBtn.click();
    }

});

// Click outside image to close
lightbox.onclick = (e) => {

    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }

};