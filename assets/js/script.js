/**
 * Set number of lives on difficulty button click
 */
document.getElementById('easy-choice').onclick = function(){
    document.getElementById('lives').innerHTML = '20'
}
document.getElementById('medium-choice').onclick = function(){
    document.getElementById('lives').innerHTML = '15'
}
document.getElementById('hard-choice').onclick = function(){
    document.getElementById('lives').innerHTML = '10'
}
/**
 * Hide rules window after play button click
 */
window.onload = function(){
    document.getElementById('rules').style.visibility = 'visible';
}

document.getElementById('play-button').onclick = function(){
if (document.getElementById('lives').innerHTML !== 'Choose'){
    document.getElementById('rules').style.visibility = 'hidden';
}else {
    alert('Please choose a difficulty')
}
}

document.getElementById('help-button').onclick = function(){
    document.getElementById('rules').style.visibility = 'visible';
}

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
 shoot.addEventListener('click',() => {    
     computerChoice();
     checkWinner();    
 });
 function computerChoice() {
     if(shoot.innerText == 'Shoot!' && playerChoice.innerHTML !== ''){
 
     shoot.innerText = 'Play Again!'
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
     }else if (playerChoice.innerHTML == '' && shoot.innerText == 'Shoot!'){
         alert('Please make a selection before clicking Shoot!');
     }else {
         playerChoice.innerHTML = '';
         playerChoice.style.backgroundColor = 'white';
         compChoice.innerHTML = '';
         compChoice.style.backgroundColor = 'white';
         shoot.innerText = 'Shoot!'
 }
 }
 
 /**
  * Function for checking if player selection area beats computer selection area
  * on shoot button click
  */
 
 function checkWinner() {
      if(playerChoice.innerHTML == rock.innerHTML){
         if(compChoice.innerHTML == scissors.innerHTML){
             incrementPlayerScore();
             playerChoice.style.backgroundColor = 'green';
             compChoice.style.backgroundColor = 'red';
         }else if(compChoice.innerHTML == lizard.innerHTML){
             incrementPlayerScore();
             playerChoice.style.backgroundColor = 'green';
             compChoice.style.backgroundColor = 'red';
         }else if(compChoice.innerHTML == paper.innerHTML){
             incrementCompScore();
             playerChoice.style.backgroundColor = 'red';
             compChoice.style.backgroundColor = 'green';
         }else if(compChoice.innerHTML == spock.innerHTML){
             incrementCompScore();
             playerChoice.style.backgroundColor = 'red';
             compChoice.style.backgroundColor = 'green';
         }else if(compChoice.innerHTML == rock.innerHTML){
             playerChoice.style.backgroundColor = 'yellow';
             compChoice.style.backgroundColor = 'yellow';
         }
     }else if(playerChoice.innerHTML == paper.innerHTML){
         if(compChoice.innerHTML == rock.innerHTML){
             incrementPlayerScore();
             playerChoice.style.backgroundColor = 'green';
             compChoice.style.backgroundColor = 'red';
         }else if(compChoice.innerHTML == spock.innerHTML){
             incrementPlayerScore();
             playerChoice.style.backgroundColor = 'green';
             compChoice.style.backgroundColor = 'red';
         }else if(compChoice.innerHTML == scissors.innerHTML){
             incrementCompScore();
             playerChoice.style.backgroundColor = 'red';
             compChoice.style.backgroundColor = 'green';
         }else if(compChoice.innerHTML == lizard.innerHTML){
             incrementCompScore();
             playerChoice.style.backgroundColor = 'red';
             compChoice.style.backgroundColor = 'green';
         }else if(compChoice.innerHTML == paper.innerHTML){
             playerChoice.style.backgroundColor = 'yellow';
             compChoice.style.backgroundColor = 'yellow';
         }
     }else if(playerChoice.innerHTML == scissors.innerHTML){
        if(compChoice.innerHTML == paper.innerHTML){
            incrementPlayerScore();
            playerChoice.style.backgroundColor = 'green';
            compChoice.style.backgroundColor = 'red';
        }else if(compChoice.innerHTML == lizard.innerHTML){
            incrementPlayerScore();
            playerChoice.style.backgroundColor = 'green';
            compChoice.style.backgroundColor = 'red';
        }else if(compChoice.innerHTML == rock.innerHTML){
            incrementCompScore();
            playerChoice.style.backgroundColor = 'red';
            compChoice.style.backgroundColor = 'green';
        }else if(compChoice.innerHTML == spock.innerHTML){
            incrementCompScore();
            playerChoice.style.backgroundColor = 'red';
            compChoice.style.backgroundColor = 'green';
        }else if(compChoice.innerHTML == scissors.innerHTML){
            playerChoice.style.backgroundColor = 'yellow';
            compChoice.style.backgroundColor = 'yellow';
        }
    }else if(playerChoice.innerHTML == lizard.innerHTML){
        if(compChoice.innerHTML == spock.innerHTML){
            incrementPlayerScore();
            playerChoice.style.backgroundColor = 'green';
            compChoice.style.backgroundColor = 'red';
        }else if(compChoice.innerHTML == paper.innerHTML){
            incrementPlayerScore();
            playerChoice.style.backgroundColor = 'green';
            compChoice.style.backgroundColor = 'red';
        }else if(compChoice.innerHTML == rock.innerHTML){
            incrementCompScore();
            playerChoice.style.backgroundColor = 'red';
            compChoice.style.backgroundColor = 'green';
        }else if(compChoice.innerHTML == scissors.innerHTML){
            incrementCompScore();
            playerChoice.style.backgroundColor = 'red';
            compChoice.style.backgroundColor = 'green';
        }else if(compChoice.innerHTML == lizard.innerHTML){
            playerChoice.style.backgroundColor = 'yellow';
            compChoice.style.backgroundColor = 'yellow';
        }
    }else if(playerChoice.innerHTML == spock.innerHTML){
        if(compChoice.innerHTML == scissors.innerHTML){
            incrementPlayerScore();
            playerChoice.style.backgroundColor = 'green';
            compChoice.style.backgroundColor = 'red';
        }else if(compChoice.innerHTML == rock.innerHTML){
            incrementPlayerScore();
            playerChoice.style.backgroundColor = 'green';
            compChoice.style.backgroundColor = 'red';
        }else if(compChoice.innerHTML == paper.innerHTML){
            incrementCompScore();
            playerChoice.style.backgroundColor = 'red';
            compChoice.style.backgroundColor = 'green';
        }else if(compChoice.innerHTML == lizard.innerHTML){
            incrementCompScore();
            playerChoice.style.backgroundColor = 'red';
            compChoice.style.backgroundColor = 'green';
        }else if(compChoice.innerHTML == spock.innerHTML){
            playerChoice.style.backgroundColor = 'yellow';
            compChoice.style.backgroundColor = 'yellow';
        }
    }
 }
 /**
  * Function for incrementing player score
  * and changing difficulty level on reaching certain player score level
  */
  function incrementPlayerScore() {
 
     let oldScore = parseInt(document.getElementById('playerScore').innerText);
     document.getElementById('playerScore').innerText = ++oldScore;
 }
 
 /**
  * Function for incrementing computer score and reducing lives number
  */
  function incrementCompScore() {
 
     let oldScore = parseInt(document.getElementById('compScore').innerText);
     document.getElementById('compScore').innerText = ++oldScore;
     let oldLives = parseInt(document.getElementById('lives').innerText);
     document.getElementById('lives').innerText = --oldLives;

 }

 /**
  * Win screen appears when player score equals 10
  * or lose screen appears when lives equal 0
  */
if (document.getElementById('playerScore').innerHTML == '10'){
    document.getElementById('win-screen').style.visibility = 'visible';
}else if (document.getElementById('lives').innerHTML == '0'){
    document.getElementById('lose-screen').style.visibility = 'visible';
} 