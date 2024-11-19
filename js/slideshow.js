// slide show for home page

let slideIndexHero = 0;

function showSlides(slideshowClass, dotClass) {
    let slides = document.querySelectorAll(`.${slideshowClass} .mySlides`);
    let dots = document.querySelectorAll(`.${dotClass}`);

    // Check if slides are present before proceeding
    if (slides.length === 0) {
        console.warn(`No slides found for class: ${slideshowClass}`);
        return; // Exit the function if no slides are found
    }

    function displaySlides() {
        // Reset all slides to their initial state
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'previous', 'next'); // Remove all classes
        });

        // Update slide index
        slideIndexHero++;
        if (slideIndexHero >= slides.length) { 
            slideIndexHero = 0; // Reset index if it exceeds length
        }

        // Set classes for the active, previous, and next slides
        slides[slideIndexHero].classList.add('active'); // Current slide
        slides[(slideIndexHero + slides.length - 1) % slides.length].classList.add('previous'); // Previous slide
        slides[(slideIndexHero + 1) % slides.length].classList.add('next'); // Next slide

        // Update dot indicators
        if (dots.length > 0) {
            dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
            dots[slideIndexHero].classList.add('active'); // Add active class to the current dot
        }

        setTimeout(displaySlides, 2500); // Schedule the next slide change
    }

    displaySlides(); // Start displaying slides
}

// Call showSlides only if the element is present
document.addEventListener("DOMContentLoaded", function() {
    // Call showSlides for the hero slideshow if it exists
    showSlides('hero-slideshow', 'dot');

    // Optionally, you can call another slideshow for 'work-slideshow' if it exists
    if (document.querySelector('.work-slideshow')) {
        showSlides('work-slideshow', 'dot');
    }
});