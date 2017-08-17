"use strict";

var _chop = require("./chop");

var _readline = require("readline");

var comms = (0, _readline.createInterface)(process.stdin, process.stdout);
comms.question('What number are you looking for?\n', function (number) {
    if (!Number.isInteger(number)) {
        comms.question('What is the array? (space separated integers please)\n', function (array) {
            var array = array.split(' ');
            console.log((0, _chop.binaryChopRecursive)(number, array));
            comms.close();
        });
    } else {
        comms.close();
    }
});
comms.on('close', function () {
    process.exit(0);
});