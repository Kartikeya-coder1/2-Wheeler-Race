class Game {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    arrow1 = createSprite(500,600,100,100)
    arrow1.addImage(ar)
    arrow1.scale = 0.2
    // arrow1.depth = 
    arrow2 = createSprite(1400,600,100,100)
    arrow2.addImage(ar)
    arrow2.scale = 0.2
    arrow3 = createSprite(2300,600,100,100)
    arrow3.addImage(ar)
    arrow3.scale = 0.2
    arrow4 = createSprite(3200,600,100,100)
    arrow4.addImage(ar)
    arrow4.scale = 0.2
    arrow5 = createSprite(4100,600,100,100)
    arrow5.addImage(ar)
    arrow5.scale = 0.2
    car1 = createSprite(10,100);
    car1.addImage(car1Img)
    car1.scale = 0.7

    car2 = createSprite(10,300);
    car2.addImage(car2Img)
    car2.scale = 0.3

    car3 = createSprite(10,500);
      car3.addImage(car3Img)
    car3.scale = 0.35
 
    car4 = createSprite(10,700);
    car4.addImage(car4Img)
    car4.scale = 0.15

    award = createSprite(4500,600,100,100);
    award.addImage(tr)
    arrow1 = createSprite(4500,600,100,100)
    arrow1.addImage(ar)
    arrow1.scale = 0.2
    cars = [car1,car2,car3,car4] // [ car2];

   
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("brown")
      
      image(track,0,0,displayWidth*2,displayHeight/2)
      // image.scale(x:2,y:3)
      
      
      var index = 0;


     
      var x ;

      var y = 200;
      


      for(var plr in allPlayers){
       
        index = index + 1 ;

       
        y = y + 200;
       
        x = displayWidth + allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        

        if (index === player.index){
         
          cars[index - 1].shapeColor = "red";
          camera.position.y = displayHeight/2+350;
          camera.position.x = cars[index-1].x
          }
       
      
      }
      
    
  }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    

    if(player.distance>3570){
      gameState = 2;

     
      background(oi)
      game.end();
     
        }
       
    drawSprites();
  }

    end(){
      console.log("GAME ENDED!")
      // console.log("YOU ARE FIRST!")
    }
    }
