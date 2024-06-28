let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
  slideIndex += direction;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlideVisibility();
}

function updateSlideVisibility() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.transform = 'translateX(0)';
    } else {
      slide.style.transform = 'translateX(-100%)';
    }
  });
}

// Optional: Auto slide change example (uncomment to enable)
// setInterval(() => {
//   changeSlide(1);
// }, 3000); // Change slide every 3 seconds
