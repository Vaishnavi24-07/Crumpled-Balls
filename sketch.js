
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var groundObj, rightSide;


function preload() {

}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700, 600, 20, 120);
	groundObj = new Ground(width / 2, 670, width, 20);
	rightSide = new Ground(900, 600, 20, 120);

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(100, 100, 20, ball_options);
	World.add(world, ball);
	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {

	background(226, 159, 246);

	fill(246, 183, 3);
	ellipse(ball.position.x, ball.position.y, 20)

	//fill(181, 229, 166);
	ground.show();
	groundObj.show();
	rightSide.show();

	Engine.update(engine)



	//groundObj.display();


	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, { x: 75, y: -75 });
	}
}