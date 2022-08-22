/**
 * Function for putting selection choice into player selection area
 * on selection button click
 */
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let playerChoice = document.getElementById('my-choice');
rock.addEventListener("click", fillChoiceRock);
paper.addEventListener("click", fillChoicePaper);
scissors.addEventListener("click", fillChoiceScissors);
lizard.addEventListener("click", fillChoiceLizard);
spock.addEventListener("click", fillChoiceSpock);

function fillChoiceRock(){
    playerChoice.innerHTML = rock.innerHTML;
}
function fillChoicePaper(){
    playerChoice.innerHTML = paper.innerHTML;
}
function fillChoiceScissors(){
    playerChoice.innerHTML = scissors.innerHTML;
}
function fillChoiceLizard(){
    playerChoice.innerHTML = lizard.innerHTML;
}
function fillChoiceSpock(){
    playerChoice.innerHTML = spock.innerHTML;
}

/**
 * Function for filling computer selection area on shoot button click
 */
let compChoice = document.getElementById('comp-choice');
let shoot = document.getElementById('shoot');
shoot.addEventListener("click", computerChoice);
function computerChoice() {
    const randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
        case 1:
            compChoice.innerHTML = rock.innerHTML;
            break;
        case 2:
            compChoice.innerHTML = paper.innerHTML;
            break;
        case 3:
            compChoice.innerHTML = scissors.innerHTML;
            break;
        case 4:
            compChoice.innerHTML = lizard.innerHTML;
            break;
        case 5:
            compChoice.innerHTML = spock.innerHTML;
            break;
    }
}

/**
 * Function for checking if player selection area beats computer selection area
 * on shoot button click
 */

/**
 * Function for incrementing player score
 */

/**
 * Function for incrementing computer score and reducing lives number
 */

/**
 * Function for lose screen when lives equal 0
 */

/**
 * Function for win screen when computer score reaches 18
 */