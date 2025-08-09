// Smooth scroll to form
function scrollToForm() {
    document.getElementById('form').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Form handling with Formspree integration
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('leadForm');
    const submitButton = form.querySelector('.form-submit');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        
        // Validate required fields
        const name = formData.get('name');
        const email = formData.get('email');
        const restaurant = formData.get('restaurant');
        
        if (!name || !email || !restaurant) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Validate email format
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Validate phone if provided
        const phone = formData.get('phone');
        if (phone && !validatePhone(phone)) {
            alert('Please enter a valid Austrian phone number.');
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        
        // Submit to Formspree
        fetch('https://formspree.io/f/mdkdlgwy', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success
                submitButton.disabled = false;
                submitButton.classList.remove('loading');
                showSuccessMessage();
                form.reset();
                
                // Track successful submission
                trackClick('Form Submit', 'success');
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            // Error handling
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
            
            console.error('Form submission error:', error);
            alert('There was an error submitting your form. Please try again or contact us directly.');
            
            // Track failed submission
            trackClick('Form Submit', 'error');
        });
    });
});

function showSuccessMessage() {
    // Remove existing success message if any
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message show';
    successMessage.innerHTML = `
        <strong>Success!</strong> Your FREE website build has been reserved! We'll contact you within 24 hours to get started.
    `;
    
    // Insert after form
    const form = document.getElementById('leadForm');
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            successMessage.remove();
        }, 500);
    }, 5000);
}

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.benefit-item, .step, .comparison-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Update urgency counter (simulate spots taken)
    updateSpotsRemaining();
});

function updateSpotsRemaining() {
    // Simulate dynamic spots remaining (in real app, this would come from backend)
    const spotsRemaining = Math.floor(Math.random() * 4) + 3; // Random between 3-6
    
    // Update scarcity messaging
    const scarcityElements = document.querySelectorAll('.scarcity-content h2');
    scarcityElements.forEach(el => {
        if (el.textContent.includes('10 free builds')) {
            el.textContent = `⚠️ We only take ${spotsRemaining} free builds this month to keep quality high.`;
        }
    });
    
    const formTitle = document.querySelector('.form-container h2');
    if (formTitle && formTitle.textContent.includes('FREE Website Build')) {
        // Keep the main form title, but could update subtitle
        const formSubtitle = document.querySelector('.form-subtitle');
        if (formSubtitle) {
            formSubtitle.textContent = `Fill out this form to secure one of the ${spotsRemaining} spots available this month.`;
        }
    }
}

// Add click tracking for analytics (replace with actual analytics)
function trackClick(element, action) {
    console.log('Click tracked:', { element, action, timestamp: new Date().toISOString() });
    
    // In a real implementation, you would send this to your analytics service:
    // gtag('event', 'click', {
    //     'event_category': 'CTA',
    //     'event_label': action
    // });
}

// Track CTA clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cta-primary')) {
        trackClick('CTA Button', 'clicked');
    }
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone validation for Austrian numbers
function validatePhone(phone) {
    if (!phone) return true; // Optional field
    const austrianPhoneRegex = /^(\+43|0043|0)[1-9]\d{8,12}$/;
    return austrianPhoneRegex.test(phone.replace(/\s/g, ''));
}

// Real-time validation
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#dc3545';
        }
    });
    
    phoneInput.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            this.style.borderColor = '#dc3545';
        }
    });
});
