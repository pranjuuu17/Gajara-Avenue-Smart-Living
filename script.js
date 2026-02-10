// Function to open modals
function openModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden"; // Stop scrolling when open
}

// Function to close modals
function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal if user clicks outside of the box
window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Smooth scroll to features
function scrollToContent() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}