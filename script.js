let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
/*
      if (score) {
        score ={
          wins: 0,
          losses: 0,
          ties: 0
        };
        
      }
 */




function playGame(playerMove) {
  const cumputerMove = pickComputerMove();


  let result = ''

  if (playerMove === 'scissors') {
    if (cumputerMove === 'rock') {
      result = 'You lose';
    } else if (cumputerMove === 'paper') {
      result = 'You win';
    } else if (cumputerMove === 'scissors') {
      result = 'Tie';
    }
  } else if (playerMove === 'paper') {

    if (cumputerMove === 'rock') {
      result = 'You win';
    } else if (cumputerMove === 'paper') {
      result = 'Tie';
    } else if (cumputerMove === 'scissors') {
      result = 'You lose';
    }

  } else if (playerMove === 'rock') {
    if (cumputerMove === 'rock') {
      result = 'Tie';
    } else if (cumputerMove === 'paper') {
      result = 'You lose';
    } else if (cumputerMove === 'scissors') {
      result = 'You win';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `you<img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${cumputerMove}-emoji.png" class="move-icon">
      computer`

}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}.Tie ${score.ties}`;
}

function pickComputerMove() {
  const randomnumber = Math.random();
  let cumputerMove = '';

  if (randomnumber >= 0 && randomnumber < 1 / 3) {
    cumputerMove = 'rock';
  } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
    cumputerMove = 'paper';
  } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
    cumputerMove = 'scissors';
  }
  return cumputerMove;

}