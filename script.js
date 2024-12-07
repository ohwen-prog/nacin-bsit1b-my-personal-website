// Select hamburger and nav-links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Add click event listener to toggle menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show"); // Toggle the 'show' class
});
