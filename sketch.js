let bx;
let by;
let ellipseSize = 45;
let overEllipse = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let sketch;

function setup() {
  sketch = createCanvas(800, 800);
  sketch.parent("p5");
  background(255);

  bx = width / 2.0;
  by = height / 2.0;
  ellipseMode(RADIUS);
  strokeWeight(2);
}

function draw() {
  tablero();
  ficha()
  
 

}

function ficha() {
  if (
    mouseX > bx - ellipseSize &&
    mouseX < bx + ellipseSize &&
    mouseY > by - ellipseSize &&
    mouseY < by + ellipseSize
  ) {
    overEllipse = true;
    if (!locked) {
      stroke(255);
      fill("red");
    }
  } else {
    stroke(255);
    fill("red");
    overEllipse = false;
  }
  // Draw the box
  ellipse(bx, by, ellipseSize, ellipseSize);

}

function tablero() {
  var ancho_celda = width / 8;
  var alto_celda = height / 8;

  //8 filas
  for (var j = 0; j < 8; j++) {

    //colores de la fila
    var color_celda_par;
    var color_celda_impar;
    if (j % 2 == 0) {
      //fila par 
      color_celda_par = color(155, 155, 155);
      color_celda_impar = 0;
    } else {
      //fila impar 
      color_celda_par = 0;
      color_celda_impar = color(155, 155, 155);
    }

    // una fila
    for (var i = 0; i < 8; i++) {
      //si el módulo del contador de la fila es par
      if (i % 2 == 0) {
        // Si el residuo es 0 es par
        fill(color_celda_par)
      } else {
        // Si el residuo es diferente de 0 es impar
        fill(color_celda_impar)
      }
      // Dibujamos un cuadrado
      rect(i * ancho_celda, j * alto_celda, ancho_celda, alto_celda)
    }
  }
}

function mousePressed() {
  if (overEllipse) {
    locked = true;
    fill("red");
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}