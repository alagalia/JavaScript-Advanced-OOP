var app = app || {};
(function (scope) {

    function Course(name, numberOfLectures) {
        this.setName(name);
        this.setNumberOfLectures(numberOfLectures);
    }

    Course.prototype.setName = function setName(name){
        var regex = /^[A-Za-z\s]+$/;
        if(!name.match(regex)){
            throw new Error ('Name must contain only letters and whitespace!')
        } else {
            this._name = name;
        }
    };

    Course.prototype.getName = function(){
        return this._name;
    };

    Course.prototype.setNumberOfLectures = function(numberOfLectures){
        if(!(typeof (numberOfLectures) === 'number')){
            throw new Error ('Number Of Lectures must be only digits!')
        } else {
            this._numberOfLectutres = numberOfLectures;
        }
    };

    Course.prototype.getNumberOfLectures = function(){
        return this._numberOfLectutres;
    };

    scope.course = Course;
})(app);