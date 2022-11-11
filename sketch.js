var gameState = "Level1";

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;


function preload(){
  mclarenImg = loadImage("Mclaren.png")
  lamboImg = loadImage("Lambo.png")
  porscheImg = loadImage("Porsche.png")
  bentlyImg = loadImage("Bentley.png")
  
  bgImage = loadImage("Background.png");
  bg1Img= loadImage("Background1.png")
  bg2Img= loadImage("Background2.png")
bg3Img= loadImage("Background3.png")
  
  fuelImg = loadImage("Fuel.png");
  
  tyreImg = loadImage("Tyre.png");
  boxImg = loadImage("Box.png")
 barricadeImg= loadImage("Barricade.png")
  coneImg= loadImage("Cone.png")
 
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
 // winImg = loadImage("win.png")
// finishImg = loadImage("Finish.png")
}

function setup() {
  createCanvas(600, 200);
  
  
  ground = createSprite(300,100,400,20);
  ground.addImage("level1",bgImage);
  ground.addImage("level2",bg1Img);
  ground.addImage("level3",bg2Img);
  ground.addImage("level4",bg3Img);
  ground.scale=1.3
  ground.x = ground.width /2;
  ground.velocityX = -6
  

  finish = createSprite(600,175,100,100 )
  //finish.addImage(finishImg)
  finish.scale = 0.3
  finish.visible = false

  mclaren = createSprite(50,180,20,50);
  mclaren.setCollider("rectangle",0,0,200,mclaren.height);
  
  mclaren.addImage("level1",mclarenImg)
  mclaren.addImage("level2",lamboImg)
  mclaren.addImage("level3",porscheImg)
  mclaren.addImage("level4",bentlyImg)
    mclaren.scale = 0.5;
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  fuelGroup = new Group();
  tyreGroup = new Group();
  
  score = 0;
}

