let painter;
let h1, h2, h3, canvas;

function setup() {
  painter = new Painter(8);
  painter.resetDrawing();

  h1 = createElement("h1", "Draw whatever MANDALA you want!");
  h2 = createElement("h", `Draw on the canvas by dragging the mouse. <br> Change number of reflections (${painter.brushAmount}): LEFT/RIGHT <br> Change strokeweight (${painter.weight}): UP/DOWN <br> Change drawing mode (Lines/Dots): TAB <br> Clear canvas: BACKSPACE`);
  h1.position(30,0);
  h2.position(800, 65);

  canvas = createCanvas(750,750);
  canvas.position(30,65);
  background(0);
}

function mouseDragged() {
  painter.update();
  painter.paint();
}

function mouseReleased() {
  painter.clearLastVertex();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    painter.incWeight();
  }
  else if (keyCode === DOWN_ARROW) {
    painter.decWeight();
  }
  else if (keyCode === RIGHT_ARROW) {
    painter.incbrushAmount();
    painter.resetDrawing();
  }
  else if (keyCode === LEFT_ARROW) {
    painter.decbrushAmount();
    painter.resetDrawing();
  }
  else if(keyCode === TAB){
    painter.changeMode();
  }
  else if(keyCode === BACKSPACE){
    clear();
    background(0);
  }
  h2.html(`Draw on the canvas by dragging the mouse. <br> Change number of reflections (${painter.brushAmount}): LEFT/RIGHT <br> Change strokeweight (${painter.weight}): UP/DOWN <br> Change drawing mode (Lines/Dots): TAB <br> Clear canvas: BACKSPACE`);
}
