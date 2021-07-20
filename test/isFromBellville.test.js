let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville', function(){

    it('Should return true for registration numbers that starts with CY', function(){
        assert.equal(isFromBellville('CY 123'), true);
    })
    it('Should return false for registration numbers that do not start with CY', function(){
        assert.equal(isFromBellville('CJ 123'), false);
    })
    it('Should return false for registration numbers that do not start with CY', function(){
        assert.equal(isFromBellville('67 123 EC'), false);
    })
})