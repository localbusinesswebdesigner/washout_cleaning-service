 $(document).ready(function(){
    // Mobile menu toggle
    $('.menu-toggle').click(function(){
      $('#main-nav').toggleClass('active');
    });
    
    // Close mobile menu when clicking on a link
    $('#main-nav a').click(function(){
      $('#main-nav').removeClass('active');
    });
    
    // Initialize slick carousel
    $('.gallery-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000
    });
    
    // Smooth scrolling for navigation links
    $('#main-nav a').on('click', function(e) {
      e.preventDefault();
      var target = this.hash;
      var $target = $(target);
      $('html, body').animate({
        'scrollTop': $target.offset().top - 80
      }, 800, 'swing');
    });
    
    // Form submission handling
    $('#contactForm').on('submit', function(e){
      e.preventDefault();
      // In a real implementation, you would send the form data to your server here
      alert('Thank you for your message! We will contact you shortly.');
      this.reset();
    });
  });