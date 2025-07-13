const tituloCancion = document.querySelector('.reproductor-musica h1');
const nombreArtista = document.querySelector('.reproductor-musica p');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const inconoControl = document.getElementById('iconoControl');
const botonReproducirPausar = document.querySelector('.controles button.boton-reproducir-pausar');

const botonAtras = document.querySelector('.controles button.atras');
const botonAdelante = document.querySelector('.controles button.adelante');

const canciones = [
     {
        titulo: ".Marc Anthony - Vivir Mi Vida (Official Video) .mp3",
        nombre: "marc Anthony",
        fuente: "music/Marc Anthony - Vivir Mi Vida (Official Video).mp3",
        
    },
    {
        titulo: 'A quien quiero mentirle - Marck Antony - Letra(MP3_160K)',
        nombre: 'Marck Antony',
        fuente: 'music/A quien quiero mentirle - Marck Antony - Letra(MP3_160K).mp3'
    },
    {
        titulo:'Camila Cabello - Havana (Audio) ft. Young Thug(720P_HD)(mp3)',
        nombre:'Camila Cabello',
        fuente:'music/Camila Cabello - Havana (Audio) ft. Young Thug(720P_HD)(mp3).mp3'
    },
    {
        titulo: "Marc Anthony - Flor Pálida (Official Video)(MP3_160K).mp3e If I Fall",
        nombre: "marc Anthony",
        fuente: "music/Marc Anthony - Flor Pálida (Official Video)(MP3_160K).mp3",
    },
    {
        titulo: "R.K.M_ Ken-Y - Down.mp3",
        nombre: "mR.K.M_ Ken-Y ",
        fuente: "music/R.K.M_ Ken-Y - Down(MP3_160K).mp3",
        
    }, {
        titulo: "R.K.M_ Ken-Y - Princesa.mp3",
        nombre: "mR.K.M_ Ken-Y ",
        fuente: "music/Ken-Y - Princesa [Official Video](MP3_160K).mp3",
        
    },
    {
        titulo: " Te Conozco Bien(720P_HD)(mp3).mp3",
        nombre: "marc Anthony",
        fuente: "music/Te Conozco Bien(720P_HD)(mp3).mp3",
    },
];

let indiceCancionActual = 0;

function actualizarInfoCancion(){
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata',function(){});
};

cancion.addEventListener('loadedmetadata', function(){
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
});

botonReproducirPausar.addEventListener('click', reproducirPausar);

function reproducirPausar(){
    if(cancion.paused){
        reproducirCancion();
    } else {
        pausarCancion();
    }
};

function reproducirCancion(){
    cancion.play();
    inconoControl.classList.add('bi-pause-fill')
    inconoControl.classList.remove('bi-play-fill')
}

function pausarCancion(){
    cancion.pause();
    inconoControl.classList.remove('bi-pause-fill')
    inconoControl.classList.add('bi-play-fill')
}

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime;
    }
});

progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value;
});

// progreso.addEventListener('change', ()=>{
//     reproducirCancion();
// });

botonAdelante.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

botonAtras.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

actualizarInfoCancion();
