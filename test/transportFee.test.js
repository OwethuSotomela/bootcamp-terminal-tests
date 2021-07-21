let assert = require("assert");
let transportFee = require("../transportFee");

describe("transportFee", function(){
    it("Should return the taxi fee based to the shift you are working", function(){
        assert.equal(transportFee('morning'), 'R20');
        assert.equal(transportFee('afternoon'), 'R10');
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })  
})