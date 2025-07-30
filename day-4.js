// let fruits = ["Apple", "Banana", "Mango","Orange","Lichi"];
// console.log(fruits.length);
// console.log(fruits[3]);

// for (let i=0; i< fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let numbers = [1,2,3,4,5,6,7,8,9,10];

//  let squres =  numbers.map(n => n * n);
//  console.log(squres);

//  let even = numbers.filter(n => n % 2 === 0);
//  console.log(even);

//    numbers.shift();
//    console.log(numbers);

//  let found = numbers.find(num => num > 3);
//  console.log(found);

//  let person = {
//      name: "Labib", 
//     age: 22,
//     city: "Dhaka"

//  };
//  console.log(person);

//  let student = {
//      name: "Rafi",
//      subjects: ["Math", "English", "Physics"]
//  };
//  console.log(student.subjects[2]);







//// Practice Exercise---------///


let names = ["Messi", "De Maria", "Emi", "Alvarez","Enzo"];
names.map(name => console.log(name));

let numbers = [1,2,3,4,5,6,7,8,9,10];
let even = numbers.filter(n => n % 2 === 0);
console.log(even);
 
let person = {
  name: "Labib",
  age: 22,
  city: "Dhaka"
};

for (let key in person){
    console.log(key + ": " + person[key]);
}


  let subjects = {
    name: "Panda",
    age : 15,
    subjects : ["Math", "Physics", "Chemistry","English","biology"]
  };
  

  function sum(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
  }
  console.log(sum(1,2,5));
