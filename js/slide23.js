function smaller(input1,input2){
    var input1,input2;

    if(isNaN(input1)||isNaN(input2))
    {
        console.log("Re-enter number");
        input1=window.prompt("Enter first number");
        input2=window.prompt("Enter second number");
        smaller(input1,input2);
    }
   
    else
    {
       if(input1<input2)
       return window.prompt(input1);
       else
       return window.prompt(input2);

    }
}
    var input1=window.prompt("Enter first number");
    var input2=window.prompt("Enter second number");
    console.log(smaller(input1,input2));
