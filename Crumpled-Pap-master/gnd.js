class Gnd{
    constructor(x, y, width, height) {
        var options = {
             'isStatic' : true,
             'friction' :1.0,
             'density' :1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
       
      }
      display(){
          strokeWeight(3);
          stroke("green");
          fill("green");

          rectMode(CENTER);
          rect(this.body.position.x,this.body.position.y,this.width,this.height);
          
      //  push();
       // translate(this.body.position.x, this.body.position.y);
      //  rotate(angle);
      //  pop();
      }
    } 