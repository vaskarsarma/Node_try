const person={
    fname: "vaskar",
    lname: "Sarma",
    empid : "S463882"
}

/**
 * Example of SPREAD operator
 */
const copiedObject= {
    ...person,
    testdata: "My Test Data"
}

console.log(copiedObject);

const arr1= [1,2,3,4];

const arr2=[...arr1,6,7]

console.log(arr1);
console.log(arr2);

/**
 * Example of REST operator
 * @param  {...any} args 
 */
const toArray=(...args) =>{
    return args;
}

console.log(toArray(3,4,5));


/** Example of object destructuring  */
const {fname,lname}=person;
console.log(fname, lname)

/** Example of Array destructuring */
const myArr=["vaskar1","vaskar2","vaskar3"];
const [s,d]=myArr;
console.log(s,d);