 // Mobile menu functionality
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const mobileNav = document.getElementById('mobileNav');
            
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileNav.classList.toggle('show');
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.mobile-nav a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.remove('show');
                    hamburger.classList.remove('active');
                });
            });
            
            // Smooth scrolling for all anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
        
        // Enhanced Modal functions
        function openModal(imageSrc) {
            const modal = document.getElementById('certificateModal');
            const modalImg = document.getElementById('modalImage');
            
            // Reset modal position
            modal.scrollTop = 0;
            
            modal.style.display = 'flex';
            modalImg.src = imageSrc;
            document.body.style.overflow = 'hidden';
            
            // Center the image after load
            modalImg.onload = function() {
                // If image is taller than viewport, align to top
                if (this.naturalHeight > window.innerHeight) {
                    modal.scrollTop = 0;
                }
            };
        }

        function closeModal() {
            const modal = document.getElementById('certificateModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside or pressing ESC
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('certificateModal');
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });