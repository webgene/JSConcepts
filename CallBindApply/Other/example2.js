/******Example-2*********/

//JSSexy

// This data variable is a global variable​

var data = [
    {name:"Samantha", age:12},
    {name:"Alexis", age:14}
];
var user = {
    // local data variable​
    data    :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    showData:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1;
                    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
    }
};
// Assign the showData method of the user object to a variable​
var showDataVar = user.showData;
showDataVar (); // Samantha 12 (from the global data array, not from the local data array)​

var showDataValue = user.showData.bind(user);
showDataValue();