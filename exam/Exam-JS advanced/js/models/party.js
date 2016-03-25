var app = app || {};
(function (scope) {

    function Party(options) {
        scope._Event.apply(this,arguments);
        this.setIsCatered(options.isCatered);
        this.setIsBirthday(options.isBirthday);
        this.setOrganiser(options.organiser);
    }

    Party.extends(scope._Event);

    Party.prototype.setIsCatered = function(value){
        this._isCatered = Boolean(value);
    };

    Party.prototype.checkIsCatered = function(){
        return this._isCatered;
    };

    Party.prototype.setIsBirthday = function(value){
        this._isBirthday= Boolean(value);
    };

    Party.prototype.checkIsBirthday = function(){
        return this._isBirthday;
    };

    Party.prototype.setOrganiser = function(organiser){
        if(!organiser instanceof app.employee){
            throw new Error ('Organiser must be only Employee instances!')
        } else {
            this._organiser = organiser;
        }
    };

    Party.prototype.getOrganiser = function(){
        return this._organiser;
    };


    scope.party = Party;

})(app);