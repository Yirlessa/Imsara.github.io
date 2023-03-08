/*CARRUSEL */
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//FIN CARRUSEL

//BTN UP
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { 
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { 
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);



function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

//VENTANA MODAL

const openone = document.getElementById('openone');
const opentwo = document.getElementById('opentwo');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

openone.addEventListener('click', () => {
  modal_container.classList.add('show'); 
  
   
});

opentwo.addEventListener('click', () => {
    modal_container.classList.add('show'); 
    
     
  }); 
close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});



//SCROLLING

document.querySelector('#openone').addEventListener('click', e => {
    // Agregar clase para no permitir desplazamiento
    document.body.classList.add('no-scroll');
});

document.querySelector('#opentwo').addEventListener('click', e => {
    document.body.classList.add('no-scroll');
});

document.querySelector('#close').addEventListener('click', e => {
    // Quitar clase para permitir desplazamiento
    document.body.classList.remove('no-scroll');
});

