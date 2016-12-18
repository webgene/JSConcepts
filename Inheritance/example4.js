//https://www.youtube.com/watch?v=doXpW5AD60Q&index=7&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f

// https://github.com/nodejs/node-v0.x-archive/blob/master/lib/util.js#L634-L644

var log = console.log;


log('----Inherit Method-----')

var inherit = function(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};



function Person(name) {
    this.name = name;
}


Person.prototype.sayName = function() {
    return 'My Name is '+this.name;
}

function Musician(name, instrument) {
    Musician.super_.call(this,name);
    this.instrument = instrument;
}

inherit(Musician, Person);

var p1 = new Person('John');

var m1 = new Musician('Michael', 'Guitar');

log(m1.name);
log(m1.sayName());
log(m1.instrument);



log('----Create Approch-----');

var human = {
    species: "human",
    create: function(name) {
        var instance = Object.create(this);
        instance.name = name;
        return instance;
    },
    saySpecies: function() {
        console.log(this.species);
    },
    sayName: function() {
        console.log(this.name);
    }
};

var musician = Object.create(human);
musician.playInstrument = function() {
    console.log("Plays :"+this.instrument);
}

var john = human.create("John");

////////////////////////////////
// Above create method can be
/*
create: function(values) {
    var instance = Object.create(this);
    Object.keys(values).forEach(function(key){
        instance[key] = values[key];
    });
    return instance;
}

var musician = human.create({
    species: "musician",
    playInstrument: function() {
        console.log('Plays :'+this.instrument);
    }
});
*/


log('---- Using Constructor -----');


function A(a){
    this.varA = a;
}

function B(a, b){
    A.call(this, a);
    this.varB = b;
}

B.prototype = Object.create(A.prototype);

B.prototype.constructor = B;

var b = new B();
