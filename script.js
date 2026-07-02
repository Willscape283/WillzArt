// =========================
// Your existing functions
// =========================

/*function buyModel(name, price) {
    alert(`You selected "${name}" for $${price}. Payment integration goes here.`);
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting me!');
});*/
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navbar = document.getElementById('navbar');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents clicks from leaking to parent background containers
            navbar.classList.add('active');
        });
    }

    if (closeBtn && navbar) {
        closeBtn.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    }

    // Auto-close menu drawer when selecting a navigation shortcut link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar) navbar.classList.remove('active');
        });
    });
});
