// Simple fade-in on scroll
const sections = document.querySelectorAll('.section');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

mobileMenuBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  mobileMenu.style.display = 
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

document.addEventListener('click', (e) => {
  if (e.target !== mobileMenuBtn) {
    mobileMenu.style.display = "none";
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});
