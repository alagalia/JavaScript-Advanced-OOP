//---------------------------------------------------------------
// the key for solving this problem is in Object.defineProperty()
//---------------------------------------------------------------

function Person(firstName, lastName) {
    this.fName = firstName;
    this.lName = lastName;
    this.fuName = this.fName + " " + this.lName;

    Object.defineProperty(this, 'firstName', {
        get: function () {
            return this.fName;
        },
        set: function (value) {
            this.fName = value;
            this.fuName = this.fName + " " + this.lName;
        }
    });

    Object.defineProperty(this, 'lastName', {
        get: function () {
            return this.lName;
        },
        set: function (value) {
            this.lName = value;
            this.fuName = this.fName + " " + this.lName;
        }
    });

    Object.defineProperty(this, 'fullName', {
        get: function () {
            return this.fuName;
        },
        set: function (value) {
            value = value.split(' ');
            this.fName = value[0];
            this.lName = value[1];
            this.fuName = this.fName + " " + this.lName;
        }
    });
}


var person = new Person("Peter", "Jackson");

// Getting values
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

// Changing values
person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);


//--------------------------Other solution---------------

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (name) {
            var names = name.split(" ");
            this.firstName = names[0];
            this.lastName = names[1];
        }
    });
}