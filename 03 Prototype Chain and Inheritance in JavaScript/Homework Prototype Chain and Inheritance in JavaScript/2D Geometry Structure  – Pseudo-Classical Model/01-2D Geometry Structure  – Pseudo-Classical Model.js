//------EXTENDS-------
Function.prototype.extends = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this
};
//-----Point------------------------------------------
function Point (x, y) {
    this._x = x;
    this._y = y;
}
Point.prototype.toString = function() {
    return '['+this._x+','+this._y+']'
};

//---------IIFE------------------------
var Shapes = (function () {
//-----Shape------------------------------------------
    function Shape (point, color) {
        this._point = point;
        this._color=color;
    }
    Shape.prototype.toString =  function (){
        return 'Color: '+ this._color + ', Point: '+ this._point;
    };

//-----Circle------------------------------------------
    function Circle (point, color, radius){
        Shape.call(this,point, color);
        this._radius= radius;
    }

    Circle.extends(Shape);
    Circle.prototype.toString = function (){
        return "Circle: "+ Shape.prototype.toString.call(this) + ', Radius: '+ this._radius
    };


//-----Rectangle------------------------------------------
    function Rectangle (point, color, width, height){
        Shape.call(this, point, color);
        this._width = width;
        this._height =  height;
    }
    Rectangle.extends(Shape);
    Rectangle.prototype.toString = function (){
        return "Rectangle: " + Shape.prototype.toString.call(this) + ", width: "+ this._width + ", height: "+ this._height
    };

//-----Line------------------------------------------
    function Line (point1, point2, color){
        Shape.call(this, point1, color);
        this._point2 = point2;
    }
    Line.extends(Shape);
    Line.prototype.toString =  function () {
        return 'Line/Segment: '+Shape.prototype.toString.call(this) + ", Second point: "+ this._point2
    };


//-----Triangle------------------------------------------
    function Triangle (point1, point2, point3, color){
        Line.call(this, point1, point2, color);
        this._point3 = point3
    }
    Triangle.extends(Line);
    Triangle.prototype.toString =  function () {
        return "Triangle: "+ Line.prototype.toString.call(this) + ", Third point: "+ this._point3
    };


//-----Segment ------------------------------------------
    function  Segment (point1, point2, color){
        Line.call(this, point1, point2, color)
    }
    Segment.extends(Line);

//------MODULE PATTERN-----
    return {
        triangle: Triangle,
        circle: Circle,
        rectangle: Rectangle,
        line: Line,
        segment: Segment
    }
})();

var myPoint = new Point(2,3);

var myCircle = new Shapes.circle(myPoint, '#fff', 10);
console.log(myCircle.toString());
var myRectangle = new Shapes.rectangle(myPoint, '#ffc', 20, 35);
console.log(myRectangle.toString());
var myLine = new Shapes.line(myPoint, new Point(2,2), '#fcf');
console.log(myLine.toString());
var myTriangle = new Shapes.triangle(myPoint, new Point(1,1), new Point( 10, 1), '#fff');
console.log(myTriangle.toString());
var mySegment = new Shapes.segment(new Point(11,11), new Point(22,22), '#A0FF');
console.log(mySegment.toString());
