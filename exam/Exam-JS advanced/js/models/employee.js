var app = app || {};
(function (scope) {

    function Employee(name,workHours) {
        this.setName(name);
        this.setWorkHours(workHours);
    }

    Employee.prototype.setName = function (name){
            this._name = name;
    };

    Employee.prototype.getName = function(){
        return this._name;
    };

    Employee.prototype.setWorkHours = function(workHours){
        if(!(typeof (workHours) === 'number')){
            throw new Error ('Work Hours must contain only digits!')
        } else {
            this._workHours = workHours;
        }
        return this;
    };

    Employee.prototype.getWorkhours = function(){
        return this._workHours;
    };


    scope.employee = Employee;

})(app);