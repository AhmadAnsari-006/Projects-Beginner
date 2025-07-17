let score= JSON.parse(localStorage.getItem('score')) ||{
    Win:0,
    Lose:0,
    Tie:0
};
update_score_element();
let isAutoPlaying=false;
let intervalId;

//const autoplay= ()=>{}};

function autoplay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove=pick_computer_move();
      play_game(playerMove);
    },1000);
    change_mode();
  }else{
    change_mode2();
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', ()=>{
    play_game('rock');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', ()=>{
    play_game('scissors');
  });
document.querySelector('.js-paper-button')
  .addEventListener('click', ()=>{
    play_game('paper');
  });

document.body.addEventListener('keydown',(event)=>{
  if (event.key=== 'r'){
    play_game('rock');
  }else if(event.key=== 'p'){
    play_game('paper');
  }else if(event.key=== 's'){
    play_game('scissors');
  }else if (event.key==='a'){
    autoplay();
  }else if(event.key==='Backspace'){
    reset_score()
  }
});
function change_mode(){
  document.querySelector('.js-autoplay')
    .innerHTML='Stop Play';
  document.querySelector('.js-autoplay')
    .classList.add('stop-play-button');
  isAutoPlaying= true;
}
function change_mode2(){
  clearInterval(intervalId);
  document.querySelector('.js-autoplay')
    .innerHTML='Auto Play';
  document.querySelector('.js-autoplay')
    .classList.remove('stop-play-button');
  isAutoPlaying= false;
}
function play_game(player_move){
  const computer_move= pick_computer_move();

  let result='';
  if(player_move==='scissors'){
    if (computer_move==='rock'){
    result='Lose';
  } else if(computer_move==='paper'){
    result='Win';
  }else if(computer_move==='scissors'){
    result='Tie';
  }
  }else if(player_move==='paper'){
    if (computer_move==='rock'){
      result='Win';
    } else if(computer_move==='paper'){
      result='Tie';
    }else if(computer_move==='scissors'){
      result='Lose';
    }
  }else if(player_move==='rock'){
    if (computer_move==='rock'){
      result='Tie';
    } else if(computer_move==='paper'){
      result='Lose';
    }else if(computer_move==='scissors'){
      result='Win';
    }
  } 
  // result decided

  if(result==='Win'){
    score.Win+=1;
  }else if(result==='Lose'){
    score.Lose+=1 ;
  }else if(result==='Tie'){
    score.Tie+=1;
  }


  localStorage.setItem('score',JSON.stringify(score));

  update_score_element();

  document.querySelector('.js-result').
    innerHTML= result;
  document.querySelector('.js-moves').
    innerHTML= 
  `You:
  <img src="images/${player_move}-emoji.png" class="move-icon">

  Computer:
  <img src="images/${computer_move}-emoji.png" class="move-icon">`         
}
function reset_score(){
  const html_content =`
    <span class="confirmation-message">
    Are you sure you want to reset the score ?  <button class="yes-confirmation-button css-confirmation-button">Yes</button> <button class="no-confirmation-button css-confirmation-button" >No</button></span>`;

    document.querySelector('.js-confirmation-ask')
      .innerHTML = html_content;
    document.querySelector('.yes-confirmation-button')
      .addEventListener('click',()=>{
        score.Win=0;
        score.Lose=0; 
        score.Tie=0;
        localStorage.removeItem('score');
        update_score_element();
        document.querySelector('.js-confirmation-ask')
          .innerHTML ='';
      });
    document.querySelector('.no-confirmation-button')
      .addEventListener('click',()=>{
        document.querySelector('.js-confirmation-ask')
          .innerHTML ='';
      })
}

document.querySelector('.js-reset-button')
  .addEventListener('click', reset_score)
/*document.querySelector('.js-reset-button')
  .addEventListener('click',()=>{
    
  });*/
document.querySelector('.js-autoplay')
  .addEventListener('click',()=>{
  autoplay();
});

function update_score_element(){
  document.querySelector('.js-score')
    .innerHTML=`Wins: ${score.Win}, Losses: ${score.Lose},Ties: ${score.Tie}`;
}

function pick_computer_move(){
  const random_number= Math.random();

  let computer_move='';


  if(random_number>=0 && random_number< 1/3){
    computer_move='rock';

  } else if (random_number>= 1/3 && random_number< 2/3){
    computer_move='paper';

  }else if (random_number>= 2/3 && random_number<1){
    computer_move='scissors';
  }
  return computer_move;
}