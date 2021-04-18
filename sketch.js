var bg,bg_Img;
var r,r_Img;
var a,a_Img;
var aG;
var sound;
var gameState = "PLAY";
function preload(){
  bg_Img = loadImage("space1.jpg");
  r_Img = loadImage("rock-removebg-preview-1.png");
  a_Img = loadImage("aster.png");
  
}

function setup(){
  createSprite(windowWidth,windowHeight);
  bg= createSprite(0,0);
  bg.addImage(bg_Img);
  bg.scale = 1.5;
  bg.velocityY = 9;
  
  r = createSprite(width-200,height-170);
  r.addImage(r_Img);
  r.scale = 0.3;
  
 aG=new Group();
 
  aG.debug = true;
}
function draw(){
if (gameState === "PLAY"){
  if(bg.y > width ){
    bg.y = width/6;
  }
 r.x = World.mouseX
  if (aG.isTouching(r)){
  gameState = "END";
   
 }
}
  
  
 
  
  spawna();
  drawSprites();
  if (gameState === "END"){
    
  fill("blue");
   text("Game Over",width-100,height-200);
    a.velocityY = 0;
    a.destroyEach();
    r.destroy();
  }
}
function spawna(){
   if (frameCount % 100 === 0){
    a = createSprite(0,0);
    a.addImage(a_Img);
    a.x = Math.round(random(120,500));
    a.velocityY=4;
    a.lifetime =150;
     a.scale = 1.5;
      aG.add(a);
     
     aG.depth = r.depth;
    r.depth = aG.depth + 1;
   }
}
 
    
