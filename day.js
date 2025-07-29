function sayHellow(){
    console.log("hellow, I am Labib!");
}

sayHellow();



function add(a, b){
    return a + b;
}

let result = add(200, 50);
console.log("Sum :", result);



function greet(name){
    console.log("Hellow," + name + "!");
}

greet("Labib");


const sayHi = () => {
    console.log("hi there!");
};

sayHi();

const multiply = (a, b) =>{
    return a * b;
}

console.log(multiply(1000,9));


const squre = (num) => {
    return num * num;
}

console.log(squre(9));



function greet(name,age){
    console.log(`Hi ${name},you are ${age} years old.`);
}

greet("Labib, 26");

function avarageOfThree(a,b,c){
    const sum = a + b + c;
    const avarage = sum / 3;
    return avarage;
}

const result = avarageOfThree(10,20,30);
console.log("Final Result :", result)

    function avarageOfThree(a, b, c){
      const sum= (a + b + c);
      const avarage = sum / 3;
      return avarage;

}

const result= avarageOfThree(100,300,500);
console.log("Final Result:", result);

const avarageOfThree = (a, b, c) => (a + b+ c) / 3;
console.log("Final Result:", avarageOfThree(15,25,45));

const greet = (name) => `hellow, ${name}! welcome to javascript.`
console.log(greet("Labib"));

