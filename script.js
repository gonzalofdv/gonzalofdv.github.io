// Obtener la fecha actual
let today = new Date();
let currentDay = today.getDate();

// Obtener todos los cubos
let cubes = document.querySelectorAll('.cube');

// Recorre cada cubo y desbloquéalo si es el día correspondiente
cubes.forEach(cube => {
    let day = parseInt(cube.getAttribute('data-day'));

    // Si el día del cubo es menor o igual al día actual, desbloquéalo
    if (day <= currentDay) {
        cube.classList.remove('cube--inactive');

        // Añadimos un listener de clic para animar el cubo
        cube.addEventListener('click', () => {
            // Animación del cubo al hacer clic
            anime({
                targets: cube,
                rotateY: [0, 360], // Rotación en Y
                duration: 1000,
                easing: 'easeInOutQuad'
            });

            showSurprise(day); // Mostrar la sorpresa después de la animación
        });
    } else {
        cube.classList.add('cube--inactive');
    }
});

// Mostrar la sorpresa en el modal
function showSurprise(day) {
    let modal = document.getElementById('contentModal');
    let surpriseContent = document.getElementById('surpriseContent');
    
    // Contenido de cada día
    let surprises = {
        1: "¡Feliz primer día! Te amo más cada día.",
        2: "<img src='https://tuweb.com/foto.jpg' alt='Una foto especial' />",
        3: "<a href='https://cancion-especial.com'>Esta canción me recuerda a ti</a>",
        4: "Vale por una cena romántica este fin de semana.",
        5: "Pista: Busca en el lugar donde nos conocimos por primera vez.",
        6: "¡Feliz primer día! Te amo más cada día.",
        7: "<img src='https://tuweb.com/foto.jpg' alt='Una foto especial' />",
        8: "<a href='https://cancion-especial.com'>Esta canción me recuerda a ti</a>",
        9: "Vale por una cena romántica este fin de semana.",
        10: "Pista: Busca en el lugar donde nos conocimos por primera vez.",
        11: "¡Feliz primer día! Te amo más cada día.",
        12: "<img src='https://tuweb.com/foto.jpg' alt='Una foto especial' />",
        13: "<a href='https://cancion-especial.com'>Esta canción me recuerda a ti</a>",
        14: "Vale por una cena romántica este fin de semana.",
        15: "Pista: Busca en el lugar donde nos conocimos por primera vez.",
        16: "¡Feliz primer día! Te amo más cada día.",
        17: "<img src='https://tuweb.com/foto.jpg' alt='Una foto especial' />",
        18: "<a href='https://cancion-especial.com'>Esta canción me recuerda a ti</a>",
        19: "Vale por una cena romántica este fin de semana.",
        20: "Pista: Busca en el lugar donde nos conocimos por primera vez.",
        21: "Pista: Busca en el lugar donde nos conocimos por primera vez.",
        22: "Este dia lo puedes desbloquear",
        23: "hasta que no sea 23 no podrás ver",
        24: "Pista: Busca en el lugar donde nos conocimos por primera vez.",
        25: "Pista: Busca en el lugar donde nos conocimos por primera vez."
        // Añadir más sorpresas hasta el día 25
    };

    surpriseContent.innerHTML = surprises[day];

    // Aplicar Charming.js para dividir el texto
    charming(surpriseContent);

    // Inicializar y aplicar efectos con Textfx.js
    let fx = new TextFx(surpriseContent);
    fx.animate({
        effect: 'wave', // Otras opciones: 'glitch', 'fadeIn', 'slide'
        duration: 1200,
        stagger: 50
    });

    modal.style.display = "flex";

    // Aplicar animación con anime.js después de dividir el texto
    anime({
        targets: '#surpriseContent span',
        opacity: [0, 1],
        translateY: [-50, 0],
        easing: 'easeOutExpo',
        duration: 800,
        delay: (el, i) => 30 * i // Demora progresiva para cada letra
    });
}

// Cerrar el modal
//document.querySelector('.close').addEventListener('click', () => {
//    document.getElementById('contentModal').style.display = 'none';
//});

document.querySelector('.close').addEventListener('click', () => {
    let modal = document.getElementById('contentModal');
    
    // Animación de salida con anime.js
    anime({
        targets: modal,
        opacity: [1, 0],
        translateY: [0, -100],
        easing: 'easeInOutQuad',
        duration: 500,
        complete: function() {
            modal.style.display = 'none'; // Ocultar modal después de la animación
        }
    });
});

// Cuenta atrás
let targetDate = new Date(today.getFullYear(), today.getMonth(), currentDay + 1);
let countdownElement = document.getElementById('countdown');
let countdown = setInterval(() => {
    let now = new Date();
    let diff = targetDate - now;

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Próximo desbloqueo en: ${hours}h ${minutes}m ${seconds}s`;

    // Si el contador llega a 0, reiniciar para el próximo día
    if (diff < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "¡El siguiente cubo está desbloqueado!";
    }
}, 1000);
