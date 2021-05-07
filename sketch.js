var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var move = 0;
var database,over;

var form, player, game;

var cars, car1, car2, car3, car4,award,arrow1,arrow2,arrow3,arrow4,arrow5;

function preload(){
  track = loadImage("track.png")
  car1Img = loadImage("P1.png")
  car2Img = loadImage("P2.png")
  car3Img = loadImage("P3.png")
  car4Img = loadImage("P4.png")
  // strip1 
  tr = loadImage("tr.png")
  oi = loadImage("over.jpg")
  ar = loadImage("right.png")
  
}

function setup(){
  canvas = createCanvas(displayWidth-100, displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
     fill("black")
     
     game.end();
  }
}
