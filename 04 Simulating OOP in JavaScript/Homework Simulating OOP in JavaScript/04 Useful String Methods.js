String.prototype.startsWith =  function () {
    return this.indexOf(arguments[0]) === 0;
};

String.prototype.endsWith =  function () {
    return this.lastIndexOf(arguments[0]) === this.length-arguments[0].length;
};

String.prototype.left =  function () {
    return this.substring(0,arguments[0]) || this;
};

String.prototype.right =  function () {
    return this.substring(this.length-arguments[0], this.length) || this;
};


String.prototype.padLeft  =  function (count, character) {
    if (!character) {
        character =' ';
    }
    return character.repeat(count)+this;
};

String.prototype.padRight  =  function (count, character) {
    if (!character) {
        character =' ';
    }return this + ' '.repeat(count);
};


String.prototype.repeat = function( num ) {
    return new Array( num + 1 ).join(this);
};

//-------- CONSOLE LOG-----------
var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));

example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));

example = "This is an example string used only for demonstration purposes.";
console.log(example.left(9));
console.log(example.left(90));

example = "This is an example string used only for demonstration purposes.";
console.log(example.right(9));
console.log(example.right(90));

example = "abcdefgh";
console.log(example.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5,'.'));

console.log(hello.padRight(5)+'|');
console.log(hello.padRight(10)+'|');
console.log(hello.padRight(5, ".")+'|');
console.log(hello.padRight(10, ".")+'|');
console.log(hello.padRight(2, ".")+'|');
