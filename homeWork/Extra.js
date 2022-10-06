// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

//  WRITE YOUR ANSWER HERE 
   const ReverseNumber = [1,2,3,4,5,6,7,8]
    ReverseNumber.reverse()
    console.log(ReverseNumber);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

// /* WRITE YOUR ANSWER HERE 
 const MaximumNumbers = [34,533,23, 6,5656,234, 1,7,4]
  console.log(Math.max(...MaximumNumbers));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

// /* WRITE YOUR ANSWER HERE 
 
console.log(Math.min(...MaximumNumbers));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

// /* WRITE YOUR ANSWER HERE 

 let evenNumbers = MaximumNumbers.filter(number => number % 2 == 0)
  document.write("even numbers: "+ evenNumbers); // or console.log


/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.

*/

//  WRITE YOUR ANSWER HERE 
const deleteEvenNumbers = MaximumNumbers.filter(numbers => numbers % 2 != 0 )
 console.log(deleteEvenNumbers);


/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

// /* WRITE YOUR ANSWER HERE 

const vowels = ['a', 'sd', 'we', 'mdwe']

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

// /* WRITE YOUR ANSWER HERE 

const multiply = [23,45,45,6,7,2,3,4,354];
for (let i = 0; i < multiply.length; i++) {
    multiply[i] += 1
}
console.log(multiply);
   
/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

// /* WRITE YOUR ANSWER HERE

const epicode = ["Epicode", "Is", "great"]

const EpicodeLength = epicode.length;

console.log(EpicodeLength);
 
