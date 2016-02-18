var specialConsole = (function () {
    var text;
    function writeLine (text) {
        if (arguments.length===1){
           text = arguments[0];
       } else {
           text = arguments[0];
            var args = Array.prototype.slice.call(arguments,1);
            var placeholders =  text.match(/\{\d+\}/g);

           if(placeholders.length!=args.length){
               text = 'Invalid placeholders!';
           } else {
               for (var i = 0; i < placeholders.length; i++) {

                   var placeholder = placeholders[i];
                   var num = parseInt(placeholder.substring(1,placeholder.length-1));

                   if(num>placeholders.length-1 || text.indexOf(placeholder) <0 ){
                       text = 'Invalid placeholders!';
                   } else{
                       var arg = args[num];
                       text = text.replace(placeholder, arg );
                   }
               }
           }
       }
        console.log(text)
    }

    function writeError (text){
        var args = Array.prototype.slice.call(arguments,1);
        if(args.length===0){
            console.log(text)
        }else {
            writeLine(text, args)
        }
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeError,
        writeInfo: writeError
    }
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});

