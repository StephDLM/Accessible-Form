/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Random Radlibs - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

  // Variable to store the radlib display DOM element - you'll use this variable later
  const radlibEl = document.querySelector('#radlib');

/**
 * @description A sort of random Mad Lib generator
 *              Takes in a sentence with word form placeholders in square brackets 
 *              and replace them with random words from local arrays
 *              You won't ever call this function, as it's called for you in the custom tests in the `js/tests.js` file
 * @param radlibSentence - String
 * @returns String - updated radlibSentence
 */
function radlib(radlibSentence) {

  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge
  // The code you write in this function will run automatically every time the page in Chrome is refreshed
  // So use VS Code and the handy Live server extension to make the Chrome page refresh automatically every time you sve a file
  // That extension can be found here - https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
  
  // 1) Add at least five funny strings to the arrays below  
     // Be sure to use hyphens or underscores for multi-word entries, like 'manhole-cover'
    
    // Add nouns - person, place or thing: example - 'president', 'jail', dumpster-fire'
    const nounArr = ['', '', '', '', ''];
  
    // Add plural nouns - multiple persons, places, or things: example - 'clowns', 'mental-institutions', 'landmines'
    const pluralNounArr = ['', '', '', '', ''];
    
    // Add past tense verbs - action word that already happened: example - 'jackknifed', 'bamboozled', 'frazzled'
    const pastTenseVerbArr = ['', '', '', '', ''];
  
  
  // 2) Create a function to return a random word from one of the arrays above
        // The function should take one parameter: arr
        // Create a variable to store a random number from 0 to the length of the arr parameter
        // Use the random number variable and bracket notation, like so, `arr[randomNumber]` to `return` 
        // a random word from the array that will get passed in when the function is called

  
  // The variable below turns the `radlibSentence` parameter from line 22 into an array to make it easier to work with
  const radlibSentenceArray = radlibSentence.split('*');

  // helpful log statement
  console.log(radlibSentenceArray);


  // 3) Loop over the `radlibSentenceArray` variable above
     // Inside the loop, create three conditionals
       // If the radlibSentenceArray[i] === 'noun', then radlibSentenceArray[i] should be reassigned 
       // to equal a call to the random word function you created above
       // and the `nounArr` array you filled in above should be passed in as the argument
       // Sort of like so, `radlibSentenceArray[i]` = `randomWord(nounArr)`
     
     // Still inside the loop, create a new similar conditional using 'plural_noun' and the `pluralNounArr` array you filled out above

     // Still inside the loop, create a final conditional using 'past_tense_verb' and the `pastTenseVerbArr` array you filled out above


  // The variable below turns the `radlibSentenceArray` back into a string
  const rejoinedSentence = radlibSentenceArray.join('');

  // helpful log statement
  console.log(rejoinedSentence);

  // 4) Set's the innerHTML of the `radlibEl` variable from the top of the file equal to the `rejoinedSentence` variable.

  
  // return the updated `rejoinedSentence` variable to update the browser window and provide a value for the test in the `js/tests.js` file
  return rejoinedSentence;
}