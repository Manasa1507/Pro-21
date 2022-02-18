
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
var ground2
var ground3
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(400,685,800,20)
	ground2 = new Ground(500,630,20,100)
	ground3 = new Ground(700,630,20,100)


	var options ={
     isStatic : false,
	  restitution  : 0.3,
	  density : 0.5


	}
     ball = Bodies.circle(200,630,30,options);
	 World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
	background(0);
  
  
   ground1.show();
   ground2.show();
   ground3.show();
   ellipseMode(RADIUS)
   ellipse(ball.position.x,ball.position.y,30,30)
}

 function keyPressed(){
	 if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(ball,ball.position,{x:80,y:-80})
	 }
 }

