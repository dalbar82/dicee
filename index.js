

function getRandomImage(){
var randomImage = new Array();

randomImage[0] = "images/dice1.png";
randomImage[1] = "images/dice2.png";
randomImage[2] = "images/dice3.png";
randomImage[3] = "images/dice4.png";
randomImage[4] = "images/dice5.png";
randomImage[5] = "images/dice6.png";

var number = Math.floor(Math.random()*randomImage.length);
document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';

var randomImage2 = new Array()

randomImage2[0] = "images/dice1.png";
randomImage2[1] = "images/dice2.png";
randomImage2[2] = "images/dice3.png";
randomImage2[3] = "images/dice4.png";
randomImage2[4] = "images/dice5.png";
randomImage2[5] = "images/dice6.png";

var number2 = Math.floor(Math.random()*randomImage2.length);
document.getElementById("result2").innerHTML = '<img src="'+randomImage2[number2]+'" />';

if (number > number2){
  document.querySelector("h1").innerHTML = "Player 1 WINS!";
}  else if (number2 > number){
    document.querySelector("h1").innerHTML = "Player 2 WINS!"
}    else {
      document.querySelector("h1").innerHTML = "DRAW!"
};
};
