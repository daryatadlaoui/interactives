// Select all the scroll sections
const sections = document.querySelectorAll('.scroll-section');

// Function to check if an element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Add scroll event listener
window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add('reveal');
    }
  });
});