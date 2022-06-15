//select and store input variables
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

/**
 * 
 * VALIDATORS
 *  
 */

// Can only contain letters a-z in lowercase
function isValidUsername(username) {
//test method to call on regular expression, make return true or false
 return /^[a-z]+$/.test(username);
}

// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
//hide password via HTML, and make sure it has uppercase, lowercase, and #s
  return /[a-z]/.test(password) && 
        /[A-Z]/.test(password) && 
        /[0=9]/.test(password)
}
//another way of doing this is using the Lookaheads in reg expression
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/


// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
//newer code
  return /^\D*\d{3}\D*\d{3}\D*\d{4}\D*$/.test(telephone);

//order code :return /^\(\d{3}\)\s\d{3}-\d{4}$/.test(telephone)
}
  

// Must be a valid email address: add anything that isn't @ or . 
function isValidEmail(email) {
  return /^[^@]+@+[^@.]+\.[a-z]+$/i.test(email);
}

/**
 * 
 * FORMATTING FUNCTIONS
 * 
 */

function formatTelephone(text) {
  //make sure that telephone is replaced to this format (xxx)xxx-xxxx
  //Create a regular expression, and add paranthesis!
  const regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;
  //replace regex, use capture groups to build new string, and return format
  return text.replace(regex, '($1) $2-$3');

}
/**
 * 
 * SET UP EVENTS
 * 
 */

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(isValidUsername));

passwordInput.addEventListener("input", createListener(isValidPassword));

emailInput.addEventListener("input", createListener(isValidEmail));

telephoneInput.addEventListener("input", createListener(isValidTelephone));

telephoneInput.addEventListener("blur", e => {
  e.target.value = formatTelephone(e.target.value);
});