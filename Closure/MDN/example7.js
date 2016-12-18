/*****************Example-7**********************/
/*****************Creating closures in loops: A common mistake**********************/


function showHelp(help) {
    document.getElementById("help").innerHTML = help;
}


function helpSetup() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function () {
            showHelp(item.help);
        }
    }
}


helpSetup();