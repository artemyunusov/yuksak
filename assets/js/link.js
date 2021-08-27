let nav = document.querySelector('.nav');
let intro = document.querySelector('.intro');

nav.addEventListener('click', function(e){
  if( e.target.classList.contains('nav__link') ) {
    e.preventDefault();
    scrollMe(e.target);
  }
})

function scrollMe(elem){
  let h = elem.hash;

  let target = document.querySelector(h);
  let pos = target.offsetTop;

  window.scrollTo({
    top: pos,
    behavior: "smooth"
  })
}

intro.addEventListener('click', function(e){
  if( e.target.classList.contains('intro__content-link') ) {
    e.preventDefault();
    scrollMe(e.target);
  }
})

// intro__content-link