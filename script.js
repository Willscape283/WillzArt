// =========================
// Your existing functions
// =========================

function buyModel(name, price) {
    alert(`You selected "${name}" for $${price}. Payment integration goes here.`);
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting me!');
});
