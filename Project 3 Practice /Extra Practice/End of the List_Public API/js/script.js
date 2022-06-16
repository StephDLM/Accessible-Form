/**
 * Treehouse FSJS Techdegree
 * End of the List - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons */
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');


/* Variable to store NodeList of DOM elements */
const items = document.querySelectorAll('.items');

// Helpful log statement
console.log(items);

// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a variable to store the current-index - initial value set to 0



// 2. Create a function called increment - Inside the function body you'll do three things
  // 2a. Target the item at the `current-index` and set its `innerHTML` to an empty string - ''
  // 2b. Use a conditional to check if the `current-index` is equal to `items.length - 1` 
      // If `current-index` is equal to `items.length - 1`, set the `current-index` = 0
      // Otherwise, just add 1 to the `current-index`
  // 2c. Target the item at the `current-index` and set its `innerHTML` = '&#9786;' - (this is the code for a smiley face)



// 3. Using the instructions in step 2 as an example, create a decrement function
      // This is just like the increment function, but instead of checking if `current-index` is at the end of the string
      // Check if it is at the beginning of the string, or the `0` index
      // And instead of adding 1, subtract 1  


/**
 * Event listeners for buttons - Invoke your functions in the body of the callback
 */

/* Next button listener */
nextBtn.addEventListener('click', () => {

  // Invoke your increment function here


  // Helpful log statement to test function
  console.log('Next btn is functional!');
});


/* Prev button listener */
prevBtn.addEventListener('click', () => {

  // Invoke your decrement function here


  // Helpful log statement to test function
  console.log('Prev btn is functional!');
});