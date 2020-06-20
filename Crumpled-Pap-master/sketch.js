const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1,bin2,bin3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,50,50,options);
	bin1 = new Bin(400,680,200,20,options);
	bin2 = new Bin(360,380,20,50,options);
	bin3 = new Bin(460,380,20,50,options);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


 
	 paper.display();
	 bin1.display();
 
 
  
  drawSprites();
 
 }

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});

	}
}



