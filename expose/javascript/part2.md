1. it prints out 3 because that is the size of the array that is being input and thats what i is after the for loop

2. It prints out 150, because it is the price of the last item that was run through our for loop and it is accessed by console log.

3. It prints out 150, because that is 150 * 100 and then divided by 100, because there was no rounding that needed to be done it is the same
number as the discounted price

4. It returnd an array of all the items after being discounted because we had been collecting the discounted prices.

5. It returns an error because you are using let as your variable and attempting to access it outside of the scope of the block from the for loop
   
6.  Same as in number 5, let means the variablle is defined in its block, in this case the for loop and we cant access it outside of that block.
   
7.  It returns 150 because finalprice is still within our bounds of the function and it can be accessed, thus theres no error.
   
8.  It returns an array of the newly discounted prices and there are no errors when running the code.
   
9.  We have the same error as before when trying to access i because it is a let variable and that means we can only access it in its function block and not outside
of its function block.

10. It returns 3 for line 12 because length as a const variable isn't changed and therefore doesn't throw an error. 
    
11. It will return an array of the discounted prices without an error because you dont try to reassign the variables in the function which 
means that no error gets thrown.
    
12. a) Student.name
    
12. b) Student["Grad Year"]
    
12. c) Student.greeting() 

12. d) student["Favorite Teacher"].name
    
12. e) student.courseLoad[0] 
     
13.  
A) ‘3’ + 2
'32' this is because 2 maps to its string conversion and adds to '3' 

B) ‘3’ - 2
1 '3' maps to the numerical integer 3 for simple numerical conversions

C) 3 + null
3 when adding null numerically null becomes 0

D) ‘3’ + null
'3null' the letters will match to the string and add them together as one string

E) true + 3
4 since true maps to 1 when you add it together it will be 4

F) false + null
0  false maps to 0 and adding null will also become 0

G)'3' + undefined
'3undefined' because the letters will match to string and add it together

H)'3' - undefined
NaN is because undefined becomes NaN in Numeric Conversion rules

14. 
A)‘2’ > 1
True because string 2 becomes number 2

B) ‘2’ < ‘12’
False it checks the first character of 12 which is 1, and 2 is not less than 1 hence it results in false

C) 2 == ‘2’
True string '2' becomes number 2 and hence it is true


D) 2 === ‘2’
False because the types are different it will result in false

E) true == 2
False this is because true is equal to 1 numerically and not 2

F) true === Boolean(2)
True the boolean of 2 is true and thus the answer will result in true upon a type check equality
    
15.  == will check if the two variables are equal even if from different types whereas === checks if they are from the same type 
when checking for equality. 
    
16.  Wrote JS file for part2-question16
    
17.  [2, 4, 6] is the result: The result is an array where every element inside the array has had the function doSomething applied to it. This is found because
a newarray is made and then we run through every element in the array given in the parameters and we use callback to enter our doSomething
function and apply it to our variable. After apply the doSomething function we push it to the newArr and continue. After iterating through
all the elements in the array parameter we return the array that has had doSomething applied to all the elements inside. 

18.  Wrote JS file for part2-question18
    
19.  the output of the code is:
1
4
3
2
    
