(function (w,$) {
    'use strict';


    function A() {
        $.ajax({
            url: "https://api.github.com/users/webgene",
            type: "GET",
        }).done(function(data) {
            console.log(data);
        });
    }



    console.log("Is is Async");

    function B() {
        $.ajax({
            url: "https://api.github.com/users/callmecavs",
            type: "GET",
        }).done(function(data) {
            console.log(data);
        });
    }

    A();
    console.log("Now Is it");
    B();

}(window, $));