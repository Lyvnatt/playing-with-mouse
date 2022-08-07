document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mousemove", dibujarMouse);
var bot = document.getElementById("boton");
boton.addEventListener("click", limpiar);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var estado;
var initialX;
var initialY;

dibujarlinea("black", 1, 1, 699, 1, papel);
dibujarlinea("black", 699, 1, 699, 699, papel);
dibujarlinea("black", 1, 1, 1, 699, papel);
dibujarlinea("black", 1, 699, 699, 699, papel);

function limpiar()
{
  papel.clearRect(2, 2, 697, 697);
}

function dibujarlinea(col, inicialX, inicialY, finalX, finalY, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = col;
  lienzo.lineWidth = 2;
  lienzo.moveTo(inicialX, inicialY);
  lienzo.lineTo(finalX, finalY);
  lienzo.lineCap = "round";
  lienzo.lineJoin = "round";
  lienzo.stroke();
  lienzo.closePath();

  initialX = finalX;
  inicialY = finalY;
}

function presionarMouse(evento)
{
  estado = 1;
  initialX = evento.offsetX;
  initialY = evento.offsetY;
}

function soltarMouse(evento)
{
  estado = 0;
  initialX = evento.offsetX;
  initialY = evento.offsetY;
}

function dibujarMouse(evento)
{
  var color_linea = document.getElementById("colorcito");
  var col = color_linea.value;

  if (estado == 1)
  {
    dibujarlinea(col, initialX, initialY, evento.offsetX, evento.offsetY, papel);
  }
  initialX = evento.offsetX;
  initialY = evento.offsetY;
}


