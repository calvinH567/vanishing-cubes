const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world,ballIMG
var slingReleased = 0;
function preload(){
ballIMG  = loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1000,500)
    engine = Engine.create()
    world = engine.world;

    
   
    //layer1
    block1 = new Block(200,200,1,1);
    block2 = new Block(300,200,1,1);
    block3 = new Block(250,200,1,1);
    block4 = new Block(350,200,1,1);
    block5 = new Block(400,200,1,1);

    //layer2
    block6 = new Block(225,100,1,1);
    block7 = new Block(325,100,1,1);
    block8 = new Block(275,100,1,1);
    block9 = new Block(375,100,1,1);

    //layer3
    block12 = new Block(250,0,1,1);
    block10 = new Block(300,0,1,1);
    block11 = new Block(350,0,1,1);

    ball = Bodies.circle(50,400,20);
    World.add(world,ball);

    ground1 = new Ground(500,500,1000,100);

    base = new Ground(200,400,500,100);

    sling = new rope(this.ball,{x:50, y:50});
    
}

function draw(){
    Engine.update(engine)
    background(220);
    ground1.display();
    block1.display();
    base.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    
    sling.display();
    image(ballIMG,ball.position.x,ball.position.y,20,20)
    text("Drag the hexagonal stone, and then release it",200,250);
    
}
function mouseDragged(){
    if(slingReleased == 0){
        Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
    }
    
    
}
function mouseReleased(){
if(slingReleased ==0){
    sling.fly();
}
}