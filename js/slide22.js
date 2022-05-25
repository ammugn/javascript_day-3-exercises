
function isNumber(input){
    if (isNaN(input))
   { 
    console.log("Please Provide the input as a number");
    return false;
   }
    else {
    return true;
}
    
}

function convertToNumber(input){
    return Number(input);
}
    console.log("Testing the isNumber function")
    console.log(isNumber("23"));
    console.log(isNumber("a23"));
    console.log(isNumber("2j3"));

    console.log("Testing the convertToNumber function")
    console.log(convertToNumber("23"));
    console.log(convertToNumber("a23"));
    console.log(convertToNumber("45"));