var seaImg,sea, shipImg1, ship
function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,0,400,400)
  sea.addImage(seaImg)
  sea.scale = 0.5
  sea.velocityX = -2
  ship = createSprite(200,200)
  ship.addAnimation("move",shipImg1)
  ship.scale = 0.5
}

function draw() {
  background("blue");
  if(sea.x<0){
   sea.x =200
  }
 drawSprites()
}