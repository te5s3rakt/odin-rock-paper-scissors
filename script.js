function getHumanChoice(choice) {
    let choiceAsString

    if (choice == 'rock') {
        choiceAsString = 'Player chooses Rock.';
    } else if (choice == 'paper') {
        choiceAsString = 'Player chooses Paper.';
    } else if (choice == 'scissors') {
        choiceAsString = 'Player chooses Scissors.';
    };

    postLog(choiceAsString, 'player');

    return choice.charAt(0).toLowerCase();
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    switch(getRandomInt(3)) {
        case 0:
            postLog('Computer chooses Rock.');
            return 'r';     // i.e. Rock
        case 1:
            postLog('Computer chooses Paper.');
            return 'p';     // i.e. Paper
        case 2:
            postLog('Computer chooses Scissors.');
            return 's';     // i.e. Scissors
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
            console.log(playerWin + advantageRock);
            return 'player';
        case 'rp':
            console.log(playerLose + advantagePaper);
            return 'computer';
        case 'rr':
            console.log(draw);
            return 'draw';

        case 'pr':
            console.log(playerWin + advantagePaper);
            return 'player';
        case 'ps':
            console.log(playerLose + advantageScissors);
            return 'computer';
        case 'pp':
            console.log(draw);
            return 'draw';

        case 'sp':
            console.log(playerWin + advantageScissors);
            return 'player';
        case 'sr':
            console.log(playerLose + advantageRock);
            return 'computer';
        case 'ss':
            console.log(draw);
            return 'draw';
    }
}

function playGame(totalRounds) {
    let round = 1;
    let humanScore = 0;
    let computerScore = 0;

    do {
        console.log('Round ' + round + '. FIGHT!');

        let winner = playRound(getHumanChoice(), getComputerChoice());
        
        if (winner == 'player') humanScore++;
        if (winner == 'computer') computerScore++;

        console.log('Player has ' + humanScore + ' points.');
        console.log('Computer has ' + computerScore + ' points.');
        
        round++;
    } while (round <= totalRounds);

    let gameWinner

    if (humanScore > computerScore) gameWinner = 'Player wins!';
    if (humanScore < computerScore) gameWinner = 'Computer wins!';
    if (humanScore === computerScore) gameWinner = 'It\'s a Draw.';

    console.log('Game Complete! ' + gameWinner + ' Refresh to play again.');
}

// REFACTOR

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

const againPrompt = {
    add: function() {
        const log = document.querySelector('.log');
        const existingPrompt = document.querySelector('#again');

        if (existingPrompt) return; // Prevent adding if it already exists

        const prompt = document.createElement('div');
        prompt.id = 'again';
        prompt.textContent = 'Again?';

        const blinker = document.createElement('span');
        blinker.classList.add('blinking-text');
        blinker.textContent = '_';

        prompt.appendChild(blinker);
        log.appendChild(prompt);
    },
    remove: function() {
        const existingPrompt = document.querySelector('#again');
        if (existingPrompt) existingPrompt.remove();
    }
};

function postLog(event, type) {
    const log = document.querySelector('.log');

    const newEvent = document.createElement('div');

    if (type == 'player') newEvent.style.cssText = 'align-self: flex-start';
    if (type == 'computer') newEvent.style.cssText = 'align-self: flex-end';

    newEvent.textContent = event;

    log.appendChild(newEvent);
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gameStart();
        againPrompt.remove();
        postLog('hello');
        postLog('hello');
        postLog('hello');
        againPrompt.add();
        scrollToBottom();
    });
});