var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
var randomImageSource1 = "images/dice" + n + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
var n2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + n2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
if(n > n2){
    document.querySelector("h1").innerHTML = "🚩Raaz wins";
}
else if(n < n2){
    document.querySelector("h1").innerHTML = "Ahmed wins🚩";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw🏳️";
}
