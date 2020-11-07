
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var glass1,glass2,glass3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,30);
	glass1 = new Glass(600,500,20,10);
	glass2 = new Glass(500,200,10,40);
	glass3 = new Glass(400,200,10,40);
ground = new Ground(600,600,1200,30);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  glass1.display();
  glass2.display();
  glass3.display();
if(KeyCode===UP_Arrow){ 

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});



}

}



