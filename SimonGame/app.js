//alert("test");

var buttonColours = ["red", "blue", "green", "yellow"];
var pattern = [];
var userClickedPattern = [];


function nextSequence() {
  var a = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[a];

  pattern.push(randomChosenColour);

  animatePress(randomChosenColour);
  play(randomChosenColour);
}

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);

    console.log(userClickedPattern);
    play(userChosenColor);
});

function play(name){
    var aud = new Audio("./sounds/" + name + ".mp3");
    aud.play();
}

function animatePress(current){
    $("#" + current).fadeOut(100).fadeIn(100);
}