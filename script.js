//jshint esversion: 6

function moreInfo() {
  document.querySelector("p").innerHTML =
    `<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'>
    <br>
    <h3>ABOUT</h3><br>
    In 2014, I registered the domain instinite.com. A <a href='https://en.wikipedia.org/wiki/Portmanteau'>portmanteau</a> of Infinite and Instant. It sounded cool in 2014. It was another time. In 2018 I quit my job and began studying Javascript. While I'm learning to code, I'll be using this site to catalog my projects. Who knows, something useful may come out of it some day. If you'd like to follow me on my quest to create something useful, click below and I'll be in touch.`;

  document.querySelector(".btn").outerHTML = `<a href='https://rocky-basin-83913.herokuapp.com/' class='btn btn-lg btn-secondary info'>Subscribe</a>`;
}

function pig() {
  document.querySelector("p").innerHTML =
    `<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'>
    <br>
    <h3>Pig</h3>
    <br>
    A game of chance against a computerized opponent. Each round, roll the dice to accumalate points for your Round Score.
    If you get doubles, your Round Score will be wiped out and your turn will be over. Click Hold to end your turn to collect you points before this happens.`;

  document.querySelector(".btn").outerHTML = `<a href='Projects/Pig/index.html' class='btn btn-lg btn-secondary info'>Try it</a>`;
}

function drums() {
  document.querySelector("p").innerHTML =
    `<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'>
    <br><h3>DRUM KIT</h3
    <br>A drum kit sound board I made while learning about DOM eventListening. Pretty straight forward.`;

  document.querySelector(".btn").outerHTML = `<a href='Projects/Drum Kit/index.html' class='btn btn-lg btn-secondary info'>Try it</a>`;
}

function wholesomeFamilyGame() {
  document.querySelector("p").innerHTML =
    `<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'>
    <br><h3>LAZER BRAIN</h3>
    <br>A ridiculous take on Simon Says I made using my friends heads`;

  document.querySelector(".btn").outerHTML = `<a href='Projects/Simon Game/index.html' class='btn btn-lg btn-secondary info'>Try it</a>`;
}

function toDoList() {
  document.querySelector("p").innerHTML = `<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'><br><h3>TODO List</h3><br>An app that keeps track of things to do.`;

  document.querySelector(".btn").outerHTML = `<form class='form btn' autocomplete='off' onsubmit='createList()'><div class='form-group row'><label for='listName' class='col-sm-0 col-form-label'></label><div class='col-sm-6'><input type='text' class='form-control' id='inputName' placeholder='List Name'></div><div class='col-sm-6'><button type='submit' id='submitButton' class='btn btn-primary'>Create List</button></div></form>`;
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

function cakes(recipe, available) {
  recipe = Object.entries(recipe);
  var cakes = [];
  for (i = 0; i < recipe.length; i++) {
    cakes.push(Math.floor(available[recipe[i][0]] / recipe[i][1]));
  }
  if (Math.min(...cakes) === NaN) {
    return 0;
  } else {
    return Math.min(...cakes);
  };
}
