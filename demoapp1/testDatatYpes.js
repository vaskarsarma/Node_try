var person={
    name: "vaskar",
    age: 41
}

var newperson=person;
newperson.name="xyz";
newperson.age=41;

console.log(person.name);
console.log(newperson.name);

var data= ["parag", 42];
var newdata=data;
newdata.push("ffsdffdfdf");

console.log(data);
console.log(newdata);

//---------- full copy ----------------

// using slice - in array
var newData1=data.slice();
newData1.push("Hello");
console.log(data);
console.log(newData1);

//Using SPREAD operator - in array
var newdata2=[...data];
newdata2.pop();
console.log(data);
console.log(newdata2);

//----------Copy Object--------
//using assign
var newPerson1=Object.assign({},person);
newPerson1.name="Sarma"
console.log(person.name);
console.log(newPerson1.name);

//using spread
var newPerson2={...person};
newPerson2.name="barnav"
console.log(person.name);
console.log(newPerson2.name);
