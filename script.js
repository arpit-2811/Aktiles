document.addEventListener('DOMContentLoaded', () => {

    // Product Gallery Loading
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        const singleFiles = [
            "ChatGPT Image Jun 15, 2026, 11_18_25 PM.png",
            "ChatGPT Image Jun 15, 2026, 11_26_19 PM.png",
            "catalog_prices_removed_clean.png",
            "catalog_prices_removed_v2.png",
            "fully_cleaned_catalog_2.png",
            "fully_cleaned_catalog_4.png",
            "marble_catalog_prices_removed.png",
            "price_removed_cleaner.png"
        ];
        
        const mergedFiles = [
            "WhatsApp Image 2026-06-15 at 3.16.09 PM (1).jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.09 PM (2).jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.09 PM.jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.10 PM (1).jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.10 PM.jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.11 PM (1).jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.11 PM (2).jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.11 PM.jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.12 PM (1).jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.12 PM (2).jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.12 PM.jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.13 PM (1).jpeg",
            "WhatsApp Image 2026-06-15 at 3.16.13 PM.jpeg",
            "WhatsApp Image 2026-06-15 at 3.20.28 PM (1).jpeg",
            "WhatsApp Image 2026-06-15 at 3.20.28 PM.jpeg",
            "WhatsApp Image 2026-06-15 at 3.20.29 PM (1).jpeg",
            "WhatsApp Image 2026-06-15 at 3.20.29 PM.jpeg",
            "WhatsApp Image 2026-06-15 at 3.20.30 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.17.49 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.34 PM (1).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.34 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.35 PM (1).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.35 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.37 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.38 PM (1).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.38 PM (2).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.38 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.39 PM (1).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.39 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.41 PM (1).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.41 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.43 PM (1).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.43 PM (2).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.43 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.44 PM (1).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.44 PM.jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.46 PM (1).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.46 PM (2).jpeg",
            "WhatsApp Image 2026-06-16 at 4.19.46 PM.jpeg"
        ];
        
        let html = '';
        let globalIndex = 0;
        
        // Single images
        singleFiles.forEach((file) => {
            const delay = 0.1 * ((globalIndex % 3) + 1);
            html += `
                <div class="product-card reveal-up" style="transition-delay: ${delay}s">
                    <div class="product-img-wrapper">
                        <img src="product/${file}" alt="AK Premium Surface ${globalIndex + 1} in Gopalganj" loading="lazy">
                    </div>
                    <div class="product-info">
                        <h3>AK Premium Surface ${globalIndex + 1}</h3>
                    </div>
                </div>
            `;
            globalIndex++;
        });

        // Merged images
        for (let i = 0; i < mergedFiles.length; i += 4) {
            const chunk = mergedFiles.slice(i, i + 4);
            const delay = 0.1 * ((globalIndex % 3) + 1);
            let chunkHtml = chunk.map(file => `<img src="product/${file}" alt="AK Collection Part in Gopalganj" loading="lazy">`).join('');
            
            html += `
                <div class="product-card reveal-up" style="transition-delay: ${delay}s">
                    <div class="merged-img-wrapper">
                        ${chunkHtml}
                    </div>
                    <div class="product-info">
                        <h3>AK Premium Surface ${globalIndex + 1}</h3>
                    </div>
                </div>
            `;
            globalIndex++;
        }
        galleryGrid.innerHTML = html;
        
        // Ensure new dynamically added elements are observed for scroll animation
        const newReveals = galleryGrid.querySelectorAll('.reveal-up');
        // We'll observe them after the original observer is set up further down
        setTimeout(() => {
            if(window.observer) {
                newReveals.forEach(el => window.observer.observe(el));
            }
        }, 500);
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Toggle icon between list and x
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });

    // Close mobile menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    window.observer = observer;

    // Select all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    revealElements.forEach(el => {
        observer.observe(el);
    });

});

// WhatsApp Form Handler
function sendToWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById('wa-name').value;
    const interest = document.getElementById('wa-interest').value;
    const message = document.getElementById('wa-message').value;
    
    const whatsappNum = "919288400980"; // Use the newly provided number
    const text = `Hello AK Tiles!%0A%0A*Name:* ${name}%0A*Interested In:* ${interest}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
}
