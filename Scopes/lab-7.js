// 1. Print out green because we returning the value in the global variable

// let grapes = "green"; // grape variable is on global scoope.

  

// function fruits(){ // the function fruits return grapes.

//     return function(message){ 

//         return grapes; 

//     } 

// } 

// console.log(fruits()()); 


// 2.  Return 20 because we reassigned x before we call our function.

// let x = 10; // the variable is decleared in on global scoope

// function globalVar(){  // this function

//     return function(){ 

//        return x; // x declared outside of global scoope

//     } 

// } 

// x = 20; 

// let fn = globalVar(); // the inner function is asigned in fn

// console.log(fn ()); // the output is goint to be 20 because x is re-assigned above.



 

// 3. Undefined because we don’t the returned function expects an arguement which we haven’t passed during the call.

// function sport(message){ // the parameter of the function is re-assigned to "hi"

//     message = "Hi"; 

//     return function(message){ // This function has its own message variable.

//         return message; 

//     } 

// } 

// let sportFn = sport("Hello"); // we re-assigned the return value of sport fuction.

// console.log(sportFn ()); // This will be undefined because SportFn should have a parameter.



 

// // 4. 
// function test(x){ // fuction with an x variable.

//     x = 10; // x is re-assigned to 10

//     x++; // increment value of x.

//     return function(){ 

//         return x++; // x is goint to be 11 because of the previous incremment 

//     } 

// } 

// console.log(test(2)()) // THe reuslt will be 11 like i mention above.
 
 

// // 5.
// function car(){ 

//     let color = "white"; 

//     function seat(){ // This fucntion is hidden inside a car function

//         let color = "brown"; 
//         console.log(color)//___color is going to be brown________ because it has its

//     } 

//     console.log(color)//___color will be white___ because is its not going to be affected by seaa color

// } 

// car("black") // The "black" is going to be ignored because the fucntion doesn't have a parameter.


// 6. 
// function department(){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments); //output is 5 as decleared above.
//     function software(){ 

//         let language = "javascript"; // this language is only accesible in software function.
//         console.log(language)

//     } 

//     console.log(language) // this is not declread in departement it will be reference error.

// } 

// department() 



 

// // 7. 
// function department(language){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments) // This will be 5.
//     function software(){ 

//         let language = "javascript"; // language is assigned in software function so its not visible outside
//         console.log(language);// this will be javascript if the method is invoked

//     } 

//     console.log(language) // this will be parameter of the departement.

// } 

// department("java"); // the result will be java.
