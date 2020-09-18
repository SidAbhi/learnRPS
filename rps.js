const moves = ['rock', 'paper', 'scissors'];
var playerScore = 0
var cpuScore = 0
var roundNum = prompt('How many rounds?')

function cpuChoice() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function round(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, Paper, Scissors!').toLocaleLowerCase();
    
    while (moves.indexOf(playerSelection) === -1) {
        playerSelection = prompt('Invalid choice! The choices are: rock, paper, scissors');
    }

    computerSelection = cpuChoice();

    console.log('You used ' + playerSelection);

    console.log('The CPU used ' + computerSelection);

    if (playerSelection === computerSelection) {
        return outcome = 'It\'s a draw';
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++
        return outcome = 'You won!';
    } else {
        cpuScore++
        return outcome = 'You lost...'
    };
}

function game() {
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
}

game()