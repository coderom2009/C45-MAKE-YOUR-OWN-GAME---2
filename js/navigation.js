class NewNavigate{
    constructor(ProfileImg){
        //this.input = createInput("").attribute("placeholder", "Enter your name");
        this.bgImg = createImg("Mountain.png", "game bg");
        this.tittle = createImg("XYU.png","tittle");
        this.line2 = createImg("line.png","line2");
        this.line = createImg("line.png","line");
        this.playButton = createButton("Play");
        this.accountButton = createButton("Account");
        this.settingButton = createButton("Setting");
        this.shopButton = createButton("Shop");
        this.homeButton = createButton("Home");
        
        this.info = createElement("h2");
        this.info.html("version 1.00.22")

        ///////////            home
        this.tittleW = createElement("h1")
        this.tag = createElement("h1")

        ///////////            play
        this.singleP = createButton("Single Player")
        this.joinButton = createButton("Join Button")
        this.createButtons = createButton("Create Button")
        this.randomP = createButton("Random 🌎 Player")

        ///////////            account
        this.gameName = createElement("h2")
        this.gameProfileImg = createImg(ProfileImg,"ProfuleImg")

        this.editName = createButton("✏️");
        this.editName.position(width+600,165)
        this.editName.class("editCheckBDisapper")

        this.doneNaming = createButton("✅");
        this.doneNaming.position(width+600,165)
        this.doneNaming.class("editCheckBDisapper")

        this.coin = createElement("h1")
        this.coin.position(width +600,325)
        this.coin.class("accElemDis")
        this.coin.html("Coins in bank: "+ NaN)

        this.hs = createElement("h1")
        this.hs.position(width -(width*10.5/18),385)
        this.hs.class("accElemDis")
        this.hs.html("HighScore: "+ NaN)

        this.inst = createElement("h5")
        this.inst.position(width+25,height-120)

        this.wn = createButton("What's new ?")
        this.wn.position(width - 65,height-125)
        this.wn.class("whatn")

        this.visitsTillNow = createElement("h6")
        this.visitsTillNow.position(width/4,height-80)
        this.visitsTillNow.class("greeting")
        this.visitsTillNow.html(0)

       // this.joinInput = createInput("").attribute("placeholder", "Enter the code")
       // this.joinInput.position(width /2.25,175)
        //this.joinInput.class("customInput")

        //this.homeInP = createImg("home.png","homeP");
        //this.homeInP.position(width-90,90) //aded home

        

        
        

       
        
    }
    
      

  display(name,isEditClicked,coin,highS,numT){
        //this.setElementsPosition()
        //this.setElementsStyle()

        if(navWindow=="welcome"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,200);
          this.accountButton.position(40,325);
          this.settingButton.position(40,450);
          this.shopButton .position(40,575);
          this.homeButton.position(-300,200);
          this.info.position(width -(width*7.5/18), height / 1 - 60);
          
          

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////////////////navigation
          ////////////////options

          this.tittleW.position(width -(width*12/18),100)
            this.tittleW.html("Welcome to Reaching Infinity")
            this.tittleW.class("tittleText")

            this.tag.position(width -(width*8.79/18),340)
            this.tag.html("a 2d platformer game")
            this.tag.class("tag")

            this.singleP.position(windowWidth+600,120)
            this.singleP.class("roundButton")

            this.joinButton.position(windowWidth+600,280)
            this.joinButton.class("smallButton")

            this.createButtons.position(windowWidth+600,280)
            this.createButtons.class("smallButton")

            this.randomP.position(windowWidth+600,440)

            this.gameName.html(name);
            this.gameName.position(width +600,20) //width -(width*10/18) width -(width*7.5/18)
            this.gameName.class("nameDis")

            this.gameProfileImg.position(width-95,20)
            this.gameProfileImg.class("profileImgS")

            this.editName.position(width+100,165)
            this.editName.class("editCheckBDisapper")

            this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

            if(isEditClicked == true){
              this.doneNaming.position(width-150,165)
              this.doneNaming.class("editCheckBDisapper")
            }else{
              this.doneNaming.position(width+100,165)
              this.doneNaming.class("editCheckBDisapper")
            }

            this.coin.position(width +10,325)
            this.coin.class("accElemDis")
            this.coin.html("Coins in bank: "+ coin +"🪙")

            this.hs.position(width +10,385)
            this.hs.class("accElemDis")
            this.hs.html("HighScore: "+ highS)

            this.gameProfileImg.mousePressed(() => {
              navWindow = ty[2]
              isEditClick = false;
            });

            this.inst.position(width+25,height-120)
            this.inst.html("")
            this.inst.class("")

         
          this.wn.position(width -65,height-125)
          this.wn.class("whatn")

          this.visitsTillNow.position(width/4+40,height-100)
          this.visitsTillNow.class("greeting")

          if(numT!=undefined){
            this.visitsTillNow.html("Visits: "+numT)
          }else{
            this.visitsTillNow.html("Visits: "+0)
          }
          

        }else if(navWindow=="play"){

            this.bgImg.position(-10,-5);
            this.tittle.position(0,0);
            this.line2.position(windowWidth/8-187,-275)
            this.line.position(windowWidth/4+10,-15);
            // this.input.position(width / 2 - 110, height / 2 - 80);
            this.playButton.position(-400,200);
            this.accountButton.position(40,325);
            this.settingButton.position(40,450);
            this.shopButton .position(40,575);
            this.homeButton.position(40,200);
            this.info.position(width -(width*7.5/18), height / 1 +60);

          /////

            this.bgImg.class("gameBG");
            this.tittle.class("tittle")
            this.line2.class("bottom");
            this.line.class("rotate");
            //this.input.class("customInput");
            this.playButton.class("customButton");
            this.settingButton.class("customButton")
            this.accountButton.class("customButton");
            this.shopButton.class("customButton"); 
            this.homeButton.class("customButton")
            this.info.class("greeting");

          ////////////////navigation
          ////////////////options
            this.tittleW.position(width -(width*12/18),100)
            this.tittleW.html("Welcome to Reaching Infinity")
            this.tittleW.class("tittleTextDis")

            this.tag.position(width -(width*8.79/18),340)
            this.tag.html("a 2d platformer game")
            this.tag.class("tagDis")

            this.singleP.position(windowWidth/2-67,120)
            this.singleP.class("roundButton")

            this.joinButton.position(windowWidth/2-100,280)
            this.joinButton.class("smallButton")

            this.createButtons.position(windowWidth/2+275,280)
            this.createButtons.class("smallButton")

            this.randomP.position(windowWidth/2-67,440)
            this.randomP.class("roundButton")

            this.gameName.html(name);
            this.gameName.position(width +600,120)
            this.gameName.class("nameDis")

            this.gameProfileImg.position(width-95,20) 
            this.gameProfileImg.class("profileImgS")

            this.editName.position(width+100,165)
            this.editName.class("editCheckBDisapper")

            this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

            this.coin.position(width +600,325)
            this.coin.class("accElemDis")
            this.coin.html("Coins in bank: "+ coin +"🪙")

            this.hs.position(width +10,385)
            this.hs.class("accElemDis")
            this.hs.html("HighScore: "+ highS)

            this.gameProfileImg.mousePressed(() => {
              navWindow = ty[2]
              isEditClick = false;
            });

            this.inst.position(width/4+50,height-140)
            //this.inst.html("Play: For playing the game. Account: For changing your character and name. And also for seeing Highscore and Coins. Setting: For changing volume and platform color. Shop: For buying power-ups and character")
            this.inst.html("")
            this.inst.class("instruc")


          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")

          this.visitsTillNow.position(width/4+40,height+50)
          this.visitsTillNow.class("greeting")

          
          
        }else if(navWindow=="account"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,200);
          this.accountButton.position(-300,325);
          this.settingButton.position(40,450);
          this.shopButton .position(40,575);
          this.homeButton.position(40,325);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");


          ////////////////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width -(width*7.5/18),120)  //            this.gameName.position(width -(width*5/18),120)
          this.gameName.class("name")

          this.gameProfileImg.position(width -(width*10/18),120) //width -(width*10/18) width -(width*7.5/18)
          this.gameProfileImg.class("profileImg")

          this.editName.position(width-150,165)
          this.editName.class("editCheckB")

          this.doneNaming.position(width-150,165)
          this.doneNaming.class("editCheckB")

          if(isEditClicked == true){
            this.doneNaming.position(width-150,165)
            this.doneNaming.class("editCheckB")
            this.editName.position(width+100,165)
            this.editName.class("editCheckBDisapper")
          }else{
            this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")
            this.editName.position(width-150,165)
            this.editName.class("editCheckB")
          }

          this.coin.position(width -(width*10.5/18),325)
          this.coin.class("accElem")
          this.coin.html("Coins in bank: "+ coin +"🪙")

          this.hs.position(width -(width*10.5/18),385)
          this.hs.class("accElem")
          this.hs.html("HighScore: "+ highS)  

          this.gameProfileImg.mousePressed(() => {
           // navWindow = ty[2]
            isEditClick = isEditClicked;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")  

          

          
        }else if(navWindow=="setting"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,200);
          this.accountButton.position(40,325);
          this.settingButton.position(-300,450);
          this.shopButton .position(40,575);
          this.homeButton.position(40,450);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////////////////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
            this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)  

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")  

          
        }else if(navWindow=="shop"){
          
          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,200);
          this.accountButton.position(40,325);
          this.settingButton.position(40,450);
          this.shopButton .position(-300,575);
          this.homeButton.position(40,575);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////////////////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")  


        }else if(navWindow == "sp"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,200);
          this.accountButton.position(40,325);
          this.settingButton.position(40,450);
          this.shopButton .position(40,575);
          this.homeButton.position(-300,200);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")
          

        }else if(navWindow == "mp"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,200);
          this.accountButton.position(40,325);
          this.settingButton.position(40,450);
          this.shopButton .position(40,575);
          this.homeButton.position(-300,200);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")
          

        }else if(navWindow == "join"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,200);
          this.accountButton.position(40,325);
          this.settingButton.position(40,450);
          this.shopButton .position(40,575);
          this.homeButton.position(-300,200);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")
          

        }else if(navWindow == "create"){

          this.bgImg.position(-10,-5);
          this.tittle.position(0,0);
          this.line2.position(windowWidth/8-187,-275)
          this.line.position(windowWidth/4+10,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(40,200);
          this.accountButton.position(40,325);
          this.settingButton.position(40,450);
          this.shopButton .position(40,575);
          this.homeButton.position(-300,200);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBG");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width-95,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")
          

        }else if(navWindow == "allHide"){

          this.bgImg.position(-width-10,-height-10);
          this.tittle.position(-500,0);
          this.line2.position(-500,-275)
          this.line.position(-500,-15);
          // this.input.position(width / 2 - 110, height / 2 - 80);
          this.playButton.position(-300,200);
          this.accountButton.position(-300,325);
          this.settingButton.position(-300,450);
          this.shopButton .position(-300,575);
          this.homeButton.position(-300,200);
          this.info.position(width -(width*7.5/18), height / 1 +60);

        /////

          this.bgImg.class("gameBGplaying");
          this.tittle.class("tittle")
          this.line2.class("bottom");
          this.line.class("rotate");
          //this.input.class("customInput");
          this.playButton.class("customButton");
          this.settingButton.class("customButton")
          this.accountButton.class("customButton");
          this.shopButton.class("customButton"); 
          this.homeButton.class("customButton")
          this.info.class("greeting");

          ////navigation
          ////////////////options
          this.tittleW.position(width -(width*12/18),100)
          this.tittleW.html("Welcome to Reaching Infinity")
          this.tittleW.class("tittleTextDis")

          this.tag.position(width -(width*8.79/18),340)
          this.tag.html("a 2d platformer game")
          this.tag.class("tagDis")

          this.singleP.position(width + 600,120)
          this.singleP.class("roundButton")

          this.joinButton.position(width + 600,280)
          this.joinButton.class("smallButton")

          this.createButtons.position(width + 600,280)
          this.createButtons.class("smallButton")

          this.randomP.position(width + 600,440)
          this.randomP.class("roundButton")

          this.gameName.html(name);
          this.gameName.position(width +600,120)
          this.gameName.class("nameDis")

          this.gameProfileImg.position(width+10,20) 
          this.gameProfileImg.class("profileImgS")

          this.editName.position(width+100,165)
          this.editName.class("editCheckBDisapper")  

          this.doneNaming.position(width+100,165)
            this.doneNaming.class("editCheckBDisapper")

          this.coin.position(width +600,325)
          this.coin.class("accElemDis")
          this.coin.html("Coins in bank: "+ coin +"🪙")  ///shop should display coins after

          this.hs.position(width +10,385)
          this.hs.class("accElemDis")
          this.hs.html("HighScore: "+ highS)    

          this.gameProfileImg.mousePressed(() => {
            navWindow = ty[2]
            isEditClick = false;
          });

          this.inst.position(width/4+50,height-140)
            this.inst.html("")
            this.inst.class("instruc")

          this.wn.position(width + 65,height-125)
          this.wn.class("whatn")
          

        }
        

  }

  toggleNav(){

    this.playButton.mousePressed(() => {
      navWindow = ty[1]
      isEditClick = false;
      Fplaying = false;
      isSPclicked = false
      isMPclicked = false
    });

    this.accountButton.mousePressed(() => {
      navWindow = ty[2]
      isEditClick = false;
      Fplaying = false;
      isSPclicked = false
      isMPclicked = false
    });

    this.settingButton.mousePressed(() => {
      navWindow = ty[3]
      isEditClick = false;
      Fplaying = false;
      isSPclicked = false
      isMPclicked = false
    });

    this.shopButton.mousePressed(() => {
      navWindow = ty[4]
      isEditClick = false;
      Fplaying = false;
      isSPclicked = false
      isMPclicked = false
    });

    this.homeButton.mousePressed(() => {
      navWindow = ty[0]
      isEditClick = false;
      Fplaying = false;
      isSPclicked = false
      isMPclicked = false
    });

    this.editName.mousePressed(() => {
      isEditClick = true;
    });

    this.doneNaming.mousePressed(() => {
      isEditClick = false;
    });

    this.singleP.mousePressed(() =>{
      navWindow = ty[9]
      isSPclicked = true
    })

    this.randomP.mousePressed(() =>{
      navWindow = ty[9]
      isMPclicked = true
    });

    this.joinButton.mousePressed(() =>{
      navWindow = ty[7]
      Fplaying = true;
      
    })

    this.createButtons.mousePressed(() =>{
      navWindow = ty[8]
      Fplaying = true
    })

  }

  

  
  
}