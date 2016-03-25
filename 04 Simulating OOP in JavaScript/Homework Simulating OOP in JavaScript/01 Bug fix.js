var peter;

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = this.firstName + " " + this.lastName
}
//
//Person.prototype.name = function() {
//        return this.firstName + " " + this.lastName
//};

peter = new Person("Peter", "Jackson");
console.log(peter.name);
console.log(peter.firstName);
console.log(peter.lastName);


//function Person(firstName, lastName) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//
//    return {
//        firstName: this.firstName,
//        lastName: this.lastName,
//        name: this.firstName + " " + this.lastName
//    };
//}