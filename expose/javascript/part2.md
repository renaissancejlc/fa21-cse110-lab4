1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^ Solution: The line will log 3 into the console. This is because 'i' is of type 'var' which means that it will keep its value after its block. By nature of the for loop with 'i' as the iterator, by the end of the loop, 'i' will hold prices.length.

2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^ Soltuion: The console will log 150. This is because the last assignment of discountedPrice would have been prices[2] * (1-discount) which is equivalent to 300*(1-0.5). These mean that the last assignment of discountedPrice equals 150, and since it is of the type 'var' it will hold this value beyond the scope of its block and will be logged into the console.

3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^ Soltution: The console will log 150. This is because the last value assigned to final price in the for loop was Math.round(discountedPrice *100)/100 which is equivalent Math.round(150 *100)/100 because we know that discountedPrice's last value was 150 from the previous problem. This simplifies to finalPrice = 150, which represent the the price 300 with a discount of 0.5.

4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^ Solution: The function will return the array [50, 100, 150]. This is because it uses a for loop to populate a new array with the discounted prices of the original array.

5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)). Solution: Line 12 will cause an error since 'i' is of the type let, it cannot be accessed outside the block in which it is defined, thus it cannot be accessed from line 12

6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^ Solution: This will similarly cause an error, since discountedPrice is of the type 'let', and it is defined on line 9, inside a for loop block, it cannot be accessed from line 13, outside that block.

7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^ Solution: The console will log 150. This is because finalPrice is defined only within the function block and no other blocks, therefore, even though it is of the type 'let' it can be accessed anywhere in the function, thus it will return the value that it was last assigned (on line 8).

8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^ Solution: It returns the array [50,100,150]. This is because the variables 'let discountedPrice' and 'let finalPrice' are assigned and mainpulated in the same block where they are created. Furthermore, 'let discounted' is populated (using finalPrice and discountedPrice) in the same block where it is created. So, since no scope rules are being violated by the algorithm, the expected discounted array will be returned.

9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^ Solution: An error is returned because i is of the type 'let' and cannot be accessed from line 11.

10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^ Solution: The value 3 will be logged into the console, since that is the value that the 'const' vaariable was assigned to in line 4.

11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^ Solution: [50, 100, 150]. This is because discountedPrice will still hold the accurate discounted price even without rounded the answer.

12. A. Accessing the value of the name property in the student object:

B. Accessing the value of the Grad Year property in the student object

C: Calling the function for the greeting property in the student object

D: Accessing the name property of the object in the Favorite Teacher property in student

E: Access the first index in the array of the courseLoad property of the student object

13. Arithmetic

A. ???3??? + 2 = 32 //this is because javascript will concatenatae 2 to the first operand's string

B. ???3??? - 2 = 1 //subtraction does not have any string operation, so it will do integer subtraction

C. 3 + null = 3 //null has an integer value of 0 this the expression is equivalent to 3 + 0 = 3

D. ???3??? + null = 3 //the addition here concatenates the second operand to the second operand's string

E. true + 3 = 4 //true takes on the value of 1 in integer addition

F. false + null = 0 //false takes a value of 0, as does null, thus adding the two will lead to zero

G. '3' + undefined = 3undefined //the + here will concatenate the second operand to the first operand since the first is a string

H. '3' - undefined = NaN //the subtraction operator does not take on any meaning in strings or for undefined, therefore there is no available answer for this expression

14. Comparison 

A. ???2??? > 1 --> true //this is because the string 2 evaluates to a greater value than the string 1

B. ???2??? < ???12??? --> false //this is because the compare operation here compares strings, 2, has a greater string value than  12, beacuse it compares the first character of the string
C. 2 == ???2??? --> true //this is because the two pieces of data hold the same value, and since == does not test for type equality, it evaluates to true

D. 2 === ???2??? --> false //this is because the === operator compares the type of the two operands, and since they are not equivalent here, it evaluates to false

E. true == 2  --> false //this is because 2 evaluates to the boolean false, thus the expression is not equivalent

F. true === Boolean(2) --> true //this is because the two have the same boolean data types, and both evaluate to true, thus are strictly true. 

15. Explain the difference between the == and === operators. 

== is the equality operator. Like other operators, it can evalaluate data of different types. === is the strict equality operator. This means that it takes the type of the data into consideration when comparing equality. So, for the strict equality operator, the types of the data being comparaed and their values must be equivalent.
16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md).
Solution: the function call will return the array [1,2,3]. This is because when we call modifyArray using the input [1,2,3] and the function doSomething, the for loop inside modifyArray will call the inputed doSomething function on each item in the inputted array, and return the results in a new array.

18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)

19. What is the output of the above code? (This should be in your part2.md)
Solution:
1
4
3
2
Explanation: This is because "1" has no delay and is logged first in code. "2" has the longest delay, thus is last to be logged. "4" 'has no delay, thus is second to be logged. And "3" has the shortest delay, thus is third to be logged.
