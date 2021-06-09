var starImg,bgImg;
var star, starBody,fairy,fairy_Img,fairy_sound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairy_Img =loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairy_sound=loadSound("sound/JoyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
fairy=createSprite("400,900")
fairy.x=200
fairy.y=550
fairy.addAnimation("fairyImg",fairy_Img)
fairy.scale=0.2
}


function draw() {
  background(bgImg);

  fairy_sound.play()
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  var invisible=createSprite(fairy.x+20,fairy.y,20,20)


  if(star.y>500){
	Matter.Body.setStatic(starBody,true); 
  }
invisible.visible=false
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
if(keyCode=== LEFT_ARROW){
	fairy.x=fairy.x-20

}
if(keyCode=== RIGHT_ARROW){
	fairy.x=fairy.x+20

}
	

}
