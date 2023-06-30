// import package to read input from console
const prompt = require('prompt-sync')();

// defines the main procedure
const play = () => {

    let go = true

    // generates the first random number, requests user input and validates it
    let integer = Math.floor(Math.random() * 101)
    console.log(`The number is ${integer}. Higher (H) or Lower (L)?`)
    let userInp = prompt('> ').toUpperCase()
    while (userInp != 'H' && userInp != 'L') {
        console.log("That was not a correct input, please enter 'H' for Higher or 'L' for Lower")
        userInp = prompt('> ').toUpperCase()
    };

    // loop until user loses
    while (go === true) {

        // generate a new random number
        let newInteger = Math.floor(Math.random() * 101)

        // check if the new number being higher or lower matches user input
        if ((userInp == 'H' && newInteger > integer) || (userInp == 'L' && newInteger < integer)) {
            console.log(`Correct! The number was ${newInteger}. Higher (H) or Lower (L)?`)
            userInp = prompt("> ").toUpperCase()
            while (userInp != 'H' && userInp != 'L') {
                console.log("That was not a correct input, please enter 'H' for Higher or 'L' for Lower")
                userInp = prompt('> ').toUpperCase()
            };

            // set new number to old variable in order to repeat cycle
            integer = newInteger
        }

        // end game if user input does not meet conditions, and ask user if they want to play again
        else {
            go = false
            console.log('You lost the game!\nWould you like to play again?')
            let answer = prompt("> ").toUpperCase()
            while (answer != 'Y' && answer != 'N') {
                console.log("It seems what you entered is incorrect. Please re-enter.\nWould you like to play again? Enter Yes (Y) or No (N) to play...")
                answer = prompt("> ").toUpperCase()
            };

            if (answer === 'Y') {
                play();
            }

            else if (answer === 'N') {
                console.log('See you later!')
            };
        };
    };
};

// defines main menu procedure which asks user if they want to play
const mainMenu = () => {
    console.log("Hey! Welcome to Higher or Lower!\nEnter Yes (Y) or No (N) to play...")
    let answer = prompt("> ").toUpperCase()
    while (answer != 'Y' && answer != 'N') {
        console.log("It seems what you entered is incorrect. Please re-enter.\nEnter Yes (Y) or No (N) to play...")
        answer = prompt("> ").toUpperCase()
    };

    if (answer === 'Y') {
        play();
    }

    else if (answer === 'N') {
        console.log('See you later!')
    };
};

// call the main menu procedure, therefore beginning game
mainMenu();