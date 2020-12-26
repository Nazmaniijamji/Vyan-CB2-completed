
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBin, paper1, ground1, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new paper(150,650,50);
	dustBin = new dustbin(600,650);
	
    ground1 = new ground(400,690,800,10);
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("grey");
	
dustBin.display();
ground1.display();
paper1.display();	


}

function keyPressed() {
	if(keyCode===UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145})
	}
}



