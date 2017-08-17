'use strict';

var _chop = require('./chop');

var _chop2 = _interopRequireDefault(_chop);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chop2.default.forEach(function (chopFunction) {
    return describe('chop implementation: ' + chopFunction.name, function () {
        it('should return an integer', function () {
            (0, _chai.expect)(Number.isInteger(chopFunction(1, [2, 3, 4]))).to.equal(true);
        });
        it('should return -1 if the array is empty', function () {
            (0, _chai.expect)(chopFunction(1, [])).to.equal(-1);
        });
        it('should return -1 if the number is not in the array', function () {
            (0, _chai.expect)(chopFunction(1, [2, 3, 4, 5])).to.equal(-1);
        });
        it('should return the position if the number is in the array', function () {
            (0, _chai.expect)(chopFunction(4, [2, 3, 4, 5])).to.equal(2);
        });
        it('should return the size of array -1 if the number is at the end', function () {
            (0, _chai.expect)(chopFunction(5, [2, 3, 4, 5])).to.equal(3);
        });
        it('should return 0 if the number is at the beginning', function () {
            (0, _chai.expect)(chopFunction(2, [2, 3, 4, 5])).to.equal(0);
        });
    });
});