// GSAP Animations
// gsap.from("#header h1", { opacity: 0, y: -50, duration: 0.5 });
// gsap.from(".subtitle", { opacity: 0, y: 50, duration: 0.5, delay: 0.5 });
// gsap.from(".content", { opacity: 0, scale: 0.9, duration: 0.5, delay: 0.5 });

function scrollCarousel(direction) {
    const container = document.querySelector('.carousel-container');
    const scrollAmount = 320;  // Scroll amount per click (can be adjusted)
    
    // Scroll the container left or right based on the direction (-1 for left, 1 for right)
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
//Back to Top Button
// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button based on scroll
window.onscroll = function() {
    if (document.documentElement.scrollTop > 350) {
        backToTopButton.style.display = "block";
    } 
    else {
        backToTopButton.style.display = "none";
    }
};

// Scroll back to the top smoothly when the button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Animate when in view 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const observer = new IntersectionObserver(async (entries) => {
      for (const entry of entries) {
          if (entry.isIntersecting) {
              await sleep(150); // Wait for 200ms
              entry.target.classList.add('show-glass');
          }
          // Uncomment if you want to remove the class when not intersecting
          else {
              entry.target.classList.remove('show-glass');
          }
      }
  });

const hiddenElements = document.querySelectorAll('.hidden-glass');
hiddenElements.forEach((element)=>{
    observer.observe(element);
});