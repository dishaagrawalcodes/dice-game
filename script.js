function choosediceimage()
{    let diceimages =['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];
var randomnumber1 =Math.floor(Math.random()*6);
var randomImage1 = diceimages[randomnumber1];
var imgelement1 =document.querySelector(".img1");
imgelement1.src =randomImage1 ;
console.log(randomImage1);
var randomnumber2 =Math.floor(Math.random()*6);
var randomImage2 = diceimages[randomnumber2];
var imgelement2 =document.querySelector(".img2");
imgelement2.src =randomImage2 ;
console.log(randomImage2);
if(randomnumber1>randomnumber2){
    var heading =document.querySelector("h1");
    heading.innerHTML="Player1 Wins";
}
else if (randomnumber1==randomnumber2){
    var heading =document.querySelector("h1");
    heading.innerHTML="Draw";
}
else{
    var heading =document.querySelector("h1");
    heading.innerHTML="Player2 Wins";
}
}