document.addEventListener('DOMContentLoaded', () => {
    // Select all images within the header-slide component
    const imgs = document.querySelectorAll('.header-slide ul .header-image');
    // Select the previous and next buttons
    const prev_btn = document.querySelector('.control-left');
    const next_btn = document.querySelector('.control-right');
    let n = 0;

    function changeSlide() {
        // Hide all images
        imgs.forEach(img => img.style.display = 'none');
        // Show the current image
        imgs[n].style.display = 'block';
    }

    // Initialize the slider
    changeSlide();

    // Event listener for the previous button
    prev_btn.addEventListener('click', () => {
        if (n > 0) {
            n--;
        } else {
            n = imgs.length - 1;
        }
        changeSlide();
    });

    // Event listener for the next button
    next_btn.addEventListener('click', () => {
        if (n < imgs.length - 1) {
            n++;
        } else {
            n = 0;
        }
        changeSlide();
    });

    // Initialize the horizontal scrolling for elements with class "products"
    const scrollContainers = document.querySelectorAll(".products");
    scrollContainers.forEach(container => {
        container.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            container.scrollLeft += evt.deltaY;
        });
    });
});
