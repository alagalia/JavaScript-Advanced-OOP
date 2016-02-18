
var liElement = document.createElement("li");

var domModule  = (function () {

    function appendChild(element, child){
        var parent = document.querySelector(element);
        parent.appendChild(child);
    }

    function removeChild (element, child){
        var parent = document.querySelector(element);
        child = parent.querySelector(child);
        parent.removeChild(child);

    }

    function  addHandler(element, eventType, eventHandler){
        var elementsWithEvent = document.querySelectorAll(element);

        for (var i = 0; i < elementsWithEvent.length; i++) {
            if (elementsWithEvent[i] instanceof HTMLElement) {
                elementsWithEvent[i].addEventListener(eventType, eventHandler);
            }
        }
    }

    function retrieveElements(selector){
        var nodes = document.querySelectorAll(selector);
        return nodes;
    }

    return {
        appendChild : appendChild,
        removeChild : removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }
})();

domModule.appendChild('ul.birds-list', liElement);
domModule.removeChild("ul.birds-list","li:first-child");
domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });
var elements  = domModule.retrieveElements('.bird');

console.log(elements)

