var img, y =0//bg_img;
var s1_home,database;
var navWindow = "welcome"
var ty = ["welcome","play","account","setting","shop","sp","mp","join","create","allHide"]

var opWindow = "welcome"
var op = ["welcome","play","account","setting","shop"]

var isEditClick = false;

var num = 0

var coins = 158, highScore = 0;

var isProClick = false;
var gameV

var player,sp,mp,fp

var times = 0,timesExe = 0;

var SPplaying = false;
var MPplaying = false;
var Fplaying = false;
var isSPclicked = false;
var isMPclicked = false;

var playerSP,scoreSP;

var playerCharSP, playerCharSP_IMG

var obsAlien1_img
var obsAlien2_img

var obs1,obs2

var obsGroup1,obsGroup2

var coin,coinGroup,coinImg
var icy,icyGroup,icyImg
var platform,platformImg,platformGroup
var loadingVal = 0

var rect1,rect2

var exlevelData = [{p_tn:0,l_tn:0}]

var s = 0

function preload(){
    img = loadImage("ea_ccexpress.jpeg")
    //bg_img = loadImage("Mountain.png")
    playerCharSP_IMG = loadImage("char-orange.png")
    obsAlien1_img = loadImage("pixlr-bg-result.png")
    obsAlien2_img = loadImage("alien-clipart-red-7.png")
    coinImg = loadImage("coin.png")
    icyImg = loadImage("icy.png")
    platformImg = loadImage("platform.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    s1_home = new NewNavigate("orange.png");

    player = new Player()
    sp = new SPGame()
    

    //game = new Game();
    //game.getState();
    //background(bg_img);

    //exlevelData.splice(1,0,{})
    var rtx = 2;
    window.rtx = rtx //

    //exlevelData.splice(exlevelData.length+1,0,{level:0,type:1})

    
   
      
}
function draw(){

    number()
    

    if((gameV!=null||gameV!=undefined)&&times==0){
       update(gameV+1)
       player.name = "player"+gameV //local saving
       player.index = gameV //local saving
       player.addPlayer(gameV) //saving in database
       times +=1; 
      // console.log(gameV,player);
    }

    s1_home.display("Om prakash Behera",isEditClick,coins,highScore,gameV);
    s1_home.toggleNav(isEditClick);

    // /

    console.log(exlevelData)

    

    


    //console.log(SPplaying,MPplaying,Fplaying,isSPclicked,isMPclicked)

    /*if(isSPclicked == true&loadingVal<width/2-8){
       // console.log(loadingVal);
        loadingVal = loadingVal+5
        loadIcon()
        if(loadingVal ==width/2-8&&timesExe ==0){
            sp.startSP()
            timesExe = timesExe +1
            console.log("working")
            rect1.noFill()

        }
        
    }*/

    if(keyIsDown(UP_ARROW)){

        camera.position.y = camera.position.y - 1;
        y = y -1;
        console.log("op")
        //platformGroup.removeSprites()
        
    }
    if(keyIsDown(DOWN_ARROW)&&(y<0)){

        camera.position.y = camera.position.y + 1;
        y = y +1;
        
    }

    if(isSPclicked == true){
        
        if(timesExe ==0){
            timesExe = timesExe +1;
            sp.startSP();
        }
        image(img,0, -height * 5, width, height * 6);
        drawSprites()
       // console.log("what val"+s)
        sp.addPlatforms(exlevelData,platformGroup,s,Math.round(random(1,4)))
        
        
        
    }
    

    




    //image(img,0, -height * 5, width, height * 6);
    

    
    

   
    

    //console.log(navWindow,opWindow,isEditClick)

}

function number() {
    var gameStateRef = database.ref("visits");
    gameStateRef.on("value", function(data) {
      gameV = data.val();
    });
}

function update(state) {
    database.ref("/").update({
      visits: state
    });
}
/*
function loadIcon(){
        push();
        //image(platformImg, width / 2 - 130, height /2, 20, 20);
        strokeWeight(8)
        stroke("black");
        fill("white");
        rect1 = rect(width / 4, height /2 , width/2, 65);

        strokeWeight(0)
        stroke("green");
        fill("green");
        rect2 = rect(width / 4+4, height /2+4, loadingVal, 58);
        pop();
}*/
