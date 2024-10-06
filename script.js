function getHumanChoice(choice) {
    let choiceAsString

    if (choice == 'rock') choiceAsString = 'Player chooses Rock.';
    if (choice == 'paper') choiceAsString = 'Player chooses Paper.';
    if (choice == 'scissors') choiceAsString = 'Player chooses Scissors.';
    
    if (choiceAsString == '') return;

    postLog(choiceAsString, 'player');

    return choice.charAt(0).toLowerCase();
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    switch(getRandomInt(3)) {
        case 0:
            postLog('Computer chooses Rock.', 'computer');
            return 'r';
        case 1:
            postLog('Computer chooses Paper.', 'computer');
            return 'p';
        case 2:
            postLog('Computer chooses Scissors.', 'computer');
            return 's';
    }
};


function playRound(humanChoice, computerChoice) {
    let selections = humanChoice + computerChoice

    const advantageRock = ' Rock smashes Scissors.';
    const advantagePaper = ' Paper covers Rock.';
    const advantageScissors = ' Scissors cuts Paper.';
    
    const playerWin = 'You Win!';
    const playerLose = 'You Lose!';
    const draw = 'Draw! Same selection.';

    switch (selections) {
        case 'rs':
            postLog(playerWin + advantageRock);
            return 'player';
        case 'rp':
            postLog(playerLose + advantagePaper);
            return 'computer';
        case 'rr':
            postLog(draw);
            return 'draw';

        case 'pr':
            postLog(playerWin + advantagePaper);
            return 'player';
        case 'ps':
            postLog(playerLose + advantageScissors);
            return 'computer';
        case 'pp':
            postLog(draw);
            return 'draw';

        case 'sp':
            postLog(playerWin + advantageScissors);
            return 'player';
        case 'sr':
            postLog(playerLose + advantageRock);
            return 'computer';
        case 'ss':
            postLog(draw);
            return 'draw';
    }
}

function playGame(button) {
    const humanScore = document.querySelector('#score-player')
    const computerScore = document.querySelector('#score-computer')

    if (gameActive) removeLog();
    
    gameStart();

    let winner = playRound(getHumanChoice(button), getComputerChoice());

    if (winner !== 'draw') {
        const scoreCounter = document.querySelector('#' + winner);
        
        let score = scoreCounter.textContent++
        
        let titleWinner = winner.charAt(0).toUpperCase() + winner.slice(1);

        if (score == 4) {
            postLog('Game Complete! ' + titleWinner + ' wins!');
            postLog('Refresh to play again.');
            return;
        };
    };

    postLog('Again?','',true);

    scrollToBottom();
};

let gameActive = false;

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

function gameStart() {
    if (!gameActive) {
        const ui = document.querySelectorAll('.game-start');
        
        ui.forEach((div) => {
            div.style.cssText = 'visibility: visible';
        });
        gameActive = true;
    }
};

function postLog(event, type, cursor) {
    const log = document.querySelector('.log');

    const newEvent = document.createElement('div');

    const blinker = document.createElement('span');
    blinker.classList.add('blinking-text');
    blinker.textContent = '_';

    if (type == 'player') newEvent.classList.add('log-player');
    if (type == 'computer') newEvent.classList.add('log-computer');

    newEvent.textContent = event;

    if (cursor) newEvent.appendChild(blinker);

    log.appendChild(newEvent);
};

function removeLog() {
    const log = document.querySelector('.log');
    const lastItem = log.lastElementChild;

    lastItem.remove();
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});