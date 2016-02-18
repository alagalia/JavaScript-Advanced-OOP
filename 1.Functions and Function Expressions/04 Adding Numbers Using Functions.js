function add(a) {

    var sum = a;

    function inner(b) {
        sum += b;
        return inner
    }

    inner.toString = function() { return sum };

    return inner
}

console.log(add(1)(6)(6).toString());//13

//var addTwo = add(2);
//console.log(+addTwo); // 2
//console.log(+addTwo(3)); // 5



