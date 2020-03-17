var randomNum1 = Math.floor(Math.random()*6)+ 1 ;
var randomImgSrc1 = "images/dice" + randomNum1 + ".png" ; 
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc1);


var randomNum2 = Math.floor(Math.random()*6) + 1 ;  
var randomImgSrc2 = "images/dice" + randomNum2 + ".png" ; 
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSrc2);



if(randomNum1 > randomNum2){
	document.querySelector("h1").innerHTML = "PLAYER 1 IS WINNER !" ; 
}else if(randomNum1 < randomNum2){
	document.querySelector("h1").innerHTML = "	PLAYER 2 IS WINNER !";
}else{
	document.querySelector("h1").innerHTML = "DRAW !";
}

