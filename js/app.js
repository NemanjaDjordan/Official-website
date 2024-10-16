// Select elements
const navigationMenu = document.querySelector('.navigation-menu');
const body = document.body;
const burgerWrap = document.querySelector('.burgerwrap');
const jsNavigation = document.querySelectorAll('.js-navigation');
const portfolioItem = document.querySelectorAll('.raw-files .item');
const heroAnimationElements = document.querySelectorAll('.section-hero .wrapper .top, .section-hero .wrapper .middle, .section-hero .wrapper .bottom');


// Utility functions
function toggleScrollLock() {
    body.classList.toggle('no-scroll');
}

function removeScrollLock() {
    body.classList.remove('no-scroll', 'body-blur');
}

function handleNavigation(evt) {
    burgerWrap.classList.toggle('burger-animation');
    navigationMenu.classList.toggle('navigation-menu-animation');
    toggleScrollLock();
    evt.preventDefault();
    const dataId = this.getAttribute('data-id');
    const targetElement = document.querySelector(`[data-name="${dataId}"]`);
    if (targetElement) {
        const offset = window.innerHeight * 0.02;
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

// Burger menu event handler
burgerWrap.addEventListener("click", () => {
    burgerWrap.classList.toggle('burger-animation');
    navigationMenu.classList.toggle('navigation-menu-animation');
    toggleScrollLock();
});

// Escape key event handler
document.addEventListener('keyup', evt => {
    if (evt.key === 'Escape') {
        burgerWrap.classList.remove('burger-animation');
        navigationMenu.classList.remove('navigation-menu-animation');
        portfolioItem.forEach(item => item.classList.remove('portfolio-active'));

        const isActive = Array.from(portfolioItem).some(item => item.classList.contains('portfolio-active'));
        burgerWrap.style.display = isActive ? 'none' : 'inline-block';

        // Add scroll
        body.style.overflow = 'auto';

        removeScrollLock();
    }
});

// Smooth scroll navigation
jsNavigation.forEach(element => {
    element.addEventListener("click", handleNavigation);
    element.addEventListener("touchstart", handleNavigation);
});

// Section hero animation
document.addEventListener('DOMContentLoaded', () => {
    heroAnimationElements.forEach(element => {
        element.classList.add('section-hero-animate');
    });
});



