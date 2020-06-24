
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject1=new Paper(600,450,50);
	paperObject2=new Paper(600,450,50);
	paperObject3 = new Paper (600,450,50);
	paperObject4 = new Paper (600,450,50);
	paperObject5 = new Paper (600,450,50);
	groundObject=new Ground(width/2,200,300,20);
	rope1 = new Rope (paperObject1.body,groundObject.body,0,0);
	rope2 = new Rope (paperObject2.body,groundObject.body,0,0);
    rope3 = new Rope (paperObject3.body,groundObject.body,0,0);
	rope4 = new Rope (paperObject4.body,groundObject.body,0,0);
	rope5 = new Rope (paperObject5.body,groundObject.body,0,0);
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 
  
  paperObject1.display();
  paperObject2.display();
  paperObject3.display();
  paperObject4.display();
  paperObject5.display();
  groundObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  
  
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
	
	
	
	Matter.Body.applyForce(paperObject5.body,paperObject5.body.position,{x:-50,y:-45});
}

}





