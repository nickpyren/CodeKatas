import {binaryChopRecursive} from "./chop";
import {createInterface} from "readline";


var comms = createInterface(process.stdin, process.stdout);
comms.question('What number are you looking for?\n', function (number) {
    if (!Number.isInteger(number)) {
        comms.question('What is the array? (sorted and space separated integers please)\n', function (array) {
            var array = array.split(' ');
            console.log(binaryChopRecursive(number, array));
            comms.close();
        })
    }else{
        comms.close();
    }
});
comms.on('close', function () {
    process.exit(0);
});
