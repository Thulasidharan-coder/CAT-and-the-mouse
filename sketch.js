var backGround,backGroundImage;
var cat,catImage,catImage2,catCollided;
var rat,ratImage,ratAnimation,ratCollided;

function preload() {
    backGroundImage = loadImage("garden.png");
    catImage = loadAnimation("tomOne.png");
    catImage2 = loadAnimation("tomTwo.png","tomThree.png");
    catCollided = loadAnimation("tomFour.png");
    ratImage = loadAnimation("jerryOne.png");
    ratAnimation = loadAnimation("jerryTwo.png","jerryThree.png");
    ratCollided = loadAnimation("jerryFour.png");
}

function setup() {
    createCanvas(400,400);

    backGround = createSprite(200,200,1000,1000);
    backGround.addImage(backGroundImage);
    backGround.scale = 0.6;
    
    cat = createSprite(350,350,10,10);
    cat.addAnimation("sitting",catImage);
    cat.scale = 0.08;
    cat.debug = false;

    rat = createSprite(50,350,10,10);
    rat.addAnimation("waiting",ratImage);
    rat.scale = 0.06;
    rat.debug = false;
}

function draw() {
    background("red");

    keyPressed();

    if(cat.x - rat.x < (cat.width-rat.width)/2) {
            changeImg();
        }

    drawSprites();
}

function keyPressed() {
    if(keyDown("Left_Arrow")) {
        cat.addAnimation("run",catImage2);
        cat.changeAnimation("run");
        cat.velocityX = -5;
        rat.addAnimation("rn",ratAnimation);
        rat.changeAnimation("rn");
    }
}

function changeImg() {
    cat.velocityX = 0;
    cat.addAnimation("collided",catCollided)
    cat.changeAnimation("collided");
    rat.addAnimation("colided",ratCollided)
    rat.changeAnimation("colided");
}

