var model  = model || {};

(function (scope) {
    function Container (title){
        this.title = title;
        this._sections = [];
    }
    Container.prototype.addSection = function addSection(section) {
        this._sections.push(section);
    };
    Container.prototype.getSections = function getSections(section) {
        return this._sections;
    };

    Container.prototype.addToDOM = function addToDOM (selector){
        //create HTML code
        var wrapper,
            container,
            titleH1,
            footer,
            sectionInput,
            sectionButton,
            _this;

        wrapper  = document.querySelector(selector); //points to parent DOM element

        //create DIV container
        container = document.createElement('div');
        container.setAttribute('id', 'container');
        titleH1 = document.createElement('h1');
        titleH1.innerHTML = this.title;

        //create FOOTER 'add section'
        footer = document.createElement('footer');
        footer.setAttribute('class', 'footer-left');

        sectionInput = document.createElement('input');
        sectionInput.setAttribute('type', 'text');
        sectionInput.placeholder = 'Title...';
        sectionInput.setAttribute('id','section-input');
        sectionButton = document.createElement('button');
        sectionButton.setAttribute('id','section-button');
        sectionButton.innerHTML = 'New section';
        footer.appendChild(sectionInput);
        footer.appendChild(sectionButton);

        wrapper.appendChild(titleH1);
        wrapper.appendChild(container);
        wrapper.appendChild(footer);


        //eventHandler for section-button
        _this = this;
        sectionButton.addEventListener('click' , function(ev) {
            //CREATE SECTION
            var sectionTitle,
                section;

            sectionTitle = document.getElementById('section-input').value;
            section = new scope.Section(sectionTitle);
            _this.addSection(section);

            section.addToDOM('#container', _this._sections.indexOf(section));
        })
    };

    scope.Container =  Container;
})(model);