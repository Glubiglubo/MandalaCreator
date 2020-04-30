class Brush{
  constructor(_w){
    this.vertexlist = [];
    this.colorangle = 0;
    this.weight = _w;
  }

  updatePos(_x,_y,_w){
    this.weight = _w;
    this.colorangle += 0.05;

    let newVertex = new Object();
    newVertex.x = _x + width/2;
    newVertex.y = _y + height/2;
    newVertex.color = this.colorangle;
    this.vertexlist.push(newVertex);

    if(this.vertexlist.length > 2){
      this.vertexlist.shift();
    }
  }

  draw(_dotmode){
    //noStroke();
    //noFill();
    strokeWeight(this.weight);
    if(_dotmode == false){
      for(let i = 0; i<this.vertexlist.length; i++){
        if(i != 0){
          stroke(150+105*cos(this.vertexlist[i].color),0,150+105*sin(this.vertexlist[i].color));
          line(this.vertexlist[i-1].x, this.vertexlist[i-1].y, this.vertexlist[i].x, this.vertexlist[i].y);
        }
      }
    }
    else{
      stroke(150+105*cos(this.vertexlist[0].color),0,150+105*sin(this.vertexlist[0].color));
      point(this.vertexlist[0].x, this.vertexlist[0].y);
    }
  }

  resetBrush(){
    this.vertexlist = [];
    //this.color = random(TWO_PI);
  }
}
