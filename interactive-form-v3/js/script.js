// console.log('test');

const userName = document.getElementById("name");
    userName.focus();

const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');
    // console.log(jobRole);
    // console.log(otherJobRole);
    otherJobRole.style.display = "none";

//Job role
jobRole.addEventListener("change", (e) => {
    if (e.target.value == "other"){
        otherJobRole.style.removeProperty("display");
    } else {
        otherJobRole.style.display = "none";

    }


});

//T-shirt
 const shirtDesign = document.getElementById("shirt-designs")
 const shirtColor = document.getElementById("color")
 const colorOption = shirtColor.children;
    // console.log(shirtDesign);
    // console.log(shirtColor);
    // console.log(colorOption);
//disable color field 
    shirtColor.disabled = true;
//create an eventListener for shirt design 
shirtDesign.addEventListener("change", (e) => {
    shirtColor.disabled = false;
    for ( let i=0; i<colorOption.length; i++ ) {
        const shirtValue = e.target.value;
        const dataTheme = colorOption
            if (shirtValue !== shirtColor.children[i].getAttribute('data-theme')){
                colorOption[i].hidden = true;
                colorOption[i].removeAttribute("selected");
            } else {
                colorOption[i].hidden = false;
                colorOption[i].setAttribute("selected", true);
        };
    }
})

//Register for Activities 
const activities = document.getElementById("activities");
const totalCost = document.getElementById("activities-cost"); 
let totalCostOfActivities = 0;

activities.addEventListener ("change", (e) => {
    //cost of activity that you just clicked
     let dataCost = +(e.target.getAttribute("data-cost"));
          if (e.target.checked) {
            totalCostOfActivities += dataCost;
          } else {
            totalCostOfActivities -= dataCost;
          }
          totalCost.innerHTML = ` Total: $${totalCostOfActivities}`;
        });

//variables created for payment section
const paymentMethod = document.querySelector("#payment")
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

paypal.style.display = "none";
bitcoin.style.display = "none";

//select the second child of the payment variable -by default, grab first children
paymentMethod.children[1].setAttribute("selected", "selected");

//crete an event listener that hides payment methods when not selected but shows if selected 
paymentMethod.addEventListener ("change", (e) =>{
    if (e.target.value === "credit-card") {
        creditCard.style.display = "block";
        paypal.style.display = "none";
        bitcoin.style.display = "none";
    } else if (e.target.value === "paypal"){
        creditCard.style.display = "none";
        paypal.style.display = "block";
        bitcoin.style.display = "none";
    } else if (e.target.value === "bitcoin"){
        creditCard.style.display = "none";
        paypal.style.display = "none";
        bitcoin.style.display = "block";
    }
    });


//validating each field. Create the constants to select each element input 
const email = document.getElementById("email");
// const activitiesBox = document.getElementById("activities-box");
const cardNumber = document.getElementById("cc-num")
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form = document.querySelector("form");

//create functions to select the green and red images when input is valid or invalid
function validationPass (element){
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.style.display = "none"; 
  };

  function validationFail (element){
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.style.display = "block";
    
  };

  //helper function for name validation, to make sure a name is inserted using regex
function nameValidation(){
    let nameValue = userName.value;
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);  
    
    
    /*
    /^[a-zA-Z0-9_.-]*$/.test(nameElement.value);
// /[a-zA-Z]*(?:\s|(?:\s?[:\/]\s?))\d+/
// /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/
// /^[a-zA-Z0-9_.-.*]*$/
/^[a-zA-Z0-9:.,?!@]{3,15}[#$^]?$/
/^[a-z ,.'-]+$/i/


*/ 

//Create an if/else statement.
    if (nameIsValid){
        validationPass(userName);
    } else{
        validationFail(userName);
    };
    return nameIsValid; 
}

//helper function for the email validation
function emailValidation(){
    let emailValue = email.value;
    console.log(emailValue);
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);  
    console.log(emailIsValid);
    //Create an if/else statement.
    if (emailIsValid){
        validationPass(email);
    } else{
        validationFail(email);
    };
    return emailIsValid; 
}

// function emailValidation(){
//     let emailValue = email.value;
//     console.log(emailValue);
//     const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);  
//     console.log(emailIsValid);
//     if (emailIsValid){
//         validationPass(email);
//     } else{
//         validationFail(email);
//     };
//     return emailIsValid; 
// }

//helper function to make sure at least one activity is chosen, using if/else statements
function activitiesBoxValidator(){
    const selectBox = document.getElementById("activities-box");
    const activitiesBoxIsValid = totalCostOfActivities>0;
    if (activitiesBoxIsValid){
        validationPass(selectBox)
    } else{
        validationFail(selectBox);
    };
    return activitiesBoxIsValid; 

}
//helper function to make sure credit card is 13 numbers 
function creditCardValidator (){
    const cardIsValid = /^\d{13}\d?\d?\d?$/.test(cardNumber.value);  
    if (cardIsValid){
        validationPass(cardNumber);
    } else{
        validationFail(cardNumber);
    };
    return cardIsValid; 
}
//helper function to make sure zip is 5 numbers
function zipValidator (){
    const zipIsValid = /^\d{5}$/.test(zipCode.value);  
    if (zipIsValid){
        validationPass(zipCode);
    } else{
        validationFail(zipCode);
    };
    return zipIsValid; 
}
//helper function to make sure CVV is 3-4 digits 
function cvvValidator (){
    const cvvIsValid = /^[0-9]{3}$/.test(cvv.value);  
    if (cvvIsValid){
        validationPass(cvv);
    } else{
        validationFail(cvv);
    };
    return cvvIsValid; 
}

// function paymentValidator (){
//     if (paymentMethod.value = "credit-card"){
//         if (creditCardValidator() && zipValidator() && cvvValidator()){
//             return true;
//         } else {
//             return false;
//         }
//     }
//     if (paymentMethod.value = "paypal" || "bitcoin"){
//         return true
//     } else {
//         return false
//     }  
// };

//focuses and blurs activities section for better access 
let checkboxes = document.querySelectorAll("input[type = checkbox]");

for (let i=0; i<checkboxes.length; i++){
    checkboxes[i].addEventListener( "focus", (e) =>{
        checkboxes[i].parentElement.classList.add("focus");
    });
    checkboxes[i].addEventListener("blur", (e) =>{
        checkboxes[i].parentElement.classList.remove("focus");
    });
};

//add event listener to check for all fields that need to be filled to submit
form.addEventListener( "submit", (e) => {
    if (!nameValidation()){
        e.preventDefault();
    };
    if (!emailValidation()){
        e.preventDefault();
    };
    if (!activitiesBoxValidator()){
        e.preventDefault();
    };
    if (!creditCardValidator()){
        e.preventDefault
    };
    if (!zipValidator()){
        e.preventDefault();
    };
    if (!cvvValidator()){
        e.preventDefault();
    };
    // if (!paymentValidator()){
    //     e.preventDefault
    // }
    
    

});
