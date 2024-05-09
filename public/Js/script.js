
// para que la navbar quede fija arriba cuando scrolleo hacia abajo

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById('navbar');
    var scrollOnce = true;

    window.addEventListener("scroll", function () {
        if (scrollOnce) {
            navbar.classList.add('fixed-top');
            navbar.style.backgroundColor = 'white'; // Cambia el fondo a blanco
            scrollOnce = false;
        }
    });
});

//para que el menu desaparezco cuando selecciono algo del menu

document.addEventListener("DOMContentLoaded", function () {
    var toggleMenu = document.getElementById("toggleMenu");
    var menu = document.getElementById("menu");

    // Función para ocultar el menú desplegado
    function hideMenu() {
        menu.classList.remove("active");
    }

    // Evento clic en el botón del menú hamburguesa
    toggleMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Evento clic en un enlace del menú desplegado
    var menuLinks = document.querySelectorAll('.menu ul li a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            hideMenu();
        });
    });
});

// para que la navbar no tape los titulos

document.addEventListener("DOMContentLoaded", function () {
    var navbarHeight = document.querySelector('.navbar').offsetHeight; // Obtener la altura de la barra de navegación

    // Agregar un evento 'click' a todos los enlaces del menú
    var menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Obtener el elemento al que se está desplazando
            var target = document.querySelector(this.getAttribute('href'));

            // Calcular el nuevo desplazamiento restando la altura de la barra de navegación
            var offsetTop = target.offsetTop - navbarHeight;

            // Desplazarse al elemento con el nuevo desplazamiento
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();
        });
    });
});

