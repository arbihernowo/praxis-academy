var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  alert("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
   alert("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   alert("The values "+ num1+ " and "+num2+ " are equal.");
  }
  