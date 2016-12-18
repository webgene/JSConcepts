


function Shape() {}

Shape.prototype.name = 'Shape';
Shape.prototype.toString = function() {
    return this.name;
}

function TwoDShape() {}

TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;

TwoDShape.prototype.name = '2D Shape';


function Triangle(side, height) {
    this.side = side;
    this.height = height;

}

Triangle.prototype =  TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;

Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function() {
    return this.side * this.height / 2;
}

var triangle = new Triangle(2, 4);
var twodshape = new TwoDShape();
var shape = new Shape();


// Test

console.log(triangle.getArea());
console.log('triangle.toString() :'+triangle.toString());
console.log(triangle.constructor === Triangle);
console.log(twodshape.constructor === TwoDShape);
console.log(shape.constructor === Shape);


console.log(triangle instanceof Triangle);
console.log(triangle instanceof TwoDShape);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);


console.log('Triangle.prototype.isPrototypeOf(triangle) :'+ Triangle.prototype.isPrototypeOf(triangle));
console.log('TwoDShape.prototype.isPrototypeOf(triangle) :'+ TwoDShape.prototype.isPrototypeOf(triangle));
console.log('Shape.prototype.isPrototypeOf(triangle) :'+ Shape.prototype.isPrototypeOf(triangle));
console.log('Object.prototype.isPrototypeOf(triangle) :'+ Object.prototype.isPrototypeOf(triangle));


console.log('triangle.hasOwnProperty(side) :'+ triangle.hasOwnProperty('side'));
console.log('triangle.hasOwnProperty(toString) :'+ triangle.hasOwnProperty('toString'));
console.log('triangle.hasOwnProperty(name) :'+ triangle.hasOwnProperty('name'));


// Problem

console.log(twodshape.name); // Triangle
console.log(shape.name); // Triangle
