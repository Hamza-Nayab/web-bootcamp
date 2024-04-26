//alert("test");

var buttonColours = ["red", "blue", "green", "yellow"];
var pattern = [];
var userClickedPattern = [];
var toggle = 0;
var level = 0;

var high = 0;

$(document).keydown(function () {
  if (toggle === 0) {
    toggle = 1;
    nextSequence();
  }
});

$(".btn").click(function () {
  if (pattern.length === 0) {
    nextSequence();
    return;
  }
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  play(userChosenColor);
  check(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];
  level += 1;
  $("#level-title").text("Level " + level);
  var a = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[a];

  pattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  play(randomChosenColour);
}

function play(name) {
  var aud = new Audio("./sounds/" + name + ".mp3");
  aud.play();
}

//The blinking of the div

function animatePress(current) {
  $("#" + current).addClass("pressed");
  setTimeout(() => {
    $("#" + current).removeClass("pressed");
  }, 100);
}

//to check every step of the way

function check(level) {
  if (userClickedPattern[level] === pattern[level]) {
    console.log("success");
    if (userClickedPattern.length === pattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    var aud = new Audio("./sounds/wrong.mps");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}
//restart the game
function startOver() {
  highScore();
  level = 0;
  pattern = [];
  userClickedPattern = [];
  toggle = 0;
}

function highScore() {
  if (level > high) {
    high = level;
    $(".high").text("High Score : " + high);
  }
}
