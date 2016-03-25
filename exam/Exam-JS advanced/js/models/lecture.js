var app = app || {};

(function (scope) {

    function Lecture (options) {
        scope._Event.apply(this,arguments);
        this.setTrainer(options.trainer);
        this.setCourse(options.course)
    }

    Lecture.extends(scope._Event);

    Lecture.prototype.setTrainer = function(trainer){
        if(!trainer instanceof trainer.constructor ){
            throw new Error ('Trainer must be only Trainer instances!')
        } else {
            this._trainer = trainer;
        }
    };

    Lecture.prototype.getTrainer = function(){
        return this._trainer;
    };

    Lecture.prototype.setCourse = function(course){
        if(!(course instanceof course.constructor )){
            throw new Error ('Course must be only Course instances!')
        } else {
            this._course = course;
        }
    };

    Lecture.prototype.getCourse = function(){
        return this._course;
    };


    scope.lecture = Lecture;
})(app);