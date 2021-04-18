var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxleft;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 boxleftSprite=createSprite(300,600, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);
	  
	 boxrightSprite=createSprite(600,600, 20,100);
 	 boxrightSprite.shapeColor=color(255,0,0);

	  boxbaseSprite=createSprite(450,650, 300,20);
 	boxbaseSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(300+20, 600, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);
	 
	 boxRightBody = Bodies.rectangle(600+20, 600, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	 boxbaseBody = Bodies.rectangle(400+20, 600,300,20 , {isStatic:true} );
 	World.add(world, boxbaseBody);
	 
 	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Matter.Body.setStatic(packageBody,false);
  }
 if (keyCode === LEFT_ARROW)
 {
	 helicopterSprite.x=helicopterSprite.x-20

     

	 translation={x:-20,y:0}
	 Matter.Body.translate(packageBody, translation)
 }
 if (keyCode === RIGHT_ARROW)
 {
	 helicopterSprite.x=helicopterSprite.x+20

     

	 translation={x:+20,y:0}
	 Matter.Body.translate(packageBody, translation)
 }
}



