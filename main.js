var shuf = document.querySelector(".shuffle");
var conLen = document.querySelectorAll(".container").length;

shuf.addEventListener('click', shuffleDice);




function shuffleDice(){

for(var i = 0; i < conLen; i++){
document.querySelectorAll(".container")[i].style.visibility="hidden";
}

var num = Math.floor((6 * Math.random()) + 1);

switch (num) {
  case 1:
document.querySelector(".one").style.visibility="visible";
    break;
  case 2:
   document.querySelector(".two").style.visibility="visible";
    break;
  case 3:
   document.querySelector(".three").style.visibility="visible";
    break;
  case 4:
   document.querySelector(".four").style.visibility="visible";
    break;
  case 5:
   document.querySelector(".five").style.visibility="visible";
    break;
  case 6:
   document.querySelector(".six").style.visibility="visible";
    break;
}




var ber = Math.floor((6 * Math.random()) + 1);
switch (ber) {
  case 1:
document.querySelector(".diceTwo .one").style.visibility="visible";
    break;
  case 2:
   document.querySelector(".diceTwo .two").style.visibility="visible";
    break;
  case 3:
   document.querySelector(".diceTwo .three").style.visibility="visible";
    break;
  case 4:
   document.querySelector(".diceTwo .four").style.visibility="visible";
    break;
  case 5:
   document.querySelector(".diceTwo .five").style.visibility="visible";
    break;
  case 6:
   document.querySelector(".diceTwo .six").style.visibility="visible";
    break;
}
var winner = document.querySelector('h2');

if(num > ber){
  winner.innerHTML='PLAYER 1 WINS!';
}
else if(num < ber){
  winner.innerHTML='PLAYER 2 WINS!';
}
else{
  winner.innerHTML='DRAW';
}
}
