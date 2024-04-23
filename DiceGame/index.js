//alert("Working");

var ran1 = Math.floor((Math.random()* 6)+ 1);
var ran2 = Math.floor((Math.random()* 6)+ 1);


document.querySelector(".img1").setAttribute("src","./images/dice"+ran1+".png");


document.querySelector(".img2").setAttribute("src","./images/dice"+ran2+".png");

if(ran1 === ran2){
    document.querySelector("h1").innerHTML  = "Draw";
}else if(ran1 > ran2){
    document.querySelector("h1").innerHTML  = "Player 1 won";
}
else{
    document.querySelector("h1").innerHTML  = "Player 2 won";
}

console.log(ran);