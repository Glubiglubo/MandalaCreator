class Painter{
  constructor(){
    this.paintlist = [];
    this.dotmode = false;
    this.weight = 10;
    this.brushAmount = 4;
  }

  resetDrawing(){
    this.paintlist = [];
    for(let i = 0; i < this.brushAmount; i++){
      let b = new Brush(0);
      this.paintlist.push(b);
    }
  }

  update(){
    let angle = TWO_PI/this.paintlist.length;
    let x = mouseX - width/2;
    let y = mouseY - height/2
    for(let i = 0; i<this.paintlist.length; i++){
      let newx = x * cos(angle*i) - y * sin(angle*i);
      let newy = y * cos(angle*i) + x * sin(angle*i);
      this.paintlist[i].updatePos(newx, newy, this.weight);
    }
  }

  paint(){
    for(let i = 0; i<this.paintlist.length; i++){
      this.paintlist[i].draw(this.dotmode);
    }
  }

  incWeight(){
    if(this.weight <= 1000){
      this.weight += 1;
    }
  }

  decWeight(){
    if(this.weight > 1){
      this.weight -= 1;
    }
  }

  changeMode(){
    this.dotmode = !this.dotmode;
  }

  incbrushAmount(){
    if(this.brushAmount <= 1000){
      this.brushAmount += 1;
    }
  }

  decbrushAmount(){
    if(this.brushAmount > 1){
      this.brushAmount -= 1;
    }
  }

  clearLastVertex(){
    for(let i = 0; i<this.paintlist.length; i++){
      this.paintlist[i].resetBrush();
    }
  }
}
