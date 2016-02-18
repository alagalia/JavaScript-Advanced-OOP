function printArgsInfo(){
    var type;
    var length = arguments.length;
    for (var i = 0; i < length; i++) {
        var obj = arguments[i];
        if(obj){
            type = obj.constructor.name.toLowerCase();
        } else {
            type = typeof obj;
        }
        console.log((obj + " ("+type+')').trim());
    }
}

printArgsInfo.apply();
printArgsInfo.apply(null,[2, 3, 2.5, -110.5564, false]);

printArgsInfo.call();
printArgsInfo.call(null, undefined, "", 0, [], {});