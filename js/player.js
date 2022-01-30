class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.score = 0;
    }

    addPlayer(index){

        
        database.ref("players/player"+index).set({
            name: "players"+index,
            positionX: this.positionX,
            positionY: this.positionY,
            score: this.score,
            index: this.index
        });
        
        
        
    }
}