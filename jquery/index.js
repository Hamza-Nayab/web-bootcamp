// alert("miau");
$("h1").addClass("big");
$("h1").css("font-size", "3rem");
//$("h1").removeClass("big");

$("body").keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "black");
  $("h1").text("Rawr");
});

let i = 0;

$("h1").on("mouseout", function () {
  if (i === 0) {
    $("h1").text("Miau");
    $("h1").css("color", "purple");
    i += 1;
    console.log(i);
  } else {
    $("h1").text("Woof");
    $("h1").css("color", "green");
    i = 0;
  }
});

$("button").text("click bro");
$("button").click(function (event) {
  console.log(event);
  $("h1").text(event.timeStamp);
  setTimeout(() => {
    $("h1").text("a button was clicked");

    setTimeout(() => {
      $("h1").fadeout();
    }, 1000);
  }, 3000);
  //$("h1").fadein();
});
