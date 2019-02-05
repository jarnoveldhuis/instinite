/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, winningScore, roll, goal;
var rollList = [];
init();


document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying && activePlayer === 0) {
    roll();
  }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
  hold();
});

document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  console.log("Player is " + activePlayer);
  roundScore = 0;
  rollList = [];
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  console.log("Toggle to player - " + activePlayer);

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classlist.add('active');

  document.querySelector('.dice1').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';
  if (activePlayer === 1) {
    goal = Math.floor(Math.random() * (winningScore / 3)) + 1;
    console.log("Goal: " + goal);
    computer();
  }
}

function computer() {

  if (gamePlaying && activePlayer === 1) {
    if (roundScore < goal) {
      setTimeout(function () {
          roll();
          // create a recursive loop.
          computer();
      }, 1000);
    } else
      setTimeout(function () {
      hold();
    }, 1000);
  }
}

function init() {
  gamePlaying = true;
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  rollList = [];
  if (document.getElementById("winning").value === "") {
    winningScore = 100;
  } else {
    winningScore = document.getElementById("winning").value;
  }
  console.log("Winning Score: " + winningScore);

  document.querySelector('.dice1').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('#name-0').textContent = '🤔';
  document.querySelector('#name-1').textContent = '🤖';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.getElementById("winning").placeholder = winningScore;
}


function roll() {
  console.log("rolling");
  // 1. random number
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  rollList.unshift(dice1 + dice2);
  console.log(rollList);
  //2. Display the result
  var diceDOM1 = document.querySelector('.dice1');
  var diceDOM2 = document.querySelector('.dice2');
  diceDOM1.style.display = 'block';
  diceDOM2.style.display = 'block';
  diceDOM1.src = 'dice-' + dice1 + '.png';
  diceDOM2.src = 'dice-' + dice2 + '.png';
  // 3. Update the round score IF the rolled number was NOT a 1.
  if (dice1 === dice2) {
    //Next player
    gamePlaying = 0;
    console.log("Doubles!");
    if (activePlayer===0){
      document.querySelector('#name-0').textContent ='😲';
    } else {
      document.querySelector('#name-0').textContent ='😆';
      document.querySelector('#name-1').textContent ='💥';
    }


    setTimeout(function () {
      gamePlaying=1;
      document.querySelector('#name-0').textContent = '🤔';
      document.querySelector('#name-1').textContent = '🤖';
      nextPlayer();
    }, 1000);


  // } else if (rollList[0] + rollList[1] === 12) {
  //   scores[activePlayer] = 0;
  //   document.getElementById('score-' + activePlayer).textContent = '0';
  //   nextPlayer();
  } else {
    // add score
    roundScore += dice1 + dice2;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }

}

function hold() {
  if (gamePlaying) {
    // Add current score to global score
    scores[activePlayer] += roundScore;
    console.log('Hold:' + roundScore);
    //update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Check if player won
    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice1').style.display = 'none';
      document.querySelector('.dice2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
    // ('.winner')
  }
}
//  = dice;
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;
