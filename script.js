//jshint esversion: 6

function moreInfo() {
  document.querySelector("p").innerHTML =
    `<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'>
    <br>
    <h3>ABOUT</h3><br>
      I'll be using this site to catalog my projects. If you'd like to follow me on my quest to create something useful, click below and I'll be in touch.`;

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

function intropy() {
document.querySelector("p").innerHTML = `<img src='images/Logomark - Black.svg' width='50%' height='50%' class='logo'><br><h3>Intropy</h3><br>Intropy is designed to help people realize their longterm goals and to develop the habits necessary to achieve them. <br>Work in Progress.`;

    document.querySelector(".btn").outerHTML = `<a href='https://intropy.instinite.com/' class='btn btn-lg btn-secondary info'>Try it</a>`;
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
