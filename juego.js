var btn_piedra = document.getElementById("Piedra");
var btn_papel = document.getElementById("Papel");
var btn_tijera = document.getElementById("Tijera");
var btn_iniciar = document.getElementById("Iniciar");

var opcion_cpu;
var opcion_jugador;
var ganador_ronda;

var img_cpu = document.getElementById("img_cpu");

var marcador_usuario = document.getElementById("puntos_usuario").innerText;
var marcador_cpu = document.getElementById("puntos_cpu").innerText;
var resultado = document.getElementById("resultado").innerText;

mostrar_imagenes();

btn_piedra.onclick = function() {
    opcion_jugador = 0;
    img_cpu.src = "https://cdn-icons-png.flaticon.com/512/3186/3186367.png";
    img_usuario.src = "https://cdn-icons-png.flaticon.com/512/5461/5461550.png";
}
btn_papel.onclick = function() {
    opcion_jugador = 1;
    img_cpu.src = "https://cdn-icons-png.flaticon.com/512/3186/3186367.png";
    img_usuario.src = "https://cdn-icons-png.flaticon.com/512/2541/2541988.png";
}
btn_tijera.onclick = function() {
    opcion_jugador = 2;
    img_cpu.src = "https://cdn-icons-png.flaticon.com/512/3186/3186367.png";
    img_usuario.src = "https://cdn-icons-png.flaticon.com/512/1019/1019432.png";
}

btn_iniciar.onclick = function() {
    opcion_cpu = generarOpcion();
    mostrarOpcionCpu(opcion_cpu);
    resultadoJuego(opcion_cpu,opcion_jugador);
    agregarContador(ganador_ronda);
}



// Funciones:

function generarOpcion() {
    return parseInt(Math.random() * 3);
}

function mostrarOpcionCpu(opcion) {
    if (opcion == 0)
    {
        img_cpu.src = "https://cdn-icons-png.flaticon.com/512/5461/5461550.png";
    } 
    else if (opcion == 1)
    {
        img_cpu.src = "https://cdn-icons-png.flaticon.com/512/2541/2541988.png";
    } else
    {
        img_cpu.src = "https://cdn-icons-png.flaticon.com/512/1019/1019432.png";
    }
}

function resultadoJuego(opcion_cpu,opcion_jugador) {
    if ((opcion_cpu == 0 && opcion_jugador == 1) || (opcion_cpu == 1 && opcion_jugador == 2) || (opcion_cpu == 2 && opcion_jugador == 0))
    {
        ganador_ronda = 1;
    } 
    else if (opcion_cpu == opcion_jugador)
    {
        ganador_ronda = 2;
    }
    else
    {
        ganador_ronda = 0;
    }
}

function mostrar_imagenes() {
    btn_piedra.style.backgroundImage = " url(https://cdn-icons-png.flaticon.com/512/5461/5461550.png)";
    btn_papel.style.backgroundImage = " url(https://cdn-icons-png.flaticon.com/512/2541/2541988.png)";
    btn_tijera.style.backgroundImage = " url(https://cdn-icons-png.flaticon.com/512/1019/1019432.png)";
}

function agregarContador()
{
    switch (ganador_ronda)
    {
        case (1):
            marcador_usuario++;
            document.getElementById("puntos_usuario").innerText = marcador_usuario;
            document.getElementById("resultado").innerText = "Ganaste! :D";
            break;
        case (2):
            document.getElementById("resultado").innerText = "Empate :/";
            break;
        case (0):
            marcador_cpu++;
            document.getElementById("puntos_cpu").innerText = marcador_cpu;
            document.getElementById("resultado").innerText = "Perdiste :(";
    }
}


