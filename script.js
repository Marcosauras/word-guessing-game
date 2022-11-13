// step 1 make the game start when i click start game
// step 2 make the game ask me to guess the word by filling in blank spaces
// step 3 make the game timed
// step 4 make a win, and loss conditions
// step 5 make the toal of wins and losses stay on the sceen
// 

const wordOptions = ["Banana", "Taco", "Pinapple"]
let letterContainer = document.getElementById("letter-container");
let optionsContainer = document.getElementById("options-container")
let startButton = document.getElementById("start-game")
let word = []

const randomNum =(max) => {
  return Math.floor(Math.random() * max);
}

startButton.addEventListener("click", startGame)
function startGame(){
  wordText.textContent ="";
  word = wordOptions[randomNum(wordOptions.length)];
  for (let i = 0; i < wordOptions.length; i++){
    wordText.textContent += "_"
  }
  console.log(word)


  

}


function keydownAction(event) {
//   tells what key is being pressed
  document.querySelector("#key").innerHTML = event.key;
}
