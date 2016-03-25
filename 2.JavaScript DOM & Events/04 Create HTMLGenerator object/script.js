//made IIFE for object and return functions

var HTMLGen = (function() {
    function createParagraph(id, text) {
        var parent = document.getElementById(id);
        var child =  document.createElement('p');
        child.innerHTML = text;
        parent.appendChild(child);
    }

    function createDiv(id, text) {
        var parent = document.getElementById(id);
        var child =  document.createElement('div');
        child.innerHTML = text;
        parent.appendChild(child);
    }

    function createLink(id, text, url) {
        var parent = document.getElementById(id);
        var child =  document.createElement('a');
        child.innerHTML = text;
        child.setAttribute('href', url);
        parent.appendChild(child);
    }

    return{
        createParagraph :createParagraph,
        createDiv : createDiv,
        createLink : createLink
    }
})();

HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');