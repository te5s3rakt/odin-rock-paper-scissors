function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function getComputerChoice() {
    switch(getRandomInt(3)) {
        case 0:
            return "r";     //rock
            break;
        case 1:
            return "p";     //paper
            break;
        case 2:
            return "s";     //scissors
            break; 
    }
}

function getHumanChoice() {
    let choice = prompt("Choose: Rock (R), Paper (P), or Scissors (S)").charAt(0).toLowerCase();
}

console.log(getComputerChoice());