//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImg,happyDogImg;

function preload()
{
  //load images here
  dogImg = loadImage('images/dogImg.png');
  happyDogImg = loadImage('images/dogImg1.png');

}

function setup() {

  database = firebase.database();

  createCanvas(500,500);
  
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.15

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46, 139, 87); 
  //add styles here

  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg);
  }
  drawSprites();
  textSize(13);
  stroke("black");
  fill(255,255,254); 

text("Food Remaiing: "+ foodS,170,200)
text("press up arrowKey to feed drago",130,10);

}

function readStock(data){
foodS = data.val();
}
function writeStock(x){
  if(x <= 0 ){
    x = 0
  }else{
    x = x-1;
  }

database.ref('/').update({
  Food:x
})
}



