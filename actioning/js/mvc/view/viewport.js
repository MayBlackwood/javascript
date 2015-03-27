/* jshint strict: true */
/* globals rpApp */

rpApp.Viewport = function(settings) {
    "use strict";

    var defaults = {
        "class": "rp-viewport",
        "id": "rpViewport",
        "views": [
        ]
    };

    rpApp.Viewport.superclass.constructor.call(this, defaults, settings);
};

rpApp.extend(rpApp.Viewport, rpApp.BaseComponent);

rpApp.Viewport.prototype.render = function() {
    "use strict";
    
    var viewport = document.createElement("DIV"),
        views = this.settings.views,
        i, lth;

    viewport.id = this.settings.id;
    viewport.setAttribute("class", this.settings.class);

    for(i = 0, lth = views.length; i < lth; i++) {
        rpApp.create(views[i]);
    }

    /*
     TODO: iterate through the views and add them to the container
     each element is configured, and should be rendered based on this configuration.
     */

    // rpApp.create("BookList", {});

    document.body.innerHTML = "";
    document.body.appendChild(viewport);

    // return Fish.superclass.toString.call(this) + ", " + this.esculent? "esculent": "not esculent";
};

