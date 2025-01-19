// JavaScript to toggle the mobile menu visibility
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const body = document.body;

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('show'); // Toggle the class 'show' to slide in/out the navbar
    body.classList.toggle('menu-open'); // Prevent body scrolling when menu is open
});