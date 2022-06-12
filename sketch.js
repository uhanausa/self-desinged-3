var player
var playerImg
var rock
var rockImg
var ground

function preload(){
playerImg = loadImage("kangaroo.png")
rockImg = loadImage("rock.jpg")
}

function setup() 
{
  createCanvas(400,400);
  player = createSprite(20,380,10,10)
  player.addImage("player",playerImg)
  player.scale = 0.1
  player.y = 380

  ground = createSprite(200,380,400,20)
  ground.visible = false
}

function draw() 
{
background("white");

if(keyDown("space")){
  player.velocityY = -8
}

player.velocityY = player.velocityY + 0.5
player.collide(ground)

createRock()
drawSprites()
}

function createRock(){
  if (frameCount %60 == 0){
    rock = createSprite(400,360,10,10)
    rock.addImage("rock",rockImg)
    rock.scale = 0.1
    rock.velocityX = -3
  }
}