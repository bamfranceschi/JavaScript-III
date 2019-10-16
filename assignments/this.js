//* The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. Global binding - the 'this' keyword will reference the entire Window, hence why it is called the global binding.
// * 2. Implicit binding - the 'this' keyword is implicitly inferred when being referenced in invoked functions, and refrences an attribute inside the object called upon in that function.
// * 3. Explicit binding - the 'this' keyword is explicitly being referenced in the function being invoked, i.e. function.call(exampleObj); wherin the 'this' keyword is being used inside the function.
// * 4. New binding - 'this' works with construct functions to create new objects, and references their attributes.
// *
// * write out a code example of each explanation above
// * 


// I TESTED THESE SEQUENTIALLY, OTHERWISE OBJECTS ARE PREVIOUSLY DEFINED. COMMENT OUT ALL OTHER PRINCIPLES TO TEST EACH ONE INDIVIDUALLY 


// Principle 1 --works

//Global

// function drink(liquid) {
//     console.log(this);
//     return liquid;
// }

// drink('hot tea');


// Principle 2 --works

// Implicit

// const myDinner = {
//     name: 'Thanksgiving',
//     cuisine: 'North American',
//     dishes: 6,
//     meat: 'turkey',
//     dessert: 'pumpkin pie',
//     catchphrase: function() {
//         console.log(`Give thanks on ${this.name} with friends and family by eating ${this.meat} and ${this.dessert}`);
//     }

// }

// myDinner.catchphrase();

// Principle 3

// New 

// function MyDinner(meal){
//     this.salutation = 'Enjoy';
//     this.meal = meal;
//     this.eat = function(){
//         console.log(`${this.salutation} eating ${this.meal}`);
//     };
// }

// const chickenAndWaffles = new MyDinner('chicken and waffles');
 
// chickenAndWaffles.eat();


// Principle 4

//Explicit

// const myDinner = {
//     name: 'Thanksgiving',
//     cuisine: 'North American',
//     dishes: 6,
//     meat: 'turkey',
//     dessert: 'pumpkin pie'
// }

// function catchphrase(){
//     console.log(`Give thanks on ${this.name} with friends and family by eating ${this.meat} and ${this.dessert}`);
// }

// catchphrase.call(myDinner);
