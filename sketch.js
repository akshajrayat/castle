const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,gro;
function setup() {
 createCanvas(800,400); 

 engine = Engine.create();
 world = engine.world;

 box1 = new BaseClass(250,200,50,250);
 box2 = new BaseClass(550,200,50,250);
 box3 = new BaseClass(300,200,50,200);
 box4 = new BaseClass(350,200,50,180);
 box5 = new BaseClass(400,200,50,120);
 box6 = new BaseClass(450,200,50,180);
 box7 = new BaseClass(500,200,50,200);
 box8 = new BaseClass(250,100,120,30);
 box9 = new BaseClass(550,100,120,30);
// box10 = new BaseClass(50,150,20,20);
 //box11 = new BaseClass(550,100,10,10);
 //box12 = new BaseClass(550,100,10,10);
 //box13 = new BaseClass(550,100,10,10);
 gro = new ground(400,390,700,10);
}

function draw() {
  background(225,225,225); 
  Engine.update(engine);
  box1.display(); 
  gro.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
//  box10.display();
}