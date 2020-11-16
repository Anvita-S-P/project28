
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var stone;
var tree;
var mango;
var boy;


function preload()
{
	boy=loadImage("sprites/boy.png");
	stone=loadImage("sprites/stone.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
	tree=new Tree(700,680,80,20);
	stone=new Stone(600,630,40,20);
	boy=createSprite(600,650,40,20);
	mango=new Mango(700,680,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  
  drawSprites();
  ground.display();
  tree.display();
  stone.dislay();
  boy.display();
  mango.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}

 function mouseDragged(){
	      Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
 }

 function mouseReleased(){
     
     sling.fly();
   
  }

 function detectCollision(stone,mango){
	 mangoBodyPosition=mango.body.position;
	 stoneBodyPosition=stone.body.position ;

	 var distance=dist( stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y );
     if(dist<=mango.r+stone.r){
		 Matter.Body.setStatic(mango.body,false);
	 }
 }

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}

}







