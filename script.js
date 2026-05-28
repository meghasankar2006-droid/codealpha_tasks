var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;

var image1="images/dice"+randomnumber1+".png";
var image2="images/dice"+randomnumber2+".png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);
if(randomnumber1>randomnumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins";
}
else if(randomnumber1==randomnumber2){
    document.getElementsByTagName("h1")[0].innerHTML="Draw";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins";
}
