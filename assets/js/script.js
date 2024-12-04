let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 3; 
  } else if (currentSlide >= totalSlides - 2) {
    currentSlide = 0; 
  }

  const slider = document.querySelector('.slider-p');
  slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}


const testimonials = [
  {
      text: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
      author: "Ricardo Snow, Public Speaker",
  },
  {
      text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.",
      author: "Julia Smith, Designer",
  },
  {
      text: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.",
      author: "John Doe, Developer",
  },
];

const leftButton = document.querySelector('.testimonial-nav-left');
const rightButton = document.querySelector('.testimonial-nav-right');
const textElement = document.querySelector('.testimonial-text');
const authorElement = document.querySelector('.testimonial-author');

let currentIndex = 0;

function updateTestimonial(index) {
  textElement.textContent = testimonials[index].text;
  authorElement.textContent = testimonials[index].author;
}

leftButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

rightButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

// Initialize with the first testimonial
updateTestimonial(currentIndex);
