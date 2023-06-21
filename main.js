const shuf = document.querySelector(".shuffle");
const conLen = document.querySelectorAll(".container").length;

shuf.addEventListener('click', shuffleDice);




//isShuffe
function shuffleDice(){

for(let i = 0; i < conLen; i++){
document.querySelectorAll(".container")[i].style.visibility="hidden";
}

//diceone
const num = Math.floor((6 * Math.random()) + 1);


for(let i = 0; i < 7; i++){
  if(i ===num)
document.querySelectorAll(".diceOne > div")[i-1].style.visibility="visible";
}


//dicetwo
const ber = Math.floor((6 * Math.random()) + 1);


for(let i = 0; i < 7; i++){
  if(i === ber)
document.querySelectorAll(".diceTwo > div")[i-1].style.visibility="visible";
}

const winner = document.querySelector('h2');

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
