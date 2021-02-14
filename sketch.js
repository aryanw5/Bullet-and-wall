var wall, thickness;
var bullet, speed, weight

function setup() {
  createCanvas(1600,400);
 

  wall = createSprite(1200, 200, random(22,93), height/2);
  bullet = createSprite(200,200,30,10);
  bullet.shapeColor = "white";
  bullet.velocityX = random(233,351)
}

function draw() {
  background(0,0,0);  

  thickness = random(22,63)
  speed = random(223,351)
  weight = random(23,52)

if(hasCollided(bullet, wall))
bullet.velocityX = 0;
var damage = 0.5 * speed * speed / (thickness * thickness * thickness);

if(damage > 10) {
  wall.shapeColor = color(255,0,0);
}

if(damage < 10) {

  wall.shapeColor=color(0,255,0);
   
  console.log(damage);
  
}

  drawSprites();
}

function hasCollided(lbullet, lwall) {
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x;
 if(bulletRightEdge >= wallLeftEdge)
 {
   return true;
 }
 return false;
}