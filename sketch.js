
function setup() {
 canvas=createCanvas(2000,800);
 ground=createSprite(1000,790,2000,20);
 ground.shapeColor="brown";
 
}

function draw() {
 background("black")
 spawnrain();
 drawSprites();
}
function spawnrain(){
   if( World.frameCount%10==0){
    var r=Math.round(random(2,4))
    var r2=Math.round(random(10,1990))
        rain=createSprite(r2,0,5,40);
        rain.shapeColor="rgb(Math.round(random(0,255),Math.round(random(0,255),Math.round(random(0,255))";
        rain.velocityY=r;
        rain.lifetime=900;
    }
}
