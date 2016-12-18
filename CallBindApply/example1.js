

var user = {
    data: [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43}
    ],
    clickHandler: function (event) {
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
        document.getElementsByTagName("input")[0].value = this.data[randomNum].name + " " + this.data[randomNum].age;
    }
}

document.getElementsByTagName("button")[0].onclick = user.clickHandler.bind(user);
//document.getElementById("btn").onclick = user.clickHandler;