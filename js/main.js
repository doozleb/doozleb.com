$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Smooth scrolling using native behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update active state
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active nav link on scroll
    $(window).scroll(function() {
        const scrollDistance = $(window).scrollTop() + 100;
        
        $('section').each(function() {
            const sectionTop = $(this).offset().top - $('.navbar').outerHeight();
            const sectionBottom = sectionTop + $(this).outerHeight();
            
            if (scrollDistance >= sectionTop && scrollDistance < sectionBottom) {
                const currentId = $(this).attr('id');
                $('.nav-link').removeClass('active');
                $(`.nav-link[href="#${currentId}"]`).addClass('active');
            }
        });
    });

    // Portfolio hover effect
    $('.portfolio-item').hover(
        function() {
            $(this).find('.portfolio-overlay').css('opacity', '1');
        },
        function() {
            $(this).find('.portfolio-overlay').css('opacity', '0');
        }
    );

    // Initialize navbar
    $('.navbar-nav .nav-item:first-child .nav-link').addClass('active');

    // Slideshow functionality
    function initSlideshow() {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Change slide every 7 seconds
        setInterval(nextSlide, 7000);
    }

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initSlideshow();
    });
}); 