const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 500,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
})

let header = document.querySelector('.header');
let toTop = document.querySelector('.top');

window.onload = function(){
  let winPos = window.pageYOffset;
  let screenPos = innerHeight * 0.85;
  
  if ( winPos > screenPos ) {
    header.classList.add('header-scrolled');
    toTop.style.opacity = "1";
    toTop.style.visibility = "visible";
  }
  else if ( winPos < screenPos ) {
    header.classList.remove('header-scrolled');
    toTop.style.opacity = "0";
    toTop.style.visibility = "hidden";
  }
}

window.addEventListener('scroll', function(e){
  let winPos = window.pageYOffset;
  let screenPos = innerHeight * 0.85;

  if ( winPos > screenPos ) {
    header.classList.add('header-scrolled');
    toTop.style.opacity = "1";
    toTop.style.visibility = "visible";
  }
  else if ( winPos < screenPos ) {
    header.classList.remove('header-scrolled');
    toTop.style.opacity = "0";
    toTop.style.visibility = "hidden";
  }
})

toTop.addEventListener('click', function(e){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})

AOS.init();

AOS.init({
  once: true,
  offset: 100
});

// data-aos="fade-up" data-aos-delay="50"
// data-aos-offset="200"