let name= "vaskar";
let age = 30;
var b=2, c=2;


function testData(name, age){
    return "My name is " + name + " and age is " + age +".";
}

console.log(b+c)

console.log(testData(name,age));

const testArrowFnc=(name,age) => {
    return "My name is " + name + " and age is " + age +".";
}

const test1=(a,b) => a+b;

console.log(testArrowFnc("Parag",34));

console.log(test1(2,3));