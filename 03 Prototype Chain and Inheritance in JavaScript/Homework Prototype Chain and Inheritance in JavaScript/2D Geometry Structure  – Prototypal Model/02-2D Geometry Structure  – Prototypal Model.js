//------EXTENDS-------
Object.prototype.extend = function (properties){
    function F(){}
    F.prototype = Object.create(this);
    for (var prop in properties) {
        F.prototype[prop] = properties[prop]
    }
    F.prototype._super=this;
    return new F();
};
//-----Point------------------------------------------
function Point (x,y){
    this._x = x;
    this._y = y;
}

Point.prototype.toString = function toString() {
    return "[" + this._x + "," + this._y + "]"
};

var shapes = (function () {
    //-----Shape------------------------------------------
    var shape = {
        init : function (point, color){
            this._point = point;
            this._color = color;
            return this
        },
        toString :function (){
            return "Color: "+this._color+", Point: "+this._point
        }
    };

//-----Circle------------------------------------------
    var circle = shape.extend(
        {
            init : function (point, color, radius){
                this._super.init.call(this, point, color);
                this._radius = radius;
                return this
            },
            toString : function () {
                return 'Circle: '+ this._super.toString.call(this) + ", Radius:" + this._radius;
            }
        }
    )
//-----Rectangle------------------------------------------
    var rectangle = shape.extend({
        init : function(point, color, width, height){
            this._super.init.call(this, point, color);
            this._width = width;
            this._height = height;
            return this
        },
        toString : function ( ){
            return "Rectangle: "+ this._super.toString.call(this) + ", Width: "+ this._width + ", Height: "+ this._height
        }
    });
//-----Line------------------------------------------
    var line =  shape.extend({
        init:function(point1,point2, color){
            this._super.init.call(this, point1, color);
            this._point2 = point2;
            return this
        },
        toString : function(){
            return "Line/Segment: "+ this._super.toString.call(this)+ ", Second point: "+ this._point2
        }
    });
//-----Triangle------------------------------------------
    var triangle = shape.extend({
        init : function(point1, point2, point3, color){
            this._super.init.call(this, point1, color);
            this._point2 = point2;
            this._point3 = point3;
            return this
        },
        toString : function (){
            return "Triangle: "+ this._super.toString.call(this) +", Second point:" +this._point2 +", Third point: "+ this._point3
        }
    });


//-----Segment ------------------------------------------
    var segment = Object.create(line);


    return {
        shape : shape,
        circle : circle,
        rectangle:rectangle,
        triangle:triangle,
        line:line,
        segment: segment
        }
})();


//------Console.log-----
var myPoint = new Point(2,2);
//var myShape = Object.create(shapes.shape).init(myPoint, "#FFF");
//console.log(myShape.toString());


var myCircle = Object.create(shapes.circle).init(myPoint,"#FFF", 20 );
console.log(myCircle.toString());

//????
var myCircle1 = shapes.circle.init(myPoint,"#FFF", 20 );
console.log(myCircle1.toString());

//var myRectangle = Object.create(shapes.rectangle).init(myPoint, '#FFF', 20, 30);
//console.log(myRectangle.toString());
//
//var myTriangle = Object.create(shapes.triangle).init(myPoint, new Point(3,3), new Point(3,2),'#0FAA');
//console.log(myTriangle.toString());
//
//var myLine = Object.create(shapes.line).init(myPoint,new Point(3,3), 'red');
//console.log(myLine.toString());
//
//var mySegment = Object.create(shapes.segment).init(myPoint,new Point(3,3), 'blue');
//console.log(mySegment.toString());
