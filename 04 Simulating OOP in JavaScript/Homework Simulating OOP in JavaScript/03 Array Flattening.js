Array.prototype.flatten =  function (){
    var arr = [],
        elem;
    var iterateArray = function(myArr) {
        for (elem in myArr) {
            if (!(myArr[elem] instanceof Array)) {
                if (typeof myArr[elem] != "function") {
                    arr.push(myArr[elem]);
                }
            } else { //recursive
                iterateArray(myArr[elem]);
            }
        }
    };
    iterateArray(this);
    return arr;
};

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
console.log(array);