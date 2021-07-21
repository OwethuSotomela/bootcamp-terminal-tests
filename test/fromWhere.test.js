let assert = require("assert");
let fromWhere = require("../fromWhere");

describe("fromWhere", function(){
    it("Should return the town the car registration number is from", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
        assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('CA'), 'Cape Town');
    })
    it("Should return Some other place for car registration numbers that are not from Bellville, Paarl and Cape Town", function(){
        assert.equal(fromWhere('EC'), 'Some other place!');
    })
    it("Should return Some other place for car registration numbers that are not from Bellville, Paarl and Cape Town", function(){
        assert.equal(fromWhere('L'), 'Some other place!');
    })
    it("Should return Some other place for car registration numbers that are not from Bellville, Paarl and Cape Town", function(){
        assert.equal(fromWhere('MP'), 'Some other place!');
    })
    it("Should return Some other place for car registration numbers that are not from Bellville, Paarl and Cape Town", function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    })
})