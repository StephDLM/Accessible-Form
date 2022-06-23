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
    if (e.target.value == "other")
    otherJobRole.style.removeProperty("display");
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

//payment section
const paymentMethod = document.querySelector("#payment")
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

// paypal.style.display = "none";
// bitcoin.style.display = "none";

//select the second child of the payment variable -by default, grab first children
paymentMethod.children[1].setAttribute("selected", "selected");

//crete an event listener that hides payment methods when not selected but shows if selected 
paymentMethod.addEventListener ("change", (e) =>{
    console.log(e.target.value)
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
    })


//validating each field. Create the constants to select each element input 
const email = document.getElementById("email");
const activitiesBox = document.getElementById("activities-box");
const cardNumber = document.getElementById("cc-num")
const zipCode = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form = document.querySelector("form");

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

  //helper function for name validation 
function nameValidation(){
    let nameValue = userName.value;
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);    
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

function activitiesBoxValidator(){
    const activitiesBoxIsValid = activitiesBox>0;
    if (activitiesBoxIsValid){
        activitiesBox.classList.add("valid");
        activitiesBox.classList.remove("not-valid");
        activitiesBox.lastElementChild.style.display = "none";
    } else{
        // validationFail(activitiesBox);
        activitiesBox.classList.add("not-valid");
        activitiesBox.classList.remove("valid");
        activitiesBox.lastElementChild.style.display = "block";
    };
    return activitiesBoxIsValid; 

}

function creditCardValidator (){
    const cardIsValid = /^\d{13}\d?\d?\d?$/.test(cardNumber.value);  
    if (cardIsValid){
        validationPass(cardNumber);
    } else{
        validationFail(cardNumber);
    };
    return cardIsValid; 
}

function zipValidator (){
    const zipIsValid = /^\d{5}$/.test(zipCode.value);  
    if (zipIsValid){
        validationPass(zipCode);
    } else{
        validationFail(zipCode);
    };
    return zipIsValid; 
}

function cvvValidator (){
    const cvvIsValid = /^[0-9]{3,4}$/.test(cvv.value);  
    if (cvvIsValid){
        validationPass(cvv);
    } else{
        validationFail(cvv);
    };
    return cvvIsValid; 
}

//focuses and blurs activities section for better access
const checkboxes = document.querySelectorAll("checkboxes");
for (let i=0; i<checkboxes.length; i++){
    checkboxes.addEventListener ( "focus", (e) =>{
        checkboxes.parentElement.classList = "focus";
    });
    checkboxes.addEventListener ("blur", (e) =>{
    checkboxes.parentElement.classList.remove("focus");
    });
}

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
    

});
