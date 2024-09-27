let humanScore = 0;
let computerScore = 0;

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
            humanScore++;
            return playerWin + advantageRock;
        case 'rp':
            computerScore++;
            return playerLose + advantagePaper;
        case 'rr':
            return draw;

        case 'pr':
            humanScore++;
            return playerWin + advantagePaper;
        case 'ps':
            computerScore++;
            return playerLose + advantageScissors;
        case 'pp':
            return draw;

        case 'sp':
            humanScore++;
            return playerWin + advantageScissors;
        case 'sr':
            computerScore++;
            return playerLose + advantageRock;
        case 'ss':
            return draw;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));


// Rock vs. Scissors: Rock wins (rock smashes scissors).
// Rock vs. Paper: Paper wins (paper covers rock).
// Scissors vs. Paper: Scissors wins (scissors cuts paper).
// Rock vs. Rock: Draw.
// Paper vs. Paper: Draw.
// Scissors vs. Scissors: Draw.