var selector = ".birds";
"use strict";

function traverse(selector) {
    var startNode;

     if(selector[0]==='.'){
         selector = selector.substring(1,selector.length);
         startNode = document.getElementsByClassName(selector);
        var length = startNode.length;

         for (var i = 0; i <length; i++) {
             traverseNode(startNode[i], '')
         }
     }

     else if (selector[0]==='#'){
         selector = selector.substring(1,selector.length);
         startNode = document.getElementById(selector);
         traverseNode(startNode,'');
     }
}


function traverseNode(node, space){

    //-------------------------- CODE FOR CONSOLE.LOG ----------------------------------------------//
    space = space || ' ';
    var info = '',
        len,
        i,
        child,
        nodetype;

    //iteration all attributes
    for (i = 0; i < node.attributes.length; i++) {
        if (i!=0) {
            info +=' ';
        }
        info += node.attributes[i].name+ "=\"" + node.attributes[i].value + "\"";
    }

    console.log(space + node.nodeName.toLowerCase() + ": " + info);


    //-------------------------- CODE RECURSIVE CALL ----------------------------------------------//

    len = node.childNodes.length;
    for (i = 0; i < len; i++) {
        child = node.childNodes[i];
        nodetype = child.nodeType;
        if(nodetype === 1) {
            traverseNode(child, space+' ')
        }
    }
}

traverse(selector);