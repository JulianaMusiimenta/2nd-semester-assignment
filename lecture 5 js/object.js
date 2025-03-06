// Objective: object in javascript
// 1. Create an object in javascript using object literal syntax and access the object properties eg
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe
console.log(person.age); // 50
consttext = (person.firstName + " is "  +   person.age +  " years old."); // John is 50 years old.
console.log(text);

// 2. Accessing object properties using dot notation and bracket notation eg
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe
console.log(person.age); // 50
consttext = (person.firstName + " is "  +   person.age +  " years old."); // John is 50 years old.
console.log(text);
// 3. Adding new properties to an object using dot notation and bracket notation

// 4. Deleting properties  
// eg
 delete person.age 
delete person["age"]
// 5. Object methods   
 person.fullName = function()
  {return this.firstName + " " + this.lastName;}
// 6. Object constructor eg 
 function Person
 (first, last, age, eye) 
 {this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;}
  console.log(person.firstName); // John
  console.log(person["lastName"]); // Doe
  console.log(person.age); // 50
  consttext = (person.firstName + " is "  +   person.age +  " years old."); // John is 50 years old.
  console.log(text);
// 7. Object prototype eg
Person.prototype
  .national
  = "Nigerian";
  console.log(person.national); // Nigerian
// 8. Object.defineProperty() eg 
Object.defineProperty
  (person,
      "nationality",
        {value: "Nigerian",
          writable: true,
          enumerable: true,
          configurable: true});
          console.log(person.nationality); // Nigerian
// 9. Object.defineProperties() eg
Object.defineProperties
  (person,
    {tribe: {value: "Yoruba",
      writable: true},
      height: {value: "6ft",
        writable: false}});
        console.log(person.tribe); // Yoruba
        console.log(person.height); // 6ft
        person.height = "5ft";
        console.log(person.height); // 6ft
        person.tribe = "Igbo";
        console.log(person.tribe); // Igbo
        console.log(person.height); // 6ft
        person.height = "5ft";
        console.log(person.height); // 5ft
        person.tribe = "Igbo";
        console.log(person.tribe); // Igbo
        console.log(person.height); // 5ft

// 10. Object.assign() and Object.create() eg 
const person1 = {name: "John", age: 50};
const person2 = {national
: "Nigerian", eyeColor: "blue"};
const person3 = {height: "6ft"};
const person4 = Object.assign(person1, person2, person3);
console.log(person4.name); // John
console.log(person4.age); // 50
console.log(person4.national); // Nigerian
console.log(person4.eyeColor); // blue
console.log(person4.height); // 6ft

// 11. Object.keys() and Object.values() and Object.entries()
  const person = {
    firstName:"John", 
    lastName:"Doe",
     age:50,
      eyeColor:"blue"};
      console.log(person.firstName); // John
      console.log(person["lastName"]); // Doe
      console.log(person.age); // 50
      consttext = (person.firstName + " is "  +   person.age +  " years old."); // John is 50 years old.
      console.log(text); 

      console.log('Before', person);
        person.tribe = 'Yoruba';
        person.heigt = '6ft';
        console.log(text)
    
//       // 5. Object methods
       
    constperson = {};
    person.firstName = "John";  
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue";
    
    console.log (person.fullName + " is " + person.age + " years old."); // John Doe is 50 years old.
    console.log(person.fullName()); // John Doe
    console.log(text); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue', fullName: [Function: fullName] }


    // trial exercise
   //1 Alert "John" by extracting information from the person
  var person = {
  name: "John",
  age: 60
  };
              
  console.log(person.name);
// 2  Add the following property and value to the person object: country: Uganda.
const person = {
firstName: "Jane",
lastName: "Doe"
};
 // Adding the country property
 person.country = "Uganda";
              
console.log(person); 

// 3. Createan object called person with name = John, age = 50. Then, access the object to alert("John is 50")
// Creating the person object
var person = {
  name: "John",
  age: 50
};

// Accessing the object and displaying the alert
alert(person.name + " is " + person.age);


              
              
              