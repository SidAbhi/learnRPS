const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let cpuScore = 0;
const roundNum = document.querySelector('#rounds');
const btn = [...document.querySelectorAll('.btn')];
const playerResult = document.querySelector('#playerScore');
const cpuResult = document.querySelector('#cpuScore');
const roundResult = document.querySelector('#resultText');

function cpuChoice() {
    return moves[Math.floor(Math.random() * moves.length)];
};

function round() {
    playerSelection = this.value;
    computerSelection = cpuChoice();
    console.log('You used ' + playerSelection);
    console.log('The CPU used ' + computerSelection);
    if (playerSelection === computerSelection) {
        playerResult.textContent = 'You: ' + playerScore;
        cpuResult.textContent = 'CPU: ' + cpuScore;
        roundResult.textContent = 'It\'s a draw';
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++
        playerResult.textContent = 'You: ' + playerScore;
        cpuResult.textContent = 'CPU: ' + cpuScore;
        roundResult.textContent = 'You won!';
    } else {
        cpuScore++
        playerResult.textContent = 'You: ' + playerScore;
        cpuResult.textContent = 'CPU: ' + cpuScore;
        roundResult.textContent = 'You lost...';
    };
}

/*function game() {
    for (let counter = 0; counter < roundNum; counter++) {
        round()
        console.log(outcome)
        console.log('You ' + playerScore + '-' + cpuScore + ' CPU')
    }
    if (playerScore > cpuScore) {
        console.log('You managed to beat the CPU!')
    } else if (playerScore < cpuScore) {
        console.log('You couldn\'t defeat the CPU')
    } else {
        console.log('It seems like you are evenly matched with the CPU')
    }
};*/

btn.forEach(rps => {
    rps.addEventListener('click', round);
});