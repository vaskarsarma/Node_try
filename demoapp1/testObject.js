const Person={
    name: "Vaskar Sarma",
    age: 34,
    greet: function(){
        console.log("Hi, I am " + this.name);
    },
    info(){
        console.log("Hi, My age is "+ this.age);
    }   
}

Person.greet();
Person.info();

