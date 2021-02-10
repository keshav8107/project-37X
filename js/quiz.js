class Quiz {
    constructor(){}
    
    getState(){
      var GameStateRef  = database.ref('gameState');
      GameStateRef.on("value",function(data){
         GameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        GameState: state
      });
    }
  
    async start(){
      if(GameState === 0){
        contestant = new contestant();
  
        var contestantCountref=await database.ref('contestantCount').once("value")
        if(contestantCountref.exists()){
          contestantCount=contestantCountref.val()
          contestant.getCount();
        }
        
       
        form = new Form()
        form.display();
      }
    }
    play(){
      question.hide();
      background("Yellow");
      fill(0);
      textSize(30);
      text("Result of the quiz",340,50);
      text("--------------------------------",320,65);
      Contestant.getPlayerInfo();
      if(allContestant!==undefined){
        debugger;
        var display_Answers=230;
        fill("Blue");
        textSize(20);
        text("*NOTE: Contestant who answered correct are highlighted in green color!",130,20);
        for(var plr in allContestant){
          debugger;
          var correctAns="3";
          if(correctAns === allContestant[plr].answer){
            fill("Green");
          }
          else
          fill("red");
          display_Answers+=30;
          textSize(20);
          text(allContestant[plr].name+": "+allContestantg[plr].answer,250,display_Answers)
        
      
    
        }
      }
    }
}