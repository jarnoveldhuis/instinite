function toggleSize(){
  document.querySelector("h1").classList.toggle("huge");
}

function randomNumber(){
  // document.getElementById("myImg").src = "hackanm.gif";
  player1 = Math.floor(Math.random()*6)+1;
  player2 = Math.floor(Math.random()*6)+1;
  document.querySelector(".img1").src = "images/dice"+player1+".png";
  document.querySelector(".img2").src = "images/dice"+player2+".png";
  if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}
