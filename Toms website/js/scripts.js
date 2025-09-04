// GSAP Animation Example for Hero Section and Features

document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Animation
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    gsap.from(".hero p", { opacity: 0, y: 30, duration: 1, delay: 1 });
    gsap.from(".btn-primary", { opacity: 0, y: 30, duration: 1, delay: 1.5 });

    // Feature Animations
    gsap.from(".feature-item", {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        delay: 2
    });
});

gsap.from(".hero", { opacity: 0, scale: 1.05, duration: 1.5 });

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
