/*
const getInfo=(name) => {
    return "My name is " + name;
};

const fetchData= callback => {
    console.log("Fetch data called!");
    setTimeout(() =>{
      callback("vaskar"); 
    },1000);    
};

setTimeout(() => {
   console.log("Timer started!"); 
   fetchData(text =>{
        console.log(text);
   });
}, 2000);

console.log("Hi");
console.log("Hello");
*/

const testCallback = (str, callback) => {
    callback(str.toUpperCase());
};


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Vaskar!");
        }, 1000);
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer started");
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    }).then(text2 => {
        console.log(text2);
    });
}, 2000);

//uppercase.js
const uppercase = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject('Empty string')
            return
        }
        resolve(str.toUpperCase())
    })
}
module.exports = { fetchData, uppercase, testCallback }