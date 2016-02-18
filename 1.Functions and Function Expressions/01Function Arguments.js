function printArgsInfo(){

    var length = arguments.length,
        type,
        i;
    for (i = 0; i < length; i++) {
        var obj = arguments[i];
        if(obj){
            type = obj.constructor.name.toLowerCase();
        } else {
            type = typeof obj;
        }
        console.log((obj + " ("+type+')').trim());
    }
}

printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log("------------------");
printArgsInfo(null, undefined, "", 0, [], {});
console.log("------------------");
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
console.log("------------------");
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20})
console.log("------------------");
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]])