document.addEventListener('DOMContentLoaded', function() {

  // Smooth scrolling to anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });

  // Navbar hover action
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      // Add your mouse hover action for the navbar link
      // Example: Change background color, add animation, etc.
      link.style.backgroundColor = 'gold';
    });
    link.addEventListener('mouseout', function() {
      // Reset styles when mouse is not hovering
      link.style.backgroundColor = '';
    });
  });

  // Other JavaScript functionalities specific to your project
  // ...

});
