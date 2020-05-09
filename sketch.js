const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6
var ground
var hexagon, slingShot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    box1 = new Box(700,320,70,70);
    box2 = new Box(800,250,70,70);
    box3 = new Box(770,320,70,70);
    box4 = new Box(730,250,70,70);
    box5 = new Box(840,320,70,70);
    box6 = new Box(770,180,70,70);
    hexagon = new Hexagon(100,100);
    slingShot = new SlingShot(hexagon.body,{x:200,y:150})
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    
    ground.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
   

    hexagon.display();
    
    slingShot.display();    
}
 
function mouseDragged(){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}