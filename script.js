// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.fade-in');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    scrollObserver.observe(el);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Gallery with Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Create lightbox if it doesn't exist
        let lightbox = document.getElementById('lightbox');
        if (!lightbox) {
            lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-overlay">
                    <span class="close-lightbox">&times;</span>
                    <img id="lightbox-img" src="" alt="">
                </div>
            `;
            document.body.appendChild(lightbox);

            // Close lightbox functionality
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target.classList.contains('close-lightbox')) {
                    lightbox.style.display = 'none';
                }
            });
        }

        const imgSrc = item.querySelector('img').src;
        const lightboxImg = lightbox.querySelector('#lightbox-img');
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
    });
});

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Basic validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = 'var(--gold)';
            }
        });

        if (isValid) {
            // Here you would typically send the form data to a server
            alert('Thank you for your inquiry! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

// Add CSS for lightbox
const style = document.createElement('style');
style.textContent = `
#lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.lightbox-overlay {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}

#lightbox-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.close-lightbox {
    position: absolute;
    top: -40px;
    right: 0;
    color: white;
    font-size: 40px;
    cursor: pointer;
    line-height: 1;
}

.close-lightbox:hover {
    color: var(--gold);
}
`;
document.head.appendChild(style);