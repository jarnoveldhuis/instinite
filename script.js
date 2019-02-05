function moreInfo(){
  document.querySelector("p").innerHTML =
  "<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'><br><h1>ABOUT</h1><br>In 2014, I registered the domain instinite.com. A <a href='https://en.wikipedia.org/wiki/Portmanteau'>portmanteau</a> of Infinite and Instant. It sounded cool in 2014. It was another time. In 2018 I quit my job and began studying Javascript. While I'm learning to code, I'll be using this site to catalog my projects. Who knows, something useful may come out of it some day. If you'd like to follow me on my quest to create something useful, click below and I'll be in touch.";

  document.querySelector(".btn").outerHTML = "<a href='https://rocky-basin-83913.herokuapp.com/' class='btn btn-lg btn-secondary info'>Subscribe</a>";
}

function pig(){
  document.querySelector("p").innerHTML =
  "<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'><br><h1>Pig</h1><br>A simple game of chance. Each round, roll the dice to accumalate points for your Round Score. If you get doubles, your Round Score will be wiped out and your turn will be over. Click Hold to commit your score for the round to your total score for the game.";

  document.querySelector(".btn").outerHTML = "<a href='Projects/Pig/index.html' class='btn btn-lg btn-secondary info'>Try it</a>";
}

function drums(){
  document.querySelector("p").innerHTML =
  "<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'><br><h1>DRUM KIT</h1><br>A drum kit sound board I made while learning about DOM eventListening. Pretty straight forward.";

  document.querySelector(".btn").outerHTML = "<a href='Projects/Drum Kit/index.html' class='btn btn-lg btn-secondary info'>Try it</a>";
}

function wholesomeFamilyGame(){
  document.querySelector("p").innerHTML =
  "<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'><br><h1>WHOLESEOME FAMILY GAME</h1><br>A ridiculous game I made for my friends.";

  document.querySelector(".btn").outerHTML = "<a href='Projects/Simon Game/index.html' class='btn btn-lg btn-secondary info'>Try it</a>";
}

function toDoList(){
  document.querySelector("p").innerHTML =
  "<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'><br><h1>ToDo List</h1><br>An app that keeps track of things to do. I read that the internet needs more of these.";

  document.querySelector(".btn").outerHTML = "<form class='form' autocomplete='off' onsubmit='createList()'><div class='form-group row'><label for='listName' class='col-sm-4 col-form-label'>Name your list:</label><div class='col-sm-4'><input type='text' class='form-control' id='inputName' placeholder='List Name'></div><div class='col-sm-3'><button type='submit' id='submitButton' class='btn btn-primary'>Create List</button></div></form>";
}

function createList() {
  var item = document.getElementById("inputName").value;
  var form = this;
  form.action = "https://fathomless-eyrie-25905.herokuapp.com/" + item;
  openInNewTab(form.action);
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
