// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close-modal");
const prevModal = document.querySelector(".prev-modal");
const nextModal = document.querySelector(".next-modal");

// Get all portfolio images
const images = document.querySelectorAll(".portfolio-image");
let currentIndex = 0;

// Open modal on image click
images.forEach((image, index) => {
    image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.getAttribute("data-title");
        currentIndex = index;
    });
});

// Close modal
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Navigate to previous image
prevModal.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent();
});

// Navigate to next image
nextModal.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalContent();
});

// Update modal content
function updateModalContent() {
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].getAttribute("data-title");
}

// Keyboard navigation
document.addEventListener("keydown", function (e) {
    if (modal.style.display === "block") {
        if (e.key === "ArrowLeft") {
            prevModal.click();
        } else if (e.key === "ArrowRight") {
            nextModal.click();
        } else if (e.key === "Escape") {
            closeModal.click();
        }
    }
});


// Services cards animation
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.setProperty('--order', index + 1);
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.service-card').forEach((card) => {
        observer.observe(card);
    });
});