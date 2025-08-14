let result='';
let score= {
  wins: 0,
  losses: 0,
  ties: 0
};

score = JSON.parse(localStorage.getItem('score'));


document.querySelector('.score').innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function play(pick) {
  let computerMove ='';
  const randomNumber = Math.random();

  if (randomNumber < (1/3)) {
    computerMove = 'rock';
  } else if (randomNumber > (1/3) && randomNumber < (2/3)) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  if (computerMove === pick) {
    result = 'Tie.';
    score.ties += 1;
  } else if (computerMove === 'paper' && pick === 'scissors' || computerMove === 'rock' && pick === 'paper' || computerMove === 'scissors' && pick === 'rock') {
  result ='You win.';
  score.wins += 1;
  } else {
  result = 'You lose.';
  score.losses += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.score')
    .innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  document.querySelector('.result').innerHTML = `${result}`

  document.querySelector('.play')
    .innerHTML = `You <img src="images/${pick}-emoji.png" class="move-icon"><img src="images/${computerMove}-emoji.png" class="move-icon">computer`;

  return computerMove;
}
