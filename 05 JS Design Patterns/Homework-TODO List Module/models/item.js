var model = model || {};

(function (scope) {
    function Item (content){
        this.content = content;
        this.isCompleated = false;
    }

    Item.prototype.changeStatus = function(){
        this.isCompleated = !this.isCompleated;
    };

    Item.prototype.addToDOM = function addToDOM (selector){
        var section,
            li,
            checkBoxSpan,
            checkbox,
            img,
            contentSpan,
            _this
        section = document.querySelector(selector+' ul');//points to parent DOM element

        //create item <li><span>checkbox</span><span>content</span>
        li = document.createElement('li');
        checkBoxSpan = document.createElement('span');

        checkbox =  document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkBoxSpan.appendChild(checkbox);

        img = document.createElement('img');
        checkBoxSpan.appendChild(img);

        contentSpan = document.createElement('div');
        contentSpan.setAttribute('style', 'display: inline-block; width: 323px; border-bottom: 1px solid black');
        contentSpan.innerHTML = this.content;

        li.appendChild(checkBoxSpan);
        li.appendChild(contentSpan);

        section.appendChild(li);

        //event for checkbox
        _this = this;
        checkbox.addEventListener('click', function(ev) {
             if(!_this.isCompleated){
                 contentSpan.setAttribute("style", "background: chartreuse; display: inline-block; width: 323px; border-bottom: 1px solid black");
                 _this.changeStatus();
             } else {
                contentSpan.setAttribute("style", "background: white; display: inline-block; width: 323px; border-bottom: 1px solid black");
                 _this.changeStatus();
            }
        })

    };
        scope.Item =  Item;
})(model);