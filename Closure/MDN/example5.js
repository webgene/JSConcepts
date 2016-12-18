/*****************Example-5**********************/
/*****************Emulating Private Methods with Closure**********************/

var counter = (function () {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += privateCounter;
    }

    return {
        increment: function () {
            privateCounter++;
        },
        decrement: function () {
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
console.log(counter.value()); // logs 1