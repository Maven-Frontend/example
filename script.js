const slider = document.getElementById('slider');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const portfolioSection = document.getElementById('portfolio-section');
const overlay = document.getElementById('overlay');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.portfolio-item').length;
const itemsPerView = 5; // Display 5 items at a time
const itemWidth = document.querySelector('.portfolio-item').clientWidth;

// Function to move the slider
function moveToSlide(index) {
  slider.style.transform = `translateX(-${itemWidth * index}px)`;
}

// Event listener for the right arrow (next)
rightArrow.addEventListener('click', () => {
  if (currentIndex < totalItems - itemsPerView) {
    currentIndex++;
    moveToSlide(currentIndex);
  }
});

// Event listener for the left arrow (previous)
leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveToSlide(currentIndex);
  }
});

// Event listener to hide the overlay when the portfolio section is clicked
portfolioSection.addEventListener('click', () => {
  overlay.classList.add('hidden'); // Hide overlay when clicked
});

// Event listener to show the overlay when the mouse leaves the portfolio section
portfolioSection.addEventListener('mouseleave', () => {
  overlay.classList.remove('hidden'); // Show overlay when mouse leaves
});
