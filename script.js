const header = document.querySelector('header nav');
const destinationsSection = document.getElementById('destinations');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('header nav ul');
const logo = document.querySelector('nav .logo');

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close mobile menu after clicking
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Toggle mobile menu when hamburger is clicked
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle mobile menu when logo is clicked (only on mobile)
logo.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    navLinks.classList.toggle('active');
  }
});

// Change header text to black once scrolled past the Popular Destinations section with smooth transition
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const sectionTop = destinationsSection.offsetTop;
  const sectionHeight = destinationsSection.offsetHeight;

  // Apply nav-black once scrolled past the bottom of Popular Destinations
  if (scrollY >= sectionTop + sectionHeight) {
    header.classList.add('nav-black');
  } else {
    header.classList.remove('nav-black');
  }
});
