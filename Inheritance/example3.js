

function Shape() {}

Shape.prototype.name = 'Shape';
Shape.prototype.toString = function() {
    return this.name;
}

function TwoDShape() {}

function F() {}

F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = 'TwoDShape';



function Triangle(side, height) {
    this.side = side;
    this.height = height;
}



F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function () {
    return this.side * this.height/2;
}



/**** In Console ********/

var shape = new Shape();
var twodshape = new TwoDShape();
var triangle = new Triangle(2,4);

triangle.toString();
twodshape.toString();
shape.toString();

triangle.__proto__ === Triangle.prototype;
triangle.__proto__.__proto__ === TwoDShape.prototype;
triangle.__proto__.__proto__.__proto__ === Shape.prototype;

console.log('The shape is:'+new Triangle()); // The shape is Triangle

/**** End In Console ********/




