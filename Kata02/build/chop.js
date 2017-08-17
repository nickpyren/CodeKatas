"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.binaryChopRecursive = binaryChopRecursive;
exports.binaryChopLoop = binaryChopLoop;
/*
Assumptions:
-num is an integer
-array is an array of sorted integers
*/

function binaryChopRecursive(num, array) {
    //Base Case
    if (array.length == 0) {
        return -1;
    }
    if (array.length == 1) {
        if (array[0] == num) {
            return 0;
        }
        return -1;
    }

    var mid = Math.floor(array.length / 2);
    if (num < array[mid]) {
        return binaryChopRecursive(num, array.slice(0, mid));
    } else if (num > array[mid]) {
        return mid + binaryChopRecursive(num, array.slice(mid, array.length));
    }
    return mid;
}

function binaryChopLoop(num, array) {}

var chopFunctions = [binaryChopRecursive, binaryChopLoop];
exports.default = chopFunctions;