/*****************Example-6**********************/
/*****************Multiple Counter**********************/

function makeCounter() {
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
}


var counter1 = makeCounter();
var counter2 = makeCounter();
alert(counter1.value()); //Alerts 0
counter1.increment();
counter1.increment();
alert(counter1.value()); // Alerts 2
counter1.decrement();
alert(counter1.value()); // Alerts 1
alert(counter2.value()); // Alerts 0
