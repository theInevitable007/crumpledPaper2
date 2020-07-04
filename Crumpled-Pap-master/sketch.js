const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var bin1,bin2,bin3,bin4;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Gnd(400,700,800,20);
			
	bin1 = new Bin(650,590,200,200);
	paper = new Paper (100,670,70);
	bin2 = new invBin(550,590,20,200);
	bin3 = new invBin(750,590,20,200);
	bin4 = new invBin(650,700,200,20);

	
   //var render = Render.create;
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

Engine.update(engine);     	 
	 
	 ground.display();
	 bin1.display();
	 paper.display();

	 
	 
	 bin2.display();
	 bin3.display();
	 bin4.display()
     

	 	 
  drawSprites();
 
 }

function keyPressed(){
	console.log("keyPressed")
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y:-800});
       
	}
}