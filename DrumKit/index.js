// alert("connected");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var add = "./sounds/tom-1.mp3";

    this.style.color = generateRandomColor();
    console.log(this.innerHTML);
    var aud = new Audio(add);
    aud.play();
  });
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

  return color;
}
