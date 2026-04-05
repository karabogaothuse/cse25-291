// Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all the required fields.');
                return;
            }

            alert('✅ Thank you! Your enquiry has been sent to Paradise Adventures Safaris.\nWe will reply as soon as possible.');
            form.reset();
        });
    }
})