function draw() {
  //trex.debug = true;
  background(25);
   
  if (gameState==="Level1"){
    mclaren.changeImage("level1")
    ground.changeImage("level1")
    ground.velocityX =-(6+score/10)
    mclaren.scale=0.5
    ground.scale=1.3
    
    
    if(keyDown(UP_ARROW) && mclaren.y >= 159) {
      mclaren.velocityY = -12;
    }
  
    mclaren.velocityY = mclaren.velocityY + 0.8
  
    if (ground.x < 200){
      ground.x = 300;
    }
  
    mclaren.collide(invisibleGround);
    spawnFuel();
    spawnTyre();
    if(fuelGroup.isTouching(mclaren)){
      score = score+10;
      fuelGroup.destroyEach();
  }
  
    /*if(tyreGroup.isTouching(mclaren)){
        gameState = "End";
    }
*/
if(score === 10){
  finish.visible = true
  finish.velocityX = -3
}
if(mclaren.isTouching(finish)){
  finish.x =600;
  finish.velocityX =0;
  finish.visible = false;
  gameState = "Level2"
  mclaren.changeImage("level2")
  ground.changeImage("level2")
  tyreGroup.destroyEach()
  score = 0;
  }
  }
  else if (gameState==="Level2"){
      ground.velocityX =-(7+score/10)
      ground.scale = 2.3
      mclaren.scale = 0.3
      
    
     if(keyDown(UP_ARROW) && mclaren.y >= 159) {
       mclaren.velocityY = -12;
     }
   
     mclaren.velocityY = mclaren.velocityY + 0.8
   
     if (ground.x < 250){
       ground.x = 300;
     }
   
     mclaren.collide(invisibleGround);
     spawnFuel();
     spawnTyre();
     if(fuelGroup.isTouching(mclaren)){
       score = score+10;
       fuelGroup.destroyEach();
   }
   
    /* if(tyreGroup.isTouching(mclaren)){
         gameState = "End";
     }
 */
     if(score === 10){
      finish.visible = true
      finish.velocityX = -3
    }
    if(mclaren.isTouching(finish)){
      finish.x =600;
      finish.velocityX =0;
      finish.visible = false
       gameState = "Level3"
       mclaren.changeImage("level3")
       ground.changeImage("level3")
      tyreGroup.destroyEach()
       score = 0;
   
     }
 
   }
   else if (gameState==="Level3"){
    ground.velocityX =-(7.5+score/10)
    ground.scale = 2.5
    mclaren.scale = 0.5
    finish.visible = false
  
   if(keyDown(UP_ARROW) && mclaren.y >= 159) {
     mclaren.velocityY = -12;
   }
 
   mclaren.velocityY = mclaren.velocityY + 0.8
 
   if (ground.x < 100){
     ground.x = 300;
   }
 
   mclaren.collide(invisibleGround);
   spawnFuel();
   spawnTyre();
   if(fuelGroup.isTouching(mclaren)){
     score = score+10;
     fuelGroup.destroyEach();
 }
 
   /*if(tyreGroup.isTouching(mclaren)){
       gameState = "End";
   }
*/
if(score === 10){
  finish.visible = true
  finish.velocityX = -3
}
if(mclaren.isTouching(finish)){
  finish.x =600;
  finish.velocityX =0;
  finish.visible = false;
     gameState = "Level4"
     mclaren.changeImage("level4")
     ground.changeImage("level4")
     tyreGroup.destroyEach()
     score =0;
   }

 }
 else if (gameState==="Level4"){
  ground.velocityX =-(8+score/10)
  ground.scale = 3.0
  mclaren.scale = 0.5
  finish.visible = false

 if(keyDown(UP_ARROW) && mclaren.y >= 159) {
   mclaren.velocityY = -12;
 }

 mclaren.velocityY = mclaren.velocityY + 0.8

 if (ground.x < 200){
   ground.x = 300;
 }

 mclaren.collide(invisibleGround);
 spawnFuel();
 spawnTyre();
 if(fuelGroup.isTouching(mclaren)){
   score = score+10;
   fuelGroup.destroyEach();
}

 if(tyreGroup.isTouching(mclaren)){
     gameState = "End";
 }

 if(score === 10){
  finish.visible = true
  finish.velocityX = -3
}
if(mclaren.isTouching(finish)){

  finish.destroy()
   gameState = "Win"
  // ground.changeImage(winImg)
   tyreGroup.destroyEach();
  fuelGroup.destroyEach();
  mclaren.destroy();
  restart.visible = true;
  if(mousePressedOver(restart)) {
    reset();
  }
 }

}
else if (gameState === "End") {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    mclaren.velocityY = 0;
    tyreGroup.setVelocityXEach(0);
    fuelGroup.setVelocityXEach(0);
    
    //change the trex animation
   
    
    //set lifetime of the game objects so that they are never destroyed
    tyreGroup.setLifetimeEach(-1);
    fuelGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }
  
  
  drawSprites();
  fill("red")
  text("Score: "+ score, 500,50);
}

function spawnFuel() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var fuel = createSprite(600,120,40,10);
    fuel.y = Math.round(random(120,170));
    fuel.addImage(fuelImg);
    fuel.scale = 0.2;
    fuel.velocityX =-(6+score/10);
    //assign lifetime to the variable
     fuel.lifetime = 200;
 
    //adjust the depth
    fuel.depth = mclaren.depth;
    mclaren.depth = mclaren.depth + 1;
    
    //add each cloud to the group
    fuelGroup.add(fuel);
  }
  
}

function reset(){
  gameState = "Level1";
  gameOver.visible = false;
  restart.visible = false;
  
  tyreGroup.destroyEach();
  fuelGroup.destroyEach();
  score = 0;
}

function spawnTyre() {
  if(gameState === "Level1"){
    x = 80;
    y = 6;
    w=0.3;
    z= tyreImg
  }
  if(gameState === "Level2"){
    x = 70;
    y = 7;
    w=0.3;
    z= boxImg
  }
  if(gameState === "Level3"){
    x = 65;
    y = 7.5;
    w=0.25;
    z= barricadeImg
  }
  if(gameState === "Level4"){
    x = 60;
    y = 8;
    w=0.25;
    z= coneImg
  }
  if(frameCount % x === 0) {
    var tyre = createSprite(600,175,10,40);
    //obstacle.debug = true;
    tyre.velocityX =-(y+score/10)
    tyre.addImage(z);
  //assign scale and lifetime to the obstacle           
    tyre.scale = w;
    tyre.lifetime = 300;
    //add each obstacle to the group
    tyreGroup.add(tyre);
  }
}

