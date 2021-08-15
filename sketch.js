var ship
var sea

function preload(){
ship = addImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea = loadAnimation("sea.png")

}

function setup(){
  createCanvas(400,400);

  // sea output
  sea = createSprite(200,180,200,50);
  sea = addImage("sea.png");
  sea.velocityX = 3;

  // code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  // ship output
  ship = createSprite(50,100,50,100);
  ship.addImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

function draw() {
  background("blue");
 
}