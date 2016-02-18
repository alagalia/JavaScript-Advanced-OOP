function testContext(){
    return this;
}

function insideAnotherFunction (obj){
    return  testContext.call(obj);
}

var myObject =  new testContext();

// •	From the global scope ------> this return info for the global object
//console.log(testContext());

// •	Inside another function -----> this return info for the passed object or if arguments are missing return info for the global object
//console.log(insideAnotherFunction({name: "Peter", age: 20}));

// •	As an object -------> This creates a new object and return info about its name
console.log(myObject);