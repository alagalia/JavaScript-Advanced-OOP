var model  = model || {};

(function (scope) {
    function Section (title){
        this.title = title;
        this._items = []
    }

    Section.prototype.addItem =  function addItem (item){
        this._items.push(item);
    };

    Section.prototype.getItems =  function getItems (){
        return this._items;
    };

    Section.prototype.addToDOM = function addToDOM (selector, sectionIndex){
        var container,
            section,
            sectionTitle,
            ul,
            footer,
            itemInput,
            itemButton,
            _this;

        container =  document.querySelector(selector);//points to parent DOM element

        //create section tag
        section = document.createElement('section');
        section.setAttribute('id', 'section'+sectionIndex);
        sectionTitle = document.createElement('h2');
        sectionTitle.innerHTML =  this.title;
        section.appendChild(sectionTitle);

        //create ul
        ul = document.createElement('ul');
        section.appendChild(ul);

        //create FOOTER 'add item'
        footer = document.createElement('footer');
        footer.setAttribute('class', 'footer-right');
        itemInput = document.createElement('input');
        itemInput.setAttribute('id', 'item-input');
        itemInput.placeholder = 'Add item...';
        itemButton = document.createElement('button');
        itemButton.innerHTML ='+';
        footer.appendChild(itemInput);
        footer.appendChild(itemButton);
        section.appendChild(footer);

        container.appendChild(section);

        //eventHandler for section-button
        _this = this;
        itemButton.addEventListener('click', function (ev) {
            //CREATE ITEM
            var content = itemInput.value;
            var item = new scope.Item(content);
            _this.addItem(item);

            item.addToDOM('#section'+sectionIndex); // unique ID for section

        })

    };
    scope.Section = Section;
})(model);