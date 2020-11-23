# Javascript Quiz

## Description

This is a simple quiz application, designed to test your knowledge of Javascript.

The user has 60 seconds to answer 6 simple questions about Javascript.

Each correct answer awards the user 5 points.

Each incorrect answer awards no points, and subtracts 10 seconds from the timer.

After the user completes all 6 questions, or runs out of time, they are taken to the results page, which displays their score, and allows them to enter their name and save their score to the highscores page.

## Usage

To begin, the user is presented with a short description of the quiz, and 2 buttons to choose from: 'Start Quiz' or 'View Highscores'.

Selecting 'View Highscores' brings the user to a page where they may view the top 10 previous highscores in localStorage.

By selecting 'Start Quiz', the user begins the quiz and the timer begins counting down from 60 seconds.

When the user selects the correct answer, they will see their selection box turn green to indicate it is correct. If they select an incorrect answer, their selection box will turn red, indicating that it is wrong.

As well, if the user selects the correct answer, the score will be dynamically updated by adding 5 points. 

But, if the user selects an incorrect answer, their score will not change. However, their alloted time left to complete the quiz will be reduced by 10 seconds.

Once 60 seconds has elapsed, or the user answers all 6 questions, they are taken to the results page. Here they will see their score, and be given several options.

If the user wants to save their score, they can enter their name in the textbox input, and press the 'Save Your Score!' button. This will then redirect them back to the home page.

The user may also select the 'Try Again' button to retake the quiz.

If the user doesn't want to save their score, and just return to the home page, they can simply select 'Home Page' to be redirected.

## Website

Test your Javascript skills here:

[Javascript Quiz](https://mikeh138.github.io/JS-Quiz/)

![Screenshot of the Quiz in progress]()

## Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)  

## License

&copy; 2020 Mike Henson  

Licensed under the [MIT](LICENSE.txt) license.