function setup() {
  createCanvas(1300,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50, 200, 70, 50);
  car.velocityX = speed;
  wall = createSprite(1260, 200, 100,400); 

  car.shapeColor = "blue";
 
  wall.shapeColor = "brown";  
  
}

function draw() {
  background("black"); 
  
  if(wall.x - car.x < (car.width + wall.width)/2)
  { 
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
if (deformation>180){
  car.shapeColor="red";
  
}
if (deformation>100&&deformation<180){
  car.shapeColor="green";
  
}
if (deformation<100){
  car.shapeColor="blue";
  
}

  }
  drawSprites();
}