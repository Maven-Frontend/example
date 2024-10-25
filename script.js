const slider = document.getElementById('slider');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const portfolioSection = document.getElementById('portfolio-section');
const overlay = document.getElementById('overlay');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.portfolio-item').length;
const itemsPerView = 5; // Display 5 items at a time on desktop, 1 on mobile
const itemWidth = document.querySelector('.portfolio-item').clientWidth;
let autoSlideInterval;

// Function to move the slider
function moveToSlide(index) {
  slider.style.transform = `translateX(-${itemWidth * index}px)`;
}

// Move to the next slide
function moveToNextSlide() {
  if (currentIndex < totalItems - itemsPerView) {
    currentIndex++;
  } else {
    currentIndex = 0; // Reset to the first slide when reaching the end
  }
  moveToSlide(currentIndex);
}

// Move to the previous slide
function moveToPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - itemsPerView; // Go to the last slide if at the beginning
  }
  moveToSlide(currentIndex);
}

// Event listener for the right arrow (next)
rightArrow.addEventListener('click', () => {
  moveToNextSlide();
});

// Event listener for the left arrow (previous)
leftArrow.addEventListener('click', () => {
  moveToPrevSlide();
});

// Start automatic slider
function startAutoSlide() {
  autoSlideInterval = setInterval(moveToNextSlide, 2000);
}

// Stop automatic slider
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Automatically start the slider on page load
startAutoSlide();

// Event listener to hide the overlay and stop auto slide when clicked
portfolioSection.addEventListener('click', () => {
  overlay.classList.add('hidden'); // Hide overlay
  stopAutoSlide(); // Stop the automatic slider
});

// Event listener to show the overlay and restart auto slide when mouse leaves
portfolioSection.addEventListener('mouseleave', () => {
  overlay.classList.remove('hidden'); // Show overlay
  startAutoSlide(); // Restart the automatic slider
});



// Testimonials section

const testimonialsSlider = document.getElementById('testimonials-slider');
const dots = document.querySelectorAll('.dot');

let currentTestimonialIndex = 0;
const totalTestimonials = dots.length;
let testimonialInterval;

// Function to move to a specific slide
function showTestimonial(index) {
  testimonialsSlider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentTestimonialIndex = index;
}

// Auto-slide function for testimonials
function startTestimonialAutoSlide() {
  testimonialInterval = setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    showTestimonial(currentTestimonialIndex);
  }, 4000);
}

// Stop auto-slide when user interacts
function stopTestimonialAutoSlide() {
  clearInterval(testimonialInterval);
}

// Event listeners for dots to jump to specific testimonials
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showTestimonial(index);
    stopTestimonialAutoSlide();
  });
});

// Swipe and drag functionality
let startX = 0;
let isDragging = false;

// Start dragging/touching
testimonialsSlider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  stopTestimonialAutoSlide();
});

testimonialsSlider.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  stopTestimonialAutoSlide();
});

// Dragging/touching movement
testimonialsSlider.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const currentX = e.clientX;
    const difference = startX - currentX;
    if (difference > 50 && currentTestimonialIndex < totalTestimonials - 1) {
      showTestimonial(currentTestimonialIndex + 1);
      isDragging = false;
    } else if (difference < -50 && currentTestimonialIndex > 0) {
      showTestimonial(currentTestimonialIndex - 1);
      isDragging = false;
    }
  }
});

testimonialsSlider.addEventListener('touchmove', (e) => {
  if (isDragging) {
    const currentX = e.touches[0].clientX;
    const difference = startX - currentX;
    if (difference > 50 && currentTestimonialIndex < totalTestimonials - 1) {
      showTestimonial(currentTestimonialIndex + 1);
      isDragging = false;
    } else if (difference < -50 && currentTestimonialIndex > 0) {
      showTestimonial(currentTestimonialIndex - 1);
      isDragging = false;
    }
  }
});

// Stop dragging/touching
testimonialsSlider.addEventListener('mouseup', () => {
  isDragging = false;
  startTestimonialAutoSlide(); // Restart auto-slide after dragging
});

testimonialsSlider.addEventListener('touchend', () => {
  isDragging = false;
  startTestimonialAutoSlide(); // Restart auto-slide after swiping
});

// Start auto-slide on page load
startTestimonialAutoSlide();

