const fila = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slider2 = document.querySelector('.slider2');
const imagen = document.querySelectorAll('.imagen');
const izquierda = document.getElementById('anterior');
const derecha = document.getElementById('siguiente');
const izquierda2 = document.getElementById('anterior2');
const derecha2 = document.getElementById('siguiente2');
let indice = 0;
let indice2 = 0;

function actualizar() {
    slider.style.transform = `translateX(-${indice * 20}%)`;
}

function siguiente() {
    if (indice < imagen.length/2 - 5) {
        indice = indice + 5;
    } else {
        indice = 0;
    }
    actualizar();
}

function anterior() {
    if (indice > 0) {
        indice = indice - 5;
    } else {
        indice = imagen.length/2 - 5;
    }
    actualizar();
}

function actualizar2() {
    slider2.style.transform = `translateX(-${indice2 * 20}%)`;
}

function siguiente2() {
    if (indice2 < imagen.length/2 - 5) {
        indice2 = indice2 + 5;
    } else {
        indice2 = 0;
    }
    actualizar2();
}

function anterior2() {
    if (indice2 > 0) {
        indice2 = indice2 - 5;
    } else {
        indice2 = imagen.length/2 - 5;
    }
    actualizar2();
}

izquierda.addEventListener('click', anterior);
derecha.addEventListener('click', siguiente);
izquierda2.addEventListener('click', anterior2);
derecha2.addEventListener('click', siguiente2);

imagen.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            imagen.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    imagen.forEach(pelicula => pelicula.classList.remove('hover'));
});