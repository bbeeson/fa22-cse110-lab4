1. values added:  20 is printed because it is updated inside the function and can be changed anywhere inside the function
   
2. final result:  20 similarly because we ran through the if statement it falls to the next console log 
and we call our var and print the result

3. values added:  20 is printed because we are still in the block where the let variable was declared and thus can still
use it.

4. An error is returned from line 13 because we are trying to use result when it is no longer defined because let only works in the if statement block

5. It returns an error because const variable means that you aren't allowed to reassign the variable and in line 9 you are reassigning
the variable to be the sum of num1 and num2 which it doesn't let you.

6. Nothing is printed from line 13 because there was an error on line 9 which means that the script didn't get to line 13 without exiting.

