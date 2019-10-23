/* Ask how many dice would you like to use?
Capture said dice number with x
*/

//can I do multiple java sheets for the same website. is this effective or do I just need to make it work? do I plug it in the same way that one does with html? does this work with css?
// can functions not go in each other?
//on click this function makes these other two functions happen
function mainThing()    {
    
    diceRoll()
    lucky()
    // startOver()
}
function diceRoll(){
    desiredRoll()
    diceRolled=youRolled()
    outOf()
}
function desiredRoll(){
    let desiredDice = document.getElementById("desiredDiceCapture").value;
    //goes to function diceRandom and assigns a random number
    //puts a random number at the demo id. (Note I'd like to put an icon here instead)
    //this outputs the result as I'd like and is good
    document.getElementById("printDesiredLocation").innerHTML = `You wanted to roll a(n) ${desiredDice}`;
    return desiredDice
}

function youRolled() {
    //captures their answer
    let x = document.getElementById("diceSidesCapture").value;
    //goes to function diceRandom and assigns a random number
    let diceRolls=diceRandom(x)
    //puts a random number at the demo id. (Note I'd like to put an icon here instead)
    //this outputs the result as I'd like and is good
    document.getElementById("printRollResult").innerHTML = `You Rolled a ${diceRolls}`;
    return diceRolls;
}
function outOf() {
    //this function captures their response and prints their response appropriately
    let x = document.getElementById("diceSidesCapture").value;
    document.getElementById("printOutOfLocation").innerHTML = "Out of " + x;
}
function lucky()    {
    if (desiredRoll()==diceRolled) {
        document.getElementById("luckyLocation").innerHTML =  "What fabulous luck! You are a champion!";
    } else {
        document.getElementById("luckyLocation").innerHTML = "Rotten luck! Try again!";
    }
    // let x = document.getElementById("loserWinner").value;
    // if (x==diceRolls) {
    //     document.getElementById("youLucky").innerHTML = "What fabulous luck! You are a champion!"
    // } else {
    //     document.getElementById("youLucky").innerHTML = "Rotten luck! Try again!"
    // }
    // return unlucky
}

function diceRandom (num) {
    //this function rolls a dice based on their input and returns it
    let diceRoll = Math.random() * num/*"demo" or x or what?*/; 
    //let diceRoll = Math.random() * 6; 
    diceRoll = Math.ceil(diceRoll);
        
     
    
    
    return diceRoll
    
    
    }
    let dice1 = diceRandom;



    /*document.getElementById("dice1").innerHTML = dice1;
    let dice2 = diceRandom;
    document.getElementById("dice1").innerHTML = dice2;
    let dice3 = diceRandom;
    document.getElementById("dice1").innerHTML = dice3;
    let dice4 = diceRandom;
    document.getElementById("dice1").innerHTML = dice4;
    let dice5 = diceRandom;
    document.getElementById("dice1").innerHTML = dice5;
    let dice6 = diceRandom;
    document.getElementById("dice1").innerHTML = dice6;
    console.log(dice1())
    console.log(dice2())
    console.log(dice3())
    console.log(dice4())
    console.log(dice5())
    console.log(dice6())*/

    /*function startOver()    {
    document.getElementById("tryAgain").innerHTML = "Roll different sided dice?"
}*/


    /*function iconSelection(diceRoll) {
    let y;
    if ("demo"==1) {
        y = <i class="fas fa-dice-one"></i>
        
    }
    if (diceRoll==2) {
        y = <i class="fas fa-dice-two"></i>
        
    }
    if (diceRoll==3) {
        y = <i class="fas fa-dice-three"></i>
        
    }
    if (diceRoll==4) {
        y = <i class="fas fa-dice-four"></i>
        
    }
    if (diceRoll==5) {
        y = <i class="fas fa-dice-five"></i>
        
    }
    if (diceRoll==6) {
        y = `<i class="fas fa-dice-six"></i>`
        
    }
    if (diceRoll>6) {
        y = `<i class="fas fa-dice-dice"></i>`
        
    }
    document.getElementById("diceIcon").innerHTML = y;
}
*/
