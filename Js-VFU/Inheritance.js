let fatherCar = { brand: 'BMW',
    model: 'X5', color: 'blue',
    toString: function() { return `[brand: ${this.brand}, model: ${this.model}, color: ${this.color}]`; }
};
console.log('' + fatherCar);

let myCar = Object.create(fatherCar);
myCar.model = 'M4';
myCar.color = 'red';
myCar.pu = 'pupu';
console.log('' + myCar);
myCar.toString = function() {
    return `${this.__proto__.toString()}, ${this.pu}`;}
console.log('' + myCar);
