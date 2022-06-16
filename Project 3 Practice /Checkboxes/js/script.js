/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Checkboxes - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/*** 
 * Once loaded in the browser, you'll see two lists of checkboxes on the page 
 * Users should only be able to select one item from each section 
 * Currently, they can select as many as they want  
 * Your job is to prevent this by listening for a user click on the checkboxes
 * Then disabling or enabling all the possibilities except the one the user just clicked
 * Follow the code and instructional comments below to complete this exercise
***/


/* Variable to store all the checkboxes - You will use this in the event listener below to create a loop */
const checkboxes = document.querySelectorAll('.super-stats input');


/**
 * Event listener for checkboxes
 */
document.querySelector('.super-stats').addEventListener('change', e => {

  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

  // 1) Create a variable named clicked to store the checkbox input that was just clicked
  //    - `e.target` will be helpful here
var clicked = e.target;
  // 2) Create a variable named clickedType to store the `data-type` attribute of the checkbox that was just clicked
  //    - the `getAttribute` method will be helpful here
var clickedType = clicked.getAttribute('data-type');
  // 3) Log out the two variables you just created to confirm their values
  console.log(clicked);
  console.log(clickedType);

  // 4) Loop over the checkbox input elements
    // 5) In the loop, create a variable named `checkboxType` to store the `data-type` attribute of the `checkboxes[i]` in the loop's current iteration = `checkboxes[i].getAttribute('data-type');`
    for (let i=0; i<checkboxes.length; i++){
      var checkboxType = checkboxes[i].getAttribute('data-type');
      if ( checkboxType === clickedType && clicked !== checkboxes[i] ){
        if (clicked.checked) {
          checkboxes[i].disabled = true;
        } else {
          checkboxes[i].disabled = false;
        }
      }
    };
    // 6) Create an `if` statement to check which items to disable/enable.  The if statement needs two conditions: 
    //    - We only want to disable/enable the item if it has the same 'data-type' as the item that was checked/unchecked, 
    //    - So check if the checkboxType and the clickedType variables equal
    //    A2. - dont understand this part
    //    - We don't want to disable/enable the checkbox that was just clicked
    //    - So check that the clicked checkbox is not the checkbox in the loop's current iteration
    //    - These two conditions will look something like this - `(clickedType === checkboxType && clicked !== checkboxes[i])`

      // 7) In the `if` statement, create an `if/else` statement to check if the clicked checkbox is checked or unchecked
      //    - That condition will look something like this - `(clicked.checked)`;
      // 8) If the `clicked` checkbox is `checked`, use dot notation to set the `disabled` property of `checkboxes[i]` to true
      // 9) Else, set the `disabled` property of `checkboxes[i]` to false


  /* Helpful log statement to test that the listener is working - feel free to delete this or comment it out */
  console.log("The checkboxes' change event listener is functional!");

  // Don't touch ↓↓↓ Handles disabled styles for checkbox parent labels
  [...checkboxes].forEach(cb => (cb.disabled) ? cb.parentElement.classList.add('disabled') : cb.parentElement.classList.remove('disabled'));
});

// Don't touch ↓↓↓ Handles tab index for checkbox parent labels
[...checkboxes].forEach((cb) => {
  cb.addEventListener('focus', e => cb.parentElement.classList.add('focus'));

  cb.addEventListener('blur', e => {
    const active = document.querySelector('.focus');
    if (active) active.classList.remove('focus');
  })
});