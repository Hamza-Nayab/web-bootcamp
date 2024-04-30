// alert("connected");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = generateRandomColor();
    console.log(this.innerHTML);
    play(this.innerHTML);

  });
}




document.addEventListener("keydown",function(event){
    document.querySelector("."+event.key).style.color = generateRandomColor();
    play(event.key);
});

function animation(text){
    var current = document.querySelector("."+text);
    current.classList.add("pressed");

    setTimeout(() => {
        current.classList.remove("pressed");
    }, 100);
}


function play(text){
    switch (text) {
        case "w":
          var add = "./sounds/tom-1.mp3";
          var aud = new Audio(add);
          aud.play();
          break;
  
        case "a":
          var add = "./sounds/tom-2.mp3";
          var aud = new Audio(add);
          aud.play();
          break;
  
        case "s":
          var add = "./sounds/tom-3.mp3";
          var aud = new Audio(add);
          aud.play();
          break;
  
        case "d":
          var add = "./sounds/tom-4.mp3";
          var aud = new Audio(add);
          aud.play();
          break;
  
        case "j":
          var add = "./sounds/snare.mp3";
          var aud = new Audio(add);
          aud.play();
          break;
  
        case "k":
          var add = "./sounds/kick-bass.mp3";
          var aud = new Audio(add);
          aud.play();
          break;
  
        case "l":
          var add = "./sounds/crash.mp3";
          var aud = new Audio(add);
          aud.play();
          break;
  
        default:
          console.log(this.innerHTML);
          break;
      }

      animation(text);
    
}

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    const color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
  
    return color;
  }