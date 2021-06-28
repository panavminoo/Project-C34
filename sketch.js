//Create variable
var database, dog, happyDog,foods, foodStock, hungryDog
function preload()
{
happyDog = loadImage("dogImg1.png");
hungryDog = loadImage("dogImg.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock=database.ref('khaana');
  foodStock.on("value",readStock)
    dog = createSprite(250,250);
    dog.addImage(hungryDog);
    dog.scale = 0.25;
}


function draw() {  
background(46, 139, 87);
textSize(25)
fill("white");
text("food remaining:"+foods, 180,100);
  drawSprites();
  if (keyWentDown(UP_ARROW)&&foods>0){
    writeStock(foods-1);
    dog.addImage(happyDog);
  }
 

}
function readStock(data){
  foods = data.val();
  console.log(foods);
}

function writeStock(data){
  database.ref("/").update({
    khaana:data
  })
  
}


