
        // Scroll animation
        const sections = document.querySelectorAll('section');
        
        function checkScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.8) {
                    section.classList.add('visible');
                }
            });
        }
        
        // Run on load
        window.addEventListener('load', () => {
            checkScroll();
        });
        
        // Run on scroll
        window.addEventListener('scroll', () => {
            checkScroll();
        });
  