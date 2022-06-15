console.log(3 === 3 && 'a' === 'a');
console.log(3 === 3 || 'cow' || "chicken");

function isAdult (age){
    if (age && age >=18){
        return true;
    } else {
        return false;
    }
}

//concisely: 
function isAdult (age) {
    return age &&age >= 18;
}
console.log(isAdult(15));

//start
function countToFive(start = 1) {//default value)
    start = start || 1;
    for (var i = start; i<=5; i +=1);{
        console.log(1);
    }
}

function greet (name) {
    name && console.log("Hi," + name +"!");
}
greet("sam");