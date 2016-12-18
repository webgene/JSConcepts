/**
 * Created by smohan5 on 7/9/16.
 */


/*******************Example-1**************************/
/*******************Noormal Function**************************/
/*
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert(name); // use variable declared in the parent function
    }
    displayName();
}
init();*/


/*******************Example-2**************************/
/*******************Closure Example-1**************************/
/*
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();*/

/*******************Example-3**************************/
/*******************Closure Example-2**************************/

/*
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12*/

/*******************Example-4**************************/
/*******************Practical Closure**************************/
/*
function makeSizer(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

*/

/*****************Example-5**********************/
/*****************Emulating Private Methods with Closure**********************/

/*var counter =(function(){
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter +=privateCounter;
    }
    
    return {
        increment: function() {
            privateCounter++;
        },
        decrement: function() {
            privateCounter--;
        },
        value: function () {
            return privateCounter;
        }
    }
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1*/


/*****************Example-6**********************/
/*****************Multiple Counter**********************/

/*
function makeCounter(){
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter +=privateCounter;
    }

    return {
        increment: function() {
            privateCounter++;
        },
        decrement: function() {
            privateCounter--;
        },
        value: function () {
            return privateCounter;
        }
    }
}


var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); /!* Alerts 0 *!/
counter1.increment();
counter1.increment();
alert(counter1.value()); /!* Alerts 2 *!/
counter1.decrement();
alert(counter1.value()); /!* Alerts 1 *!/
alert(counter2.value()); /!* Alerts 0 *!/
*/


/*****************Example-7**********************/
/*****************Creating closures in loops: A common mistake**********************/

function showHelp(help) {
    document.getElementById("help").innerHTML = help;
}

/*function helpSetup() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    for(var i=0; i< helpText.length; i++) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function () {
            showHelp(item.help);
        }
    }
}*/

function makeHelpCallback(help) {
    return function () {
        showHelp(help);
    }
}

function helpSetup() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
}



helpSetup();