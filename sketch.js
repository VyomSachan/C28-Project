
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload(){
	
//}

function setup() {
	createCanvas(1200, 580);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, height-30, width, 20);
	tree = new Tree();
	boy = new Boy();

	stone = new Stone(200, height-250);
	sling = new Sling(stone.body, {x: 290, y: 410});

	mango1 = new Mango(650, random (280, 260));
	mango2 = new Mango(750, random (280, 120));
	mango3 = new Mango(850, random (280, 140));
	mango4 = new Mango(random (740, 900), 120);
	mango5 = new Mango(950, random(280, 130));
	mango6 = new Mango(1050, random (280, 180));

	Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0);

  ground.display();
  tree.display();
  boy.display();

  stone.display();
  sling.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  isTouching(stone, mango1);
  isTouching(stone, mango2);
  isTouching(stone, mango3);
  isTouching(stone, mango4);
  isTouching(stone, mango5);
  isTouching(stone, mango6);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function isTouching(stoneObject, mangoObject){
	var stonePos = stoneObject.body.position;
	var mangoPos = mangoObject.body.position;
   
	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	console.log(distance);
   
	if(distance <= stoneObject.radius + mangoObject.radius){
		Matter.Body.setStatic(mangoObject.body, false);
	}
   }

function keyPressed(){
	if(keyCode == 32){
		sling.attach(stone.body);
	}
}