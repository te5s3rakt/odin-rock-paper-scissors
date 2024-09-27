function getHumanChoice() {
    // Get first character of input string since each choice has a unique first letter anyway. How's that for data validation!
    
    let choice 

    do {
        choice = prompt('Choose: Rock (R), Paper (P), or Scissors (S)').charAt(0).toLowerCase();
    } while (choice !== 'r' && choice !== 'p' && choice !== 's');

    let choiceAsString

    if (choice == 'r') {
        choiceAsString = 'Rock';
    } else if (choice == 'p') {
        choiceAsString = 'Paper';
    } else if (choice == 's') {
        choiceAsString = 'Scissors';
    };

    console.log('Player chooses ' + choiceAsString + '.');

    return choice;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    switch(getRandomInt(3)) {
        case 0:
            console.log('Computer chooses Rock.');
            console.log('Good luck!');
            return 'r';     // i.e. Rock
        case 1:
            console.log('Computer chooses Paper.');
            console.log('Good luck!');
            return 'p';     // i.e. Paper
        case 2:
            console.log('Computer chooses Scissors.');
            console.log('Good luck!');
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

playGame(5)