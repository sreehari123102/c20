function setup() {
  createCanvas(800,400);
wall =createSprite(200, 200, 50, 80);
wall.shapeColor="Purple";
car= createSprite(400,200,80,50)
car.shapeColor="Purple";
}
function draw() {
  background(255,255,255);  
  car.x=World.mouseX;
  car.y=World.mouseY;
  if(car.x-wall.x<wall.width/2+car.width/2
    &&wall.x-car.x<wall.width/2+car.width/2
    &&car.y-wall.y<wall.height/2+car.height/2
    &&wall.y-car.y<wall.height/2+car.height/2 )
  {
car.shapeColor="red"
wall.shapeColor="red"
  }
  else{
    car.shapeColor="purple"
    wall.shapeColor="purple"
  }
  drawSprites();
}