// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const leftButton = document.querySelector('.scroll-button.left');
  const rightButton = document.querySelector('.scroll-button.right');
  const wrapper = document.querySelector('.certificates-wrapper');

  // Adjust the scroll amount based on your design
  const scrollAmount = 300;

  // Scroll left
  leftButton.addEventListener('click', () => {
    wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  // Scroll right
  rightButton.addEventListener('click', () => {
    wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});