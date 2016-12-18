(function() {
    'use strict';

    var log = console.log;

    function Shape() {
        this.name = 'Shape';
        this.toString = function() {
            return this.name;
        }
    }

    function TwoDShape() {
        this.name = '2D Shape';
    }

    function Triangle(side, height) {
        this.name = 'Triangle';
        this.side = side;
        this.height = height;
        this.getArea = function() {
            return this.side * this.height / 2;
        }
    }



    TwoDShape.prototype = new Shape();
    Triangle.prototype =  new TwoDShape();



    TwoDShape.prototype.constructor = TwoDShape;
    Triangle.prototype.constructor = Triangle;

    var triangle = new Triangle(2, 4);
    var twodshape = new TwoDShape();
    var shape = new Shape();


    // Test

    log('triangle.getArea() :'+triangle.getArea());
    log('triangle.toString() :'+triangle.toString());
    log(triangle.constructor === Triangle);
    log(twodshape.constructor === TwoDShape);
    log(shape.constructor === Shape);


    log(triangle instanceof Triangle);
    log(triangle instanceof TwoDShape);
    log(triangle instanceof Shape);
    log(triangle instanceof Object);


    log('Triangle.prototype.isPrototypeOf(triangle) :'+ Triangle.prototype.isPrototypeOf(triangle));
    log('TwoDShape.prototype.isPrototypeOf(triangle) :'+ TwoDShape.prototype.isPrototypeOf(triangle));
    log('Shape.prototype.isPrototypeOf(triangle) :'+ Shape.prototype.isPrototypeOf(triangle));
    log('Object.prototype.isPrototypeOf(triangle) :'+ Object.prototype.isPrototypeOf(triangle));


    log('triangle.hasOwnProperty(side) :'+ triangle.hasOwnProperty('side'));
    log('triangle.hasOwnProperty(toString) :'+ triangle.hasOwnProperty('toString'));


})();