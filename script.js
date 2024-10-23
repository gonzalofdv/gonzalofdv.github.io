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
        cube.classList.add('unlocked');
        cube.addEventListener('click', () => {
            showSurprise(day);
        });
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
    modal.style.display = "flex";
}

// Cerrar el modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('contentModal').style.display = 'none';
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
