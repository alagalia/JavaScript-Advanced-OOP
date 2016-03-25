var app = app || {};
(function (scope) {

    function Hall(name, capacity) {
        this.setName(name);
        this.setCapacity(capacity);
        this.parties = [];
        this.lectures = [];
    }

   Hall.prototype.setName = function(name){
        var regex = /^[A-Za-z\s]+$/;
        if(!name.match(regex)){
            throw new Error ('Name must contain only letters and whitespace!')
        } else {
            this._name = name;
        }
    };

    Hall.prototype.getName = function(){
        return this._name;
    };

    Hall.prototype.setCapacity  = function(capacity){
        if(!(typeof (capacity)=== 'number')){
            throw new Error ('Capacity must contain only digits!')
        } else {
            this._capacity = capacity;
        }
        return this;
    };

    Hall.prototype.getCapacity = function(){
        return this._capacity;
    };

     Hall.prototype.addEvent = function(event) {
        if (event instanceof app.party){
            this.parties.push(event);
        } else {
            this.lectures.push(event);
        }
     };

    scope.hall = Hall;

})(app);