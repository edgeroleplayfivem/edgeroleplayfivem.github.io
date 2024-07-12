window.addEventListener('scroll', function() {
    var socialContainer = document.querySelector('.social-container');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    
    if (scrollPosition < windowHeight) {
      socialContainer.style.opacity = 1 - (scrollPosition / windowHeight);
    } else {
      socialContainer.style.opacity = 0;
    }
  });
  