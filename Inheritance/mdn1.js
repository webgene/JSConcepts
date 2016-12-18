// Different ways to create objects and the resulting prototype chain

// Objects created with syntax constructs

var log = console.log;
var o = {a:1};

log('-----Object----');
log(o.__proto__ === Object.prototype);
log(o.__proto__.__proto__ === null);


var arr = ['first', 'second', 'third'];
log('-----Array----');
log(arr.__proto__ === Array.prototype);
log(arr.__proto__.__proto__ === Object.prototype);
log(arr.__proto__.__proto__.__proto__ === null);


function Func() {
    return 1;
}
log('-----Function----');
log(Func.__proto__ === Function.prototype);
log(Func.__proto__.__proto__ === Object.prototype);
log(Func.__proto__.__proto__.__proto__ === null);


// With a constructor

function Person() {
    this.name = 'john';
    this.age = '22';
}

Person.prototype.personInfo = function() {
    return 'Name :'+this.name+' Age :'+this.age;
}

var p = new Person();

log('----With Constructor----');
log(Person.prototype === p.__proto__);


// With Object.create

log('----With Object.create----');

var a = {a: 1};

var b = Object.create(a);

log(b.a);

var c = Object.create(b);

var d = Object.create(null);

log(c.__proto__ === b);
log(b.__proto__ === a);
log(d.hasOwnProperty);