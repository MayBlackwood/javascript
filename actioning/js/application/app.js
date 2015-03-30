/* jshint strict: true */
/* globals rpApp */

window.onload = function() {
    "use strict";

    var viewport = {
        "id": "myApp",
        "title": "Book store",
        "namespace": "itechart.mvc.project",
        "views": [
            "itechart.mvc.project.view.BookList"
        ]
    };

    rpApp.launch({
        "name": "My MVC application"
    }, viewport);

};