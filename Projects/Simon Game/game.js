buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
var level = -1;
var cycle = 0;


$("body").keypress(function() {
  if (level < 0) {
    gamePattern = [];
    userClickedPattern = [];
    level++;
    nextSequence();

  }
});




// function animateSequence(counter) {
//   if (counter < gamePattern.length) {
//     setInterval(function() {
//       $("." + gamePattern[counter]).fadeOut(250).fadeIn(250);
//       console.log(gamePattern[counter]);
//       playSound(gamePattern[counter]);
//       counter++;
//     }, 1500);
//   }
//   console.log(gamePattern);
//   matchSequence();
// }

function animateSequence(counter) {
  if (counter < gamePattern.length) {
      setTimeout(function() {
        $("." + gamePattern[counter]).fadeOut(250).fadeIn(250);
        console.log(gamePattern[counter]);
        playSound(gamePattern[counter]);
        counter++;
        animateSequence(counter);
      }, 1500);
    }
    console.log(gamePattern);
    matchSequence();
  }

function animateTest(counter) {
  setInterval(function() {
    $("." + buttonColours[counter]).fadeOut(250).fadeIn(250);
    console.log(buttonColours[counter]);
    playSound(buttonColours[counter]);
    counter++;
    if (counter > buttonColours.legnth) {
      clearInterval();
    }
    console.log(gamePattern);
  }, 1500);
}

function nextSequence() {

  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
  animateSequence(0);
  // matchSequence();
}

$(".btn").click(function() {
  userChosenColour = $(this).attr("id");
  animatePress(userChosenColour);
  playSound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  // userChosenColour="wait";
  matchSequence();
});

//
//
function matchSequence() {
  console.log("Match Sequence");
  console.log(JSON.stringify(gamePattern) + JSON.stringify(userClickedPattern));

    if (JSON.stringify(gamePattern) === JSON.stringify(userClickedPattern)) {
      console.log(userClickedPattern + " = " + gamePattern + " so...");
      userChosenColour = "wait";
      level++;
      console.log("Level up!");
      userClickedPattern=[];
      cycle=0;
      nextSequence();
    } else if (gamePattern[cycle] === userChosenColour) {
      console.log(gamePattern[cycle] + " = " + userChosenColour + " so...");
      cycle++;
      console.log("Match " + cycle + " out of " + gamePattern.length);
      userChosenColour = "wait";
      matchSequence();

    } else if (gamePattern[cycle] != userChosenColour && userChosenColour != "wait") {
      cycle = 0;
      console.log(gamePattern[cycle] + " != " + userChosenColour + " Game Over.");
      console.log(cycle);
      console.log(gamePattern);
      console.log(userClickedPattern);
      gamePattern = [];
      userClickedPattern = [];
      userChosenColour = "wait";
      level = -1;
      $("h1").text("Game Over, Press Any Key to Restart");
      $("body").addClass("game-over");
      wrong();
      setTimeout(function() {
        $("body").removeClass("game-over");
        console.log(gamePattern[counter]);
      }, 500);
      $("body").addClass("game-over");
    }
    userChosenColour="wait";

  }
//
function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function wrong() {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 500);
}
//
// function matchSequence2(key) {
//
//   switch (key) {
//     case cycle == userClickedPattern.length:
//     console.log(userClickedPattern + " = " + gamePattern + " so...");
//     cycle = 0;
//     userClickedPattern = [];
//     userChosenColour = "wait";
//     level++;
//     console.log("Level up!");
//     nextSequence();
//     break;
//
//     case "red":
//     console.log(gamePattern[cycle] + " = " + userChosenColour + " so...");
//     cycle++;
//     console.log("Match " + cycle + " out of " + gamePattern.length);
//     userClickedPattern.push(userChosenColour);
//     userChosenColour = "wait";
//     matchSequence();
//     break;
//
//     case "yellow":
//     cycle = 0;
//     console.log(gamePattern[cycle] + " != " + userChosenColour + " Game Over.");
//     console.log(cycle);
//     console.log(gamePattern);
//     console.log(userClickedPattern);
//     gamePattern = [];
//     userClickedPattern = [];
//     userChosenColour = "wait";
//     level = -1;
//     $("h1").text("The End");
//     break;
//
//     default: console.log(event);
//
//   }
// }
