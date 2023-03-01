// Seleccionamos la barra de navegación
const navbar = document.querySelector('.navbar');

// Obtenemos la posición inicial de la barra de navegación
const navbarTop = navbar.offsetTop;

// Función para hacer la barra de navegación pegajosa
function stickyNav() {
  // Obtenemos la posición actual del scroll
  const scrollY = window.scrollY;

  // Si la posición actual del scroll es mayor o igual a la posición inicial de la barra de navegación,
  // hacemos la barra de navegación pegajosa añadiéndole la clase 'sticky', si no, la quitamos
  if (scrollY >= navbarTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// Escuchamos el evento 'scroll' en la ventana y llamamos a la función stickyNav()
window.addEventListener('scroll', stickyNav);

// Seleccionamos todos los enlaces de la barra de navegación
const navLinks = document.querySelectorAll('.navbar a');

// Función para hacer el scroll suave al hacer clic en un enlace de la barra de navegación
function smoothScroll(event) {
  // Prevenimos el comportamiento predeterminado del enlace
  event.preventDefault();

  // Obtenemos el valor del atributo href del enlace y seleccionamos la sección correspondiente
  const href = this.getAttribute('href');
  const section = document.querySelector(href);

  // Hacemos el scroll suave a la sección utilizando la propiedad scrollIntoView con opciones de animación
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Añadimos un event listener a cada enlace de la barra de navegación que llame a la función smoothScroll() al hacer clic
navLinks.forEach(link => link.addEventListener('click', smoothScroll));

