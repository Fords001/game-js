

const player0=document.querySelector('.player0');
const player1=document.querySelector('.player1');

const score0=document.querySelector('.score0');
const score1=document.querySelector('.score1');

const current1=document.querySelector('.current_score0');
const current2=document.querySelector('.current_score1');


const diceEl=document.querySelector('.dice');
const middle_up=document.querySelector('.middle-up');
const middle_center=document.querySelector('.middle-center');
const middle_down=document.querySelector('.middle-down');


let currentScore,activePlayer,scores,playing;

const init =function(){

  
 currentScore=0;
 activePlayer=0;
scores=[0,0];
 playing=true;

  score0.textContent=0;
  score1.textContent=0;
  current1.textContent=0;
  current2.textContent=0;
  diceEl.classList.add('hidden');
  
  player0.classList.remove('player-winner');
  player1.classList.remove('player-winner');
  player0.classList.add('player-active');
  player1.classList.remove('player-active');

}

init();

const switchPlayer=function(){
  document.querySelector(`.current_score${activePlayer}`).textContent=0;
  activePlayer=activePlayer=== 0 ? 1 :0;
  currentScore=0;
 player0.classList.toggle('player-active');
 player1.classList.toggle('player-active');
}

middle_center.addEventListener('click',function(){

  if(playing){

    //1. Generating a random dice roll
    const dice=Math.trunc(Math.random()*6)+1;
    console.log(dice);

    //2. Display dice
    diceEl.classList.remove('hidden');  
    diceEl.src=`images/dice-${dice}.png`;

    // 3.Checked for rolled 1 :if true switch to next player

    if (dice!==1){
      currentScore=currentScore+dice;
      

      document.querySelector(`.current_score${activePlayer}`).textContent=currentScore;
    }
    else{
      
      switchPlayer();
     
    }
  }
});



middle_down.addEventListener('click',function(){

if(playing){

//1.Add current score to active player's score
scores[activePlayer] +=currentScore;

/*scores[1]=scores[1]+currentScore*/
document.querySelector(`.score${activePlayer}`).textContent=scores[activePlayer];

//2.Check if player's score is >=100

if(scores[activePlayer] >= 20){
  playing=false;
  diceEl.classList.add('hidden');

  document.querySelector(`.player${activePlayer}`).classList.add('player-winner');
  document.querySelector(`.player${activePlayer}`).classList.remove('player-active');
}

//finish the game
else{
//switch to the next player
switchPlayer();
}
}
}
);

middle_up.addEventListener('click', init);