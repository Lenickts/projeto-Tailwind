
// Slideshow automático
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Carregar imagens de fundo dinamicamente
function loadSlideImages() {
  slides.forEach((slide) => {
    const bgImage = slide.getAttribute('data-bg');
    if (bgImage) {
      slide.style.backgroundImage = `url('${bgImage}')`;
      slide.style.backgroundSize = 'cover';
      slide.style.backgroundPosition = 'center';
      slide.style.backgroundRepeat = 'no-repeat';
    }
  });
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Inicializar o slideshow quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  // Carregar as imagens de fundo
  loadSlideImages();
  
  // Garantir que o primeiro slide esteja visível
  showSlide(0);
  
  // Iniciar o slideshow automático
  setInterval(nextSlide, 4000); // troca a cada 4 segundos
});

// Pausar slideshow quando o usuário está interagindo
let slideshowInterval;

function pauseSlideshow() {
  clearInterval(slideshowInterval);
}

function resumeSlideshow() {
  slideshowInterval = setInterval(nextSlide, 4000);
}

// Pausar quando o mouse está sobre a seção
const slideshowSection = document.querySelector('section');
if (slideshowSection) {
  slideshowSection.addEventListener('mouseenter', pauseSlideshow);
  slideshowSection.addEventListener('mouseleave', resumeSlideshow);
}