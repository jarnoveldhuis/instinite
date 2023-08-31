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
document.querySelector("p").innerHTML = `<img src='images/Intropy Logo - Alternate Layout - White.png' width='50%' height='50%' class='logo'>

<p>The idea for Intropy stemmed from the book "Flow" by Mihaly Csikszentmihalyi and The Power of Habit by Charles Duhigg. In the past, I've found it challenging to feel fully engaged in whatever I'm doing.
My mind begins to wander toward figuring out better ways to spend my time. This can be incredibly distracting and I can't always keep track of everything I want to accomplish which creates an unpleasant state of uncertainty. I've developed my own personal system for dealing with this, and I wanted to build something to help myself hold myself accountable and to help others to do the same.<p/>
<p> Intropy does this by requesting that the user input their longterm goals before listing the habits they will need to accomplish daily in order to make the goal a reality. They will have access to a dropdown to select the urgency of the habit, it's challenge level, as well as the estimated average time to complete.</p>
<p>Once the habits have been added, Intropy will sort these tasks and automatically prompt you to complete each habit based on what it predicts will allow you to maintain a steady state of flow throughout the day.
<p>Install the extension to replace your New Tab page in chrome so that Intropy can gently remind you through the day what should be completed next when you become distracted.</p>`;

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

// // Schedule a function to run after 3 seconds (3000 milliseconds)
// setTimeout(function() {
//   // Get the 'content' div by its ID
//   var contentDiv = document.getElementById("blink");

//   // Create a new text node with the text you want to appear
//   var newText = document.createTextNode("Rebuilding");

//   // Append the new text node to the 'content' div
//   contentDiv.appendChild(newText);
// }, 3000); // 3000 milliseconds = 3 seconds

