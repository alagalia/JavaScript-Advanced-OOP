var app = app || {};

(function (scope) {

    function Event(options) {
        if (this.constructor === Event) {
            throw new Error("Can't instantiate abstract class!");
        } else {
        this.setTitle(options.title) ;
        this.setType(options.type) ;
        this.setDuration(options.duration) ;
        this.setDate(options.date) ;
        }
    }

    Event.prototype.setTitle = function(title){
        var regex = /^[A-Za-z\s]+$/;
        if(!title.match(regex)){
            throw new Error ('Title must contain only letters and whitespace!')
        } else {
            this._title = title;
        }
    }

    Event.prototype.getTitle=  function(){
        return this._title;
    };


    Event.prototype.setType = function (type){
        var regex = /^[A-Za-z\s]+$/;
        if(!type.match(regex)){
            throw new Error ('Type must contain only letters and whitespace!')
        } else {
            this._type = type;
        }
    };

    Event.prototype.getType = function(){
        return this._type;
    };


    Event.prototype.setDuration = function(duration){
        if(!(typeof (duration) === 'number')){
            throw new Error ('Duration must contain only digits!')
        } else {
            this._duration = duration;
        }
    };

    Event.prototype.getDuration = function(){
        return this._duration;
    };

    Event.prototype.setDate = function(date){
        if(!(date instanceof Date) ){
            throw new Error ('Date must be only Date instances!')
        } else {
            this._date = date;
        }
    };

    Event.prototype.getDate = function(){
        return this._date;
    };

    scope._Event = Event; //if global inheritance id needed

    scope.event = Event;

})(app);