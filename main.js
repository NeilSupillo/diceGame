const shuf = document.querySelector(".shuffle");
const conLen = document.querySelectorAll(".container").length;

shuf.addEventListener('click', shuffleDice);

//generate random num
function randomNumber(){
  return Math.floor((6 * Math.random()) + 1);
}


//hide all box
function shuffleDice(){

for(let i = 0; i < conLen; i++){
document.querySelectorAll(".container")[i].style.visibility="hidden";
}

//diceone
const num = randomNumber()


document.querySelectorAll(".diceOne > div")[num-1].style.visibility="visible";

//dicetwo
const ber = randomNumber()


document.querySelectorAll(".diceTwo > div")[ber-1].style.visibility="visible";

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

