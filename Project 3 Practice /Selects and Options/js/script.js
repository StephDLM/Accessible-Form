/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Selects and Options - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/***
 * When a user selects a shirt from the drop down menu, that shirt's image should be highlighted on the page
 * Follow the code and instructional comments below to complete this exercise
***/

  const shirtImageElements = document.querySelectorAll('.shirt-image');
  const shirtSelectElement = document.querySelector('#shirt-select-element');
  const shirtOptionElements = document.querySelectorAll('#shirt-select-element option');

// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1) Follow the steps below to choose which option will be displayed in the T Shirt field
  // 1a) Log out the variables above to confirm their values
  console.log(shirtImageElements);
  console.log(shirtSelectElement);
  console.log(shirtOptionElements);
  // 1b) Log out a single shirt color option using the last variable and bracket notation
    // Example: `console.log(shirtOptionsElements[1])` 
    console.log(shirtOptionElements[1]);

  // 1c) Use dot notation to set the `selected` property to true on the `option` element you selected above
    // Example: `shirtOptionsElements[1].selected = true;` 
    shirtOptionElements[3].selected = 'true';

  // 1d) Refresh the browser to see the new value in the `select` element
  // 1e) Experiment with setting the `selected` property to true or false on different option elements to see the results
  shirtOptionElements[2].selected = 'false';

/**
 * Event listener for select element
 */
shirtSelectElement.addEventListener('change', e => {

// 2) Follow the steps below to highlight the shirt image that matches the selection in the drop down menu
  // 2a) Use `event.target` to log out the value of the `select` element
    // Example: `console.log(event.target.value);`
    console.log(e.target.value);

  // 2b) Loop to iterate over the `shirtImageElements` variable above
    // 2c) Inside the loop, create the following two variables:
      // One to store the alt attribute of the image at the loop's current iteration, like so: YourImgVariableName[i].alt
      // One for the `event.target.value`
      for ( let i=0; i<shirtImageElements.length; i++ ){
        const shirtAltImage = shirtImageElements[i].alt
        const shirtChosen = e.target.value;
        console.log(shirtAltImage);
        console.log(shirtChosen);
          if (shirtAltImage === shirtChosen) {
            shirtImageElements[i].classList.add('chosen');
          } else {
            shirtImageElements[i].classList.remove('chosen');
          }

      };
    // 2d) Log out the two variables, refresh the page, and select a new shirt to confirm their values
    // 2e) Still inside the loop, create an if/else statement 
    // 2f) If the two variables you just created are equal, use the `.classList.add()` method to add the 'chosen' className to the img element
    // 2g) Else use the `.classList.remove()` method to remove the 'chosen' className from the from the img element

        console.log("The select element's change event listener is functional!");
    });

