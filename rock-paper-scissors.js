const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const canvas = document.getElementById('display');
const ctx = canvas.getContext('2d');

let playerScore = 0;
let computerScore = 0;

canvas.width = canvas.offsetWidth;
canvas.height = 200;

let computerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];  
}

let playerChoice = (playerMove) => {
    const computerMove = computerChoice();
    let result = '';
    
    if (playerMove === computerMove) {
        result = `You both selected ${computerMove}, Tie!`;
    } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper') ) {
        result = `You selected ${playerMove}, the computer selected ${computerMove}. You win!`;
        playerScore++;
    } else {
        result = `You selected ${playerMove}, the computer selected ${computerMove}. You lose!`;
        computerScore++;
    }
    displayOnCanvas(result);
}

let displayOnCanvas = (text) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial, Helvetica, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';

    const centerX = canvas.width / 2;
    
    ctx.fillText(text, centerX, 60);

    ctx.fillText(`Player: ${playerScore}`, centerX, 140);
    ctx.fillText(`Computer: ${computerScore}`, centerX, 170);
}

rockBtn.addEventListener('click', () => playerChoice('rock'));
paperBtn.addEventListener('click', () => playerChoice('paper'));
scissorsBtn.addEventListener('click', () => playerChoice('scissors'));

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial, Helvetica, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';

    const centerX = canvas.width / 2;
    
    ctx.fillText('Game reset. Let\'s play again!', centerX, 100);
    ctx.fillText(`Player: ${playerScore}`, centerX, 140);
    ctx.fillText(`Computer: ${computerScore}`, centerX, 170);
});

window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    displayOnCanvas('Game reset. Let\'s play again!');
});

window.onload = () => {
    displayOnCanvas("Start Game");
};