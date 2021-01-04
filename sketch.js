// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;

// var umbrella, uimage;
// var drops, dropi;
// var createDrop = [];
// var Timage1, Timage2, Timage3, Timage4;
// var thunderbolt;
// var engine,world;

// function preload(){
//     uimage = loadAnimation(
//         "Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png", "Walking Frame/walking_4.png",
//         "Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png", "Walking Frame/walking_8.png"
//     )
//     Timage1 = loadImage("thunderbolt/1.png");
//     Timage2 = loadImage("thunderbolt/2.png");
//     Timage3 = loadImage("thunderbolt/3.png");
//     Timage4 = loadImage("thunderbolt/4.png");
    
//     dropi = loadImage("drops.png");
// }

// function setup(){
//    var C = createCanvas(500, 1000);
//    engine = Engine.create();
//    world = engine.world;
// }

// function draw(){
//     background("black");
//     Engine.update(engine);
//     thunderbolts();
//     drop();
//     umbrellaf();
// }   
// function thunderbolts(){
    
//     thunderbolt = createSprite();
//     var rand = Math.round(random(10,12));
//     switch(rand){
//         case 1: thunderbolt.addimage(Timage1);
//         break;
//         case 2: thunderbolt.addimage(Timage2);
//         break;
//         case 3: thunderbolt.addimage(Timage3);
//         break;
//         case 4: thunderbolt.addimage(Timage4);
//     }
// }
// function drop(){
//     if(frameCount % 60 === 0){
//          var drops = new Drops();
//     drops.y = Math.round(random(80,120));
//     drops.addImage(dropi);
//     drops.scale = 0.5;
//     drops.velocityX = -3;
//     drops.lifetime = 200;
    
//     //adjust the depth
//     drops.depth = umbrella.depth;
//     umbrella.depth = umbrella.depth + 1;

//     var Maxdrops = 100;

//     for(var i=0; i>Maxdrops; i++){
//      drops.push(new createDrop(random(0,400), random(0, 400)));
//     }
//     }
// }
// function umbrellaf(){
//     umbrella = new Umbrella();
//     umbrella.addAnimation("walking",uimage);
   
// }
// function keyPressed(){
//     if(keyCode === UP_ARROW){
//         umbrella.velocityX = 1;
//     }
// }
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   