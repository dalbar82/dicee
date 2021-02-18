function getRandomImage(){
var randomImage = new Array()

randomImage[0] = "images/dice1.png";
randomImage[1] = "images/dice2.png";
randomImage[2] = "images/dice3.png";
randomImage[3] = "images/dice4.png";
randomImage[4] = "images/dice5.png";
randomImage[5] = "images/dice6.png";

var number = Math.floor(Math.random()*randomImage.length);
return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />'
}

function getRandomImage2(){
var randomImage = new Array()

randomImage[0] = "images/dice1.png";
randomImage[1] = "images/dice2.png";
randomImage[2] = "images/dice3.png";
randomImage[3] = "images/dice4.png";
randomImage[4] = "images/dice5.png";
randomImage[5] = "images/dice6.png";

var number = Math.floor(Math.random()*randomImage.length);
return document.getElementById("result2").innerHTML = '<img src="'+randomImage[number]+'" />'
}
// var randomNumber1 = (Math.floor(Math.random() *6 +1));
//     randomNumber1 = randomNumber1 * 1;

//
// function getRandomImage(imgAr, path) {
//   path = path || 'images/'; // default path here
//   var num = Math.floor(Math.random() * imgAr.length);
//   var img = imgAr[num];
//   var imgStr = '<img src="' + path + img + '" alt = "">';
//   document.write(imgStr);
//   document.close();
// }
