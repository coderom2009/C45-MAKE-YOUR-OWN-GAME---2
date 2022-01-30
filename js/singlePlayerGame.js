class SPGame{
    constructor(){
        this.score= 0
        this.name = null
        this.positionX = 0
        this.positionY = 0
        this.index = 0;
    }

    startSP(){
        playerSP = new Player();
        //scoreSP = playerSP.getScore();
        playerCharSP = createSprite(windowWidth/2,windowHeight-windowHeight/4,75,75)
        playerCharSP.addImage(playerCharSP_IMG)
        playerCharSP.scale = 0.35
        //obsGroup1 = new Group();
        //this.addSprites(obsGroup1,15,obsAlien1_img,0.5)
        //obsGroup2 = new Group();
        //this.addSprites(obsGroup2,10,obsAlien2_img,0.7)
        //coinGroup = new Group();
        //this.addSprites(coinGroup,25,coinImg,0.9)
        //icyGroup = new Group();
        //this.addSprites(icyGroup,6,icyImg,0.8)
        //platformGroup = new Group();
        //this.addSprites(platformGroup,60,platformImg,0.6) //pos

        //platform creation//
        
        
    }

    addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
        for (var i = 0; i < numberOfSprites; i++){
          var x, y;
    
          //C41 //SA
          if (positions.length > 0) {
            x = positions[i].x;
            y = positions[i].y;
            spriteImage = positions[i].image;
          } else {
            x = random(width / 2 + 150, width / 2 - 150);
            y = random(-height * 4.5, height - 400);
          }
          var sprite = createSprite(x, y);
          sprite.addImage("sprite", spriteImage);
    
          sprite.scale = scale;
          spriteGroup.add(sprite);
        }
    }

    addPlatforms(arr,spriteG,so,rand){
      var platformsCreated = arr[0].p_tn;
      var levelsCreated = arr[0].l_tn;
      //var o = frameCount;
      //var highestY_tn
      var x,y
      
      if(frameCount%30 == 0){
        //var rand = Math.round(random(1,4))
        
        if(so == rand){
          console.log("same no...");
        }else{
          switch(rand){
            case 1:console.log("1"),so = 1;
            break;
    
            case 2:console.log("2"),so = 2;
            break;
    
            case 3:console.log("3"),so = 3;
            break;
    
            case 4:console.log("4"),so = 4;
            break;
    
            default: break;
          }
          so=rand
          s=so
          //start
          if(so == 3){
            
          }


        }
        
        
        //console.log(canExe)
      }
       
        
      
      
      

    }
  
}