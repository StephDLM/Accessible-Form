/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Form Input Validation - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2020
 */

"use strict";


/* Variable to store form inputs - You'll use these in the functions below' */
const form = document.querySelector("form");
const nameElement = document.querySelector("#name");
const email = document.querySelector("#email");
const languagesBox = document.querySelector('#languages-box');
const languageTotalElement = document.querySelector('#language-total');
let languageTotal = 0;

// Don't touch ↓↓↓ - Helper function for updating the total number of languages selected
document.querySelector('#languages').addEventListener('change', e => {
  (e.target.checked) ? languageTotal++ : languageTotal--;
  languageTotalElement.innerHTML = `Total: ${languageTotal}`;
});


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a function named `validationPass` and give it one parameter: `element`
  // Inside the function:
    // 1a. Give the `element` parameter's `parentElement` the className 'valid'
    // 1b. Remove from the `element` parameter's `parentElement` the className 'not-valid`
    // 1c. Hide the `lastElementChild` of the `element` parameter's `parentElement`


// 2. Create a function named `validationFail` and give it one parameter: `element`
  // Inside the function:
    // 2a. Give the `element` parameter's `parentElement` the className 'not-valid'
    // 2b. Remove from the `element` parameter's `parentElement` the className 'valid`
    // 2c. Display the `lastElementChild` of the `element` parameter's `parentElement`

    
//3. Complete the steps in the three functions below



/* Helper function to validate name input */
const nameValidator = () => {

  // Tests that there is at least a first name containing only letters, and allows for a middle and last name.
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameElement.value);

  // YOUR CODE GOES HERE!!!

  // 3a. Create an if/else statement.
    // If `nameIsValid` equals true, call the `validationPass` function and pass it the `nameElement` variable from above as an argument
    // Else call the `validationFail` function and pass it the `nameElement` variable from above as an argument

  
  return nameIsValid;
}


/* Helper function to validate email input */
const emailValidator = () => {

  // Tests that email is validly formatted.
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);

  // YOUR CODE GOES HERE!!!

  // 3b. Create an if/else statement.
    // If `emailIsValid` equals true, call the `validationPass` function and pass it the `email` variable from above as an argument
    // Else call the `validationFail` function and pass it the `email` variable from above as an argument

  
  return emailIsValid;
}


/* Helper function to validate language section */
const languageValidator = () => {

  // Tests that the `languageTotal` variable provided for you above equals an integer greater than zero.
  const languageSectionIsValid = languageTotal > 0;

  // YOUR CODE GOES HERE!!!

  // 3c. Create an if/else statement.
    // If `languageSectionIsValid` equals true, call the `validationPass` function and pass it the `languagesBox` variable from above as an argument
    // Else call the `validationFail` function and pass it the `languagesBox` variable from above as an argument


  // Tests that the `languageTotal` variable provided you above equals an integer greater than zero.
  return languageSectionIsValid;
}



/* OPTIONAL: Add real-time validation */
// To add real time validation, use the .addEventListener() method on the form elements/sections
// Use events like `keyup` and `change`
// As the callback, use the validation functions above, but remember, 
// Don't use parens when passing a reference to a function as a callback
// Something like: `nameElement.addEventListener('keyup', nameValidator);`



/* Submit listener on the form element */
form.addEventListener('submit', e => {

  // IMPORTANT NOTE: Firing the submit event will refresh the page and reset the form, erasing your log statements.
    // This can be prevented by calling `e.preventDefault()` here in this submit handler, or
    // by clicking on the gear icon in the upper right hand corner of the Chrome DevTools console to enter the settings menu,
    // locating the "Console" section and selecting the "Preserve log upon navigation" option.

  // IMPORTANT NOTE: If you call `e.preventDefault()` outside of a conditional, keep in mind that when this exercise is completed, 
    // the form submission should only be prevented if one or more of the required fields is invalid.  
    // Otherwise the form should be allowed to submit.  But it's okay to temporarily disrupt that behavior for testing purposes.

  // IMPORTANT NOTE: Also keep in mind that the form's submission behavior will differ depending on whether
    // this project is being live served with a server or just viewed locally in the browser.  


  // Preventing form submission for testing purposes. Remove or comment out as needed and before completion
  e.preventDefault();


  if (!nameValidator()) {
    console.log('Invalid name prevented submission');
    e.preventDefault();
  }

  if (!emailValidator()) {
    console.log('Invalid email prevented submission');
    e.preventDefault();
  }

  if (!languageValidator()) {
    console.log('Invalid language total prevented submission');
    e.preventDefault();
  }

  // Submit handler test log - Feel free to delete this or comment it out
  console.log('Submit handler is functional!');
});


// Don't touch ↓↓↓ - Handles tab index for checkbox parent labels
[...document.querySelectorAll('#languages inputs')].forEach(cb => {
  cb.addEventListener('focus', e => cb.parentElement.classList.add('focus'));

  cb.addEventListener('blur', e => {
    const active = document.querySelector('.focus');
    if (active) active.classList.remove('focus');
  })
});
