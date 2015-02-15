(function() { 'use strict'

    var root = this;

    var JS2PNG = JS2PNG || {};

    var OUTPUT_FILTERED = 0,
        OUTPUT_8BIT = 1,
        OUTPUT_8BIT_GRAY = 1,
        OUTPUT_24BIT = 1,
        OUTPUT_32BIT = 1;

    var BYTE_STORE = {};

    JS2PNG.Encode = function() {

        var data = arguments[0],
            prefix = arguments[1] || "undefined",
            size = data.length;

        for (var ii = 0, bytes = []; ii < size; ++ii) {
            bytes.push(data.charCodeAt(ii));
        }

        BYTE_STORE[prefix + "_ascii"] = bytes;

        bytes = [];

        var sequences = Math.ceil((data.length) / 8); 

        var cObj = {
            c1: "",
            c2: "",
            c3: "",
            c4: "",
            c5: "",
            c6: "",
            c7: "",
            c8: ""
        };

        for (var ii = 0; ii < sequences; ++ii) {
            cObj.c1 += data.substr( (ii * 8) + 0, 1);
            cObj.c2 += data.substr( (ii * 8) + 1, 1);
            cObj.c3 += data.substr( (ii * 8) + 2, 1);
            cObj.c4 += data.substr( (ii * 8) + 3, 1);
            cObj.c5 += data.substr( (ii * 8) + 4, 1);
            cObj.c6 += data.substr( (ii * 8) + 5, 1);
            cObj.c7 += data.substr( (ii * 8) + 6, 1);
            cObj.c8 += data.substr( (ii * 8) + 7, 1);
        }

    };

    JS2PNG.Encode("HelloWorld", "Filename");

    root.JS2PNG = JS2PNG;

}).call(this);