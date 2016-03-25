var app = app || {};
(function (scope) {

    function Trainer(name, workHours) {
        scope.employee.call(this, name, workHours);
        this.courses =[];
        this.feedback = [];
    }

    Trainer.extends(scope.employee);

    Trainer.prototype.addFeedbacks = function(feedback) {
        if(!(typeof feedback === 'string')){
            throw new Error ('Feedback should be a string!')
        } else {
            this.feedback.push(feedback);
        }
     };

    Trainer.prototype.addCourse  = function(course) {
        if(!(course instanceof course.constructor )){
            throw new Error ('Course is not instance of Course!')
        } else {
            this.courses.push(course);
        }
    };

    scope.trainer = Trainer;
})(app);