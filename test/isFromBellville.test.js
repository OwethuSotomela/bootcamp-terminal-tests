let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('isFromBellville', function(){

    it('Should return true for registration numbers from that are from Bellville', function(){
        assert.equal(isFromBellville('CY 123'), true);
    })
    it('Should return false for registration numbers that do are not from Bellville', function(){
        assert.equal(isFromBellville('CJ 123'), false);
    })
    it('Should return false for registration numbers that are not from Bellville', function(){
        assert.equal(isFromBellville('67 123 EC'), false);
    })
})