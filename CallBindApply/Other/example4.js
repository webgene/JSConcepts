/******Example-4*********/

//JSSexy - Currying

function greet(gender, age, name) {
    // if a male, use Mr., else use Ms.​
    var salutation = gender === "male" ? "Mr. " : "Ms. ";

    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}


var greetAnAdultMale = greet.bind(null, 'male', '40');

greetAnAdultMale('John');
var greetAYoungster = greet.bind (null, "", 16);
greetAYoungster ("Alex"); // "Hey, Alex."​
greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."​
