const mq = window.matchMedia('(min-width: 768px)');

function hamburger() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('hamburger-icon');

    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
}

// Close when clicking outside
document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('hamburger-btn');
    const icon = document.getElementById('hamburger-icon');

    if (menu.classList.contains('show') &&
        !menu.contains(e.target) &&
        !button.contains(e.target)) {

        menu.classList.remove('show');
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Reset on resize
mq.addEventListener('change', function (e) {
    if (e.matches) {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('hamburger-icon');

        menu.classList.remove('show');
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// AOS
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}

// --- Scroll-spy underline ---
const navLinks = document.querySelectorAll('.nav-link');
const underline = document.getElementById('nav-underline');
const sections = document.querySelectorAll('main section[id]');

function moveUnderline(link) {
    if (!link) return;
    underline.style.width = link.offsetWidth + 'px';
    underline.style.left = link.offsetLeft + 'px';
}

function setActive(id) {
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
    });
    const activeLink = document.querySelector(`.nav-link[data-section="${id}"]`);
    moveUnderline(activeLink);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActive(entry.target.id);
        }
    });
}, {
    root: null,
    rootMargin: '-40% 0px -55% 0px', // triggers when section is roughly centered in viewport
    threshold: 0
});

sections.forEach(section => observer.observe(section));

// Keep underline correctly positioned on resize (offsets change)
window.addEventListener('resize', () => {
    const current = document.querySelector('.nav-link.active');
    if (current) moveUnderline(current);
});

// Set initial position once page loads (in case "home" is active on load)
window.addEventListener('load', () => {
    const current = document.querySelector('.nav-link.active') || navLinks[0];
    setActive(current.dataset.section);
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('hamburger-icon');
        menu.classList.remove('show');
        icon.classList.replace('fa-xmark', 'fa-bars');
    });
});