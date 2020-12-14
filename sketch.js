var bullet,wall,speed,weight,damage,thickness;

function setup() {
  createCanvas(1600,400);

  //variables speed and weight
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  //creating car and wall
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);


}

function draw() {
  background("black");
  
  //detecting wether the car is touching the wall or not
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;

    //calculating deformation
 damage=0.5*weight*speed*speed/thickness*thickness*thickness;
 console.log(damage);

   if(damage>10){
     bullet.shapeColor="red";
   }
   if(damage<10){
     bullet.shapeColor="green";
   }
  }
  drawSprites();
}

function hasCollided(ibullet,iwall){
  bulletRightEdge=ibullet.x+ibullet.width;
  wallLeftEdge=iwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
  
}