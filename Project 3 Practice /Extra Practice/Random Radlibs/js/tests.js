/**
 * Treehouse FSJS Techdegree - Code Adventure
 * Random Radlibs - Tests
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

 /** THE TESTS - DON'T CHANGE ANYTHING BELOW *********************/

(function(){
  'use strict';

  /* Variable to store testText DOM element */
  const testText = document.querySelectorAll('.test-text');

  // Get test sentence from DOM.
  let testSentence = radlibEl.innerHTML;

  const testValue = radlib(testSentence);

  console.log(!testValue.includes('_'))
  console.log(testValue.split(' ').length)

  /** Test 1 **/
  function test1() {
    if (testValue.split(' ').length === 39 && 
    !testValue.includes('_')) {
      testText[0].innerHTML = `<span class="pass">Passed</span> - The returned sentence is the expected length and has been updated with your solution.`;
    } else {
      testText[0].innerHTML = `<span class="fail">Failed</span> - Your sentence is either not the right length or has not been completely updated. Either you're missing a word, or one of your radlib words is a double word, in which case you just need to add a hyphen or an underscore to those words.`;
    }
  }

  /** Test 2 **/
  function test2() {
    if (testValue.indexOf('noun') === -1 ||
        testValue.indexOf('plural_noun') === -1 ||
        testValue.indexOf('past_tense_verb') === -1) {
      testText[1].innerHTML = `<span class="pass">Passed</span> - The returned sentence has noun, plural noun and past tense verb word types.`;
    } else {
      testText[1].innerHTML = `<span class="fail">Failed</span> - You still have either a placeholder <span class="code">*noun*</span>, <span class="code">*plural_noun*</span>, or a <span class="code">*past_tense_verb*</span> in your sentence.  Double check that your conditionals are set up and working correctly.`;
    }
  }

  /** Test 3 **/
  function test3() {
    if (!testValue.includes('_') ||
        testValue.includes('null') ||
        testValue.includes('undefined')) {
      testText[2].innerHTML = `<span class="pass">Passed</span> - Your Radlib has been updated with your words and only String data types and known values are present in the return sentence.`;
    } else {
      testText[2].innerHTML = `<span class="fail">Failed</span> - You have either a null or undefined value or a non string data type in your sentence.`;
    }
  }

  /** Submit **/
  document.querySelector('#submit').addEventListener('click', e => {
    e.preventDefault();
    test1();
    test2();
    test3();
  })
}())