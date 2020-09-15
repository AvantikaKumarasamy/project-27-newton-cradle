
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(380,200,340,20);

	bobObject1 = new Bob(250,400);
	bobObject2 = new Bob(300,400);
	bobObject3 = new Bob(350,400);
	bobObject4 = new Bob(400,400);
	bobObject5 = new Bob(450,400);
	bobObject6 = new Bob(500,400);

	rope1= new Rope(bobObject1.body,roof.body,-35*2.2,0);
	rope2= new Rope(bobObject2.body,roof.body,-35*2,0);
	rope3= new Rope(bobObject3.body,roof.body,-35*1.5,0);
	rope4= new Rope(bobObject4.body,roof.body,-35*1,0);
	rope5= new Rope(bobObject5.body,roof.body,-35*0.5,0);
	rope6= new Rope(bobObject6.body,roof.body,-35*0,0);


	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobObject6.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x:-20,y:-20})
	}
}



