let gameActive = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
};

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
};

function getHumanChoice(choice) {
    let choiceAsString

    if (choice == 'rock') choiceAsString = 'Player chooses Rock.';
    if (choice == 'paper') choiceAsString = 'Player chooses Paper.';
    if (choice == 'scissors') choiceAsString = 'Player chooses Scissors.';
    
    if (choiceAsString == '') return;

    postLog(choiceAsString, 'player');

    return choice.charAt(0).toLowerCase();
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

    const advantageRock = 'Rock smashes Scissors. ';
    const advantagePaper = 'Paper covers Rock. ';
    const advantageScissors = 'Scissors cuts Paper. ';
    
    const playerWin = 'You Win!';
    const playerLose = 'You Lose!';
    const draw = 'Same selection. Draw!';

    switch (selections) {
        case 'rs':
            postLog(advantageRock + playerWin);
            return 'player';
        case 'rp':
            postLog(advantagePaper + playerLose);
            return 'computer';
        case 'rr':
            postLog(draw);
            return 'draw';

        case 'pr':
            postLog(advantagePaper + playerWin);
            return 'player';
        case 'ps':
            postLog(advantageScissors + playerLose);
            return 'computer';
        case 'pp':
            postLog(draw);
            return 'draw';

        case 'sp':
            postLog(advantageScissors + playerWin);
            return 'player';
        case 'sr':
            postLog(advantageRock + playerLose);
            return 'computer';
        case 'ss':
            postLog(draw);
            return 'draw';
    }
};

function gameStart() {
    const log = document.querySelector('.log');
    const ui = document.querySelectorAll('.game-start');

    const humanScore = document.querySelector('#player');
    const computerScore = document.querySelector('#computer');

    if (!gameActive) {
        while (log.firstChild) {
            log.removeChild(log.firstChild);
        };

        humanScore.textContent = 0
        computerScore.textContent = 0

        ui.forEach((div) => {
            div.style.cssText = 'visibility: visible';
        });

        gameActive = true;
    }
};

function playGame(button) {
    if (gameActive) removeLog();
    
    gameStart();

    let winner = playRound(getHumanChoice(button), getComputerChoice());

    if (winner !== 'draw') {
        const scoreCounter = document.querySelector('#' + winner);
        
        let score = scoreCounter.textContent++
        
        let titleWinner = winner.charAt(0).toUpperCase() + winner.slice(1);

        if (score == 4) {
            postLog('------------------------------')
            postLog('Game Complete!');
            postLog(titleWinner + ' wins!');
            postLog('Select weapon to play again.', '', true);
            gameActive = false;
            return;
        };
    };

    postLog('Again?','',true);

    scrollToBottom();
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);
        });
    });