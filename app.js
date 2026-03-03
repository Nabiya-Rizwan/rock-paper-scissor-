alert("HELLO WELCOME😊")
  let userScore = 0;
    let computerScore = 0;
    function playGame(userChoice){
        let choices =["rock","paper","scissor"];
        let randomIndex = Math.floor(Math.random() * 3);
        let computerChoice = choices[randomIndex];

let resultText ="";

if (userChoice === computerChoice) {
    resultText = '😐 its a Draw';

    
}
 else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        resultText = "🎉 You Win!";
        userScore++;
      }
else{
      resultText = "💻 Computer Wins!";
        computerScore++;
}

      document.getElementById("result").innerText =
        `You chose ${userChoice} | Computer chose ${computerChoice} → ${resultText}`;

      document.getElementById("score").innerText =
        `You: ${userScore} | Computer: ${computerScore}`;


    }


function resetGame() {
      userScore = 0;
      computerScore = 0;
      document.getElementById("result").innerText = "Game Reset! Play again 😎";
      document.getElementById("score").innerText = "You: 0 | Computer: 0";
    
}





    


