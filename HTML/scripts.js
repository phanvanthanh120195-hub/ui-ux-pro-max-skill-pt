document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-sm', 'bg-white/95');
            navbar.classList.remove('bg-white/90');
        } else {
            navbar.classList.remove('shadow-sm', 'bg-white/95');
            navbar.classList.add('bg-white/90');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 3. Clinical Booking Form Validation
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(bookingForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');

            // Basic Clinical Validation
            if (!name || name.length < 2) {
                alert('Please enter a valid patient name.');
                return;
            }
            if (!phone || phone.length < 10) {
                alert('Please enter a valid contact number.');
                return;
            }

            // Simulate Secure API Submission
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalContent = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="animate-spin mr-2">⟳</span> Processing Request...';

            // Mock API delay
            setTimeout(() => {
                // Success State
                alert(`Appointment Request Received for ${name}.\n\nOur clinic staff will contact you at ${phone} within 24 hours to confirm your time slot and verify insurance details.`);
                bookingForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
            }, 1500);
        });
    }
});
