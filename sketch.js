//Create variables here
var dog, happyDog, database, foodS, foodStock, dogImg, dog1

function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg1.png")
  dog = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  dog1 = createSprite(250, 250, 50, 50)
  dog1.addImage(dog)
  dog1.scale = 0.3

  foodStock = database.ref('Food')
  foodStock.on("value", readStock)  
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy)
  }

  drawSprites();
  //add styles here
  textSize(30)
  fill("blue")
  stroke(100)
  text("Note:Press UP_ARROW Key to Feed Drago Milk!")

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({Food:x})
}

