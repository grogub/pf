const slides = document.querySelectorAll('.slider .textbody');
let currentIndex = 0;

function updateIndicators() {
  const indicators = document.querySelectorAll('.indicator i');
  indicators.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.remove('fa-regular');
      dot.classList.add('fa-solid');
    } else {
      dot.classList.remove('fa-solid');
      dot.classList.add('fa-regular');
    }
  });
}
function updateSlides() {
  slides.forEach((slide, i) => {
    if (i === currentIndex) {
      slide.style.transform = 'translateX(0)';
      slide.style.opacity = '1';
      slide.style.zIndex = '1';
    } else if (i === (currentIndex - 1 + slides.length) % slides.length) {
      slide.style.transform = 'translateX(-100%)';
      slide.style.opacity = '0';
      slide.style.zIndex = '0';
    } else {
      slide.style.transform = 'translateX(100%)';
      slide.style.opacity = '0';
      slide.style.zIndex = '0';
    }
  });
  updateIndicators();
}

document.querySelector('.arrowbutton.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
});

document.querySelector('.arrowbutton.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
});


updateSlides();