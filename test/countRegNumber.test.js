let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe("countRegNumber", function(){
it("Should count and return the number of registration numbers in the string", function(){
    var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
    assert.equal(regCount, 3);
})
it("Should return the number of registration numbers in the string", function(){
    var regCount = countRegNumber('CA 42665, AA 12 RT GP')
    assert.equal(regCount, 2);
})
})