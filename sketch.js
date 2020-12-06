var car, wall;
var weight,speed;

function setup() {
  createCanvas(1000,400);
  
  speed = random(55,90);
  console.log(speed);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(900,200,60,200);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background("black");  

  if (isTouching(car,wall)){
    deformationCalculator(car,wall);
  }
  drawSprites();
}

function isTouching(carObject,wallObject){
  if (carObject.x - wallObject.x < carObject.width/2 + wallObject.width/2 &&
    wallObject.x - carObject.x < carObject.width/2 + wallObject.width/2){
      return true;
    }
  else {
    return false;
  }

}

function deformationCalculator(carObject,wallObject){
  car.velocityX = 0;
  var deformation = (0.5*weight*speed*speed)/22500;

  //console.log(deformation);
  if (deformation < 100){
    car.shapeColor = color(0,255,0);
  }
  else if (deformation > 100 && deformation < 180) {
    car.shapeColor = color(230,230,0);
  }
  else if (deformation >180){
    car.shapeColor = color(255,0,0);
  }

}