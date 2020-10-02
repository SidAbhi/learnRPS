const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let cpuScore = 0;
const roundNum = document.querySelector('#rounds');
const rpsBtn = [...document.querySelectorAll('.rps')];
const difBtn = [...document.querySelectorAll('.dif')];
const playerResult = document.querySelector('#playerScore');
const cpuResult = document.querySelector('#cpuScore');
const roundResult = document.querySelector('#resultText');
let difficulty = 'medium';
let stop = false;

function showGame() {
    document.querySelector('.start').classList.toggle('invisible')
    setTimeout(() => {
        document.querySelector('.start').classList.toggle('hide');
        setTimeout(() => {
            document.querySelector('.game').classList.toggle('hide');
            document.querySelector('.game').classList.toggle('invisible');
        }, 400);
    }, 400);
};

function start() {
    if (roundNum.value == 0 || roundNum.value == undefined || roundNum.value == null || roundNum.value <= 0 || roundNum.value > 100) {
        document.querySelector('.warning').classList.remove('hide');
    } else {
        showGame();
        difficulty = this.value;
        console.log(difficulty);
    };
};

function easyCalc(ps) {
    if(ps === 'rock') {
        chanceEasy = [30, 20, 50];
        acc = 0;
        chanceEasy = chanceEasy.map(el => (acc = el + acc));
        return moves[chanceEasy.findIndex(el => el > (Math.random() * 100))];
    } else if(ps === 'scissors') {
        chanceEasy = [20, 50, 30];
        acc = 0;
        chanceEasy = chanceEasy.map(el => (acc = el + acc));
        return moves[chanceEasy.findIndex(el => el > (Math.random() * 100))];
    } else if(ps === 'paper') {
        chanceEasy = [50, 30, 20];
        acc = 0;
        chanceEasy = chanceEasy.map(el => (acc = el + acc));
        return moves[chanceEasy.findIndex(el => el > (Math.random() * 100))];
    };
};

function hardCalc(ps) {
    if(ps === 'rock') {
        chanceHard = [30, 50, 20];
        acc = 0;
        chanceHard = chanceHard.map(el => (acc = el + acc));
        return moves[chanceHard.findIndex(el => el > (Math.random() * 100))];
    } else if(ps === 'scissors') {
        chanceHard = [50, 20, 30];
        acc = 0;
        chanceHard = chanceHard.map(el => (acc = el + acc));
        return moves[chanceHard.findIndex(el => el > (Math.random() * 100))];
    } else if(ps === 'paper') {
        chanceHard = [20, 30, 50];
        acc = 0;
        chanceHard = chanceHard.map(el => (acc = el + acc));
        return moves[chanceHard.findIndex(el => el > (Math.random() * 100))];
    };
};


function impossibleCalc(ps) {
    if(ps === 'rock') {
        chanceHard = [9, 90, 1];
        acc = 0;
        chanceHard = chanceHard.map(el => (acc = el + acc));
        return moves[chanceHard.findIndex(el => el > (Math.random() * 100))];
    } else if(ps === 'scissors') {
        chanceHard = [90, 1, 9];
        acc = 0;
        chanceHard = chanceHard.map(el => (acc = el + acc));
        return moves[chanceHard.findIndex(el => el > (Math.random() * 100))];
    } else if(ps === 'paper') {
        chanceHard = [1, 9, 90];
        acc = 0;
        chanceHard = chanceHard.map(el => (acc = el + acc));
        return moves[chanceHard.findIndex(el => el > (Math.random() * 100))];
    };
};

function cpuChoice(ps) {
    if(difficulty === 'medium') {
        return moves[Math.floor(Math.random() * moves.length)];
    } else if(difficulty === 'easy') {
        return easyCalc(ps);
    } else if(difficulty === 'hard') {
        return hardCalc(ps);
    } else if(difficulty === 'impossible') {
        return impossibleCalc(ps);
    };
};

function round(ps) {
    playerSelection = ps;
    computerSelection = cpuChoice(playerSelection);
    console.log('You used ' + playerSelection);
    console.log('The CPU used ' + computerSelection);
    if (playerSelection === computerSelection) {
        playerResult.textContent = 'You: ' + playerScore;
        cpuResult.textContent = 'CPU: ' + cpuScore;
        roundResult.textContent = 'It\'s a draw';
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
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

function game(ps) {
    ps = this.value;
    if(roundNum.value > 1 && stop === false) {
        console.log(roundNum.value);
        round(ps);
        roundNum.value--;
        console.log(roundNum.value);
    } else if(stop === false){
        stop = true;
        round(ps);
        document.querySelector('.final').innerHTML = '<p>The Final Score is....</p>' + 
        '<br>You : ' + playerScore + ' : ' + cpuScore + ' : CPU';
        document.querySelector('.game').classList.toggle('invisible');
        setTimeout(() => {
            document.querySelector('.game').classList.toggle('hide');
            document.querySelector('.final').classList.toggle('hide');
            document.querySelector('.final').classList.toggle('invisible');
            console.log(playerScore + ' : ' + cpuScore);
        }, 400);
    } else {
        return
    };
};

rpsBtn.forEach(rps => {
    rps.addEventListener('click', game);
});

difBtn.forEach(dif => {
    dif.addEventListener('click', start, {
        once: true,
    });
});
