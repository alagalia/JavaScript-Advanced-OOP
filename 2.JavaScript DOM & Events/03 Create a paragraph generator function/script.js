var createParagraph = function createParagraph(id, text){
    var parent,
        child;
    parent = document.getElementById(id);
    child =  document.createElement('p');
    child.innerHTML = text;
    parent.appendChild(child);
};

createParagraph('wrapper', 'Some text');