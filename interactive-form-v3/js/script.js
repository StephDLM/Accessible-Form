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
 const shirtColor = document.getElementById("shirt-colors")
 const colorOption = shirtColor.children;
    // console.log(shirtDesign);
    // console.log(shirtColor);
    // console.log(colorOption);
//disable color field 
    shirtColor.disabled = true;
//create an eventListener for shirt design 
shirtDesign.addEventListener("change", (e) => {
    shirtColor.style.removeProperty("display");
    for ( let i=0; i<colorOption.length; i++ ) {
        const shirtValue = e.target.value;
        const dataTheme = colorOption[i].getAttribute("data-theme");
            if (shirtValue === dataTheme){
                colorOption[i].hidden = false;
                colorOption[i].setAttribute("selected", true);
            } else {
                colorOption[i].hidden = true;
                colorOption[i].removeAttribute("selected", false);
    
            
        };
       
    }


})

