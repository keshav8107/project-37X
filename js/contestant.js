class Contestant {
    constructor(){
      this.index=null;
      this.answer=0
      this.name=null
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
  static getContestantinfo(){
    var contestantinforef=database.ref('players')
    contestantinforef.on("value",(data)=>{
      allContestant=data.val()
    })
    
  }
}
  