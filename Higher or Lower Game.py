# imports the random module
import random


# defines the main procedure
def play():

    go = 'True'

    # generates the first random number, requests user input and validates it
    integer = random.randint(1, 100)
    print(f"The number is {integer}. Higher (H) or Lower (L)?")
    userInp = input("> ").upper()
    while not(userInp == 'H' or userInp == 'L'):
        print("That was not a correct input, please enter 'H' for Higher or 'L' for Lower")
        userInp = input("> ").upper()

    # loop until user loses
    while go == 'True':

        # generate a new random number
        newInteger = random.randint(1, 100)

        # check if the new number being higher or lower matches user input
        if (userInp == 'H' and newInteger > integer) or (userInp == 'L' and newInteger < integer):
            print(f"Correct! The number was {newInteger}. Higher (H) or Lower (L)?")
            userInp = input("> ").upper()
            while not(userInp == 'H' or userInp == 'L'):
                print("That was not a correct input, please enter 'H' for Higher or 'L' for Lower")
                userInp = input("> ").upper()

            # set new number to old variable in order to repeat cycle
            integer = newInteger    
        
        # end game if user input does not meet conditions, and ask user if they want to play again
        else:
            go = 'False'
            print("You lost the game!\nWould you like to play again?")
            answer = input("> ").upper()
            while not(answer == 'Y' or answer == 'N'):  
                print("It seems what you entered is incorrect. Please re-enter.\nWould you like to play again? Enter Yes (Y) or No (N) to play...")
                answer = input("> ").upper()
            else:
                if answer == 'Y':
                    play()
                elif answer == 'N':
                    print("See you later!")   


# defines main menu procedure which asks user if they want to play
def mainMenu():
    print("Hey! Welcome to Higher or Lower!\nEnter Yes (Y) or No (N) to play...")
    answer = input("> ").upper()
    while not(answer == 'Y' or answer == 'N'):  
        print("It seems what you entered is incorrect. Please re-enter.\nEnter Yes (Y) or No (N) to play...")
        answer = input("> ").upper()
    else:
        if answer == 'Y':
            play()
        elif answer == 'N':
            print("See you later!")


# call the main menu procedure, therefore beginning game
mainMenu()        