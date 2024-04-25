//alert("test");

var buttonColours = ["red", "blue", "green", "yellow"];
var pattern = [];
var userClickedPattern = [];
var toggle = 0;
var level = 0;

$(document).keydown(function () {
  if (toggle === 0) {
    toggle = 1;
    nextSequence();
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress(userChosenColor);
  play(userChosenColor);
  check(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];
  level += 1;
  $("h1").text("Level " + level);
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

function animatePress(current) {
  $("#" + current).addClass("pressed");
  setTimeout(() => {
    $("#" + current).removeClass("pressed");
  }, 100);
}

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
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  pattern = [];
  userClickedPattern = [];
  toggle = 0;
}
