let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    switch(getRandomInt(3)) {
        case 0:
            return 'r';     // i.e. Rock
            break;
        case 1:
            return 'p';     // i.e. Paper
            break;
        case 2:
            return 's';     // i.e. Scissors
            break; 
    }
};

function getHumanChoice() {
    // Get first character of input string since each choice has a unique first letter anyway. How's that for data validation!
    
    let choice = prompt('Choose: Rock (R), Paper (P), or Scissors (S)').charAt(0).toLowerCase();
    return choice;
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

playRound(humanSelection, computerSelection);


// Rock vs. Scissors: Rock wins (rock smashes scissors).
// Rock vs. Paper: Paper wins (paper covers rock).
// Scissors vs. Paper: Scissors wins (scissors cuts paper).
// Rock vs. Rock: Draw.
// Paper vs. Paper: Draw.
// Scissors vs. Scissors: Draw.