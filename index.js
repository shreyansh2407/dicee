var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6 + 1;
randomNumber1 = Math.floor(randomNumber1);


var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSetter = "images/" + randomDiceImage;

 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomImageSetter);

 

 var randomNumber2 = Math.random();
 randomNumber2 = randomNumber2*6 + 1;
 randomNumber2 = Math.floor(randomNumber2);
 
 
 var randomDiceImage = "dice" + randomNumber2 + ".png";
 
 var randomImageSetter = "images/" + randomDiceImage;
 
  var image2 = document.querySelectorAll("img")[1];
 
  image2.setAttribute("src",randomImageSetter);

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 Shreyansh Wins";
  }
 else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Samridhi wins 🏆";
 }
 else{
    document.querySelector("h1").innerHTML = "Draw🤞"
 }

