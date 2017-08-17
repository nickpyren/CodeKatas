import chopFunctions from "./chop";
import { expect } from 'chai';
chopFunctions.forEach( chopFunction => describe('chop implementation: ' + chopFunction.name, function(){
    it('should return an integer', function(){
        expect(Number.isInteger(chopFunction(1, [2,3,4]))).to.equal(true);
    });
    it('should return -1 if the array is empty', function(){
        expect(chopFunction(1,[])).to.equal(-1);
    });
    it('should return -1 if the number is not in the array', function(){
        expect(chopFunction(1,[2,3,4,5])).to.equal(-1);
    });
    it('should return the position if the number is in the array', function(){
        expect(chopFunction(4,[2,3,4,5])).to.equal(2);
    });
    it('should return the size of array -1 if the number is at the end', function(){
        expect(chopFunction(5,[2,3,4,5])).to.equal(3);
    });
    it('should return 0 if the number is at the beginning', function(){
        expect(chopFunction(2,[2,3,4,5])).to.equal(0);
    });
}));
