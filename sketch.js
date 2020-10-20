var car, wall
var speed, weight

function setup() {
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 20, 20);
  car.velocityX = speed;
  wall = createSprite(1100, 200, 30, height/2);
}

function draw() {
  background(255,255,255);
  car.shapeColor = "black";
    
      if(wall.x - car.x < wall.width/2 + car.width/2)
  {
      car.velocityX = 0
      var deformation = 0.5*speed*width*speed/22500
      if(deformation > 180)
      {
      car.shapeColor = "red";
      }
      if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
      }
      if(deformation < 100){
      car.shapeColor = "green";
      }
      
  }
      
      
  drawSprites();
}