/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

//  WRITE YOUR ANSWER HERE
let firstArray = [2,4,5,6,7, ]
 console.log(firstArray[0]);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

//  WRITE YOUR ANSWER HERE
//   const me = document.querySelector(".itsMe")
const aboutMe = {
    name:"Muhammadjon",
    surname:"Isakov",
    email:"itsme@gmail.com",
    age:23,
    ageForRemove:32
}
 console.log(aboutMe);
console.log( "hi my full name is " + aboutMe.name +  aboutMe.surname + " I'm " + aboutMe.age + " feel free to contact =>  " + aboutMe.email) ;
 
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

//  WRITE YOUR ANSWER HERE
let drive =  "Got driving license b  category "
let dontDrive = " yu have to wait for b  category  don't drive your father's car please 😅 "
 const newMe = aboutMe.age >= 18 ? drive :  dontDrive
 console.log(newMe);


/* EXERCISE 4
 Remove from the previously created object the age property.
*/

// WRITE YOUR ANSWER HERE
const removeAge = delete aboutMe.ageForRemove
console.log(removeAge);
  
  

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

// WRITE YOUR ANSWER HERE 

  const someOne ={ 
    name:"Mark",
    surname:"Maskusov",
    email:"Markus@gmail.com",
    age:34

}
 if(someOne.email === "Markus@gmail.com"){
    console.log("this email is correct");
 }else {
    console.log("incorrect email please check again!!!");
 }


/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

//  WRITE YOUR ANSWER HERE 
 const totalShoppingCart = 65 

 if(totalShoppingCart >= 50){
    console.log("free shipping for you");
 } else{
    console.log("Shipping cost 10$");
 }
  

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

const BlackFriday = 320

 if (BlackFriday >= 50) {
     console.log(BlackFriday % 20);
 }else{
    console.log(BlackFriday);
 }

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

// WRITE YOUR ANSWER HERE 
 let gtr = {
    Brand:"Nissan",
    Model:"R35",
    Year:2021,
    LicencePlate:"P1_Isakov",
    EngineType:"3.8-liter TWIN-TURBO V6",
    TopSpeed: "380km/h",
    HP:"640"

 }


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

//  WRITE YOUR ANSWER HERE
 const carsForRent = ["Nissan", "Toyota", "Lexus", "Honda", "Mazda", "Mitsubishi", "Subaru", "Acura"]
  
 if(gtr.Brand === carsForRent[0]){
    console.log("Same Brands");
 } else{
    console.log("difference cars");
 }

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

//  WRITE YOUR ANSWER HERE 

const removeFirstSecond = carsForRent.splice(1,6)
console.log(removeFirstSecond);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE 
 ! honestly  I didn't catch this question!!
*/

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

//  WRITE YOUR ANSWER HERE 
 const carsForSale = []
 carsForSale.push("BMW", "Porsche", "Bentley", )
 console.log(carsForSale);

 const TotalCars = [] 
 TotalCars.push(carsForRent, carsForSale)
 console.log(TotalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

// /* WRITE YOUR ANSWER HERE 
for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i]);
    
}
