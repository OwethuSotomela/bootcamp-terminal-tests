let assert = require("assert");
let transportFee = require("../transportFee");

describe("transportFee", function(){
    it("Should return the taxi fee based to the shift you are working, if you are working 'morning' shift the transport cost is R20", function(){
        assert.equal(transportFee('morning'), 'R20');
    })
    it("Should return the taxi fee based to the shift you are working, if you are working 'afternoon' shift the transport cost is R10", function(){
        assert.equal(transportFee('afternoon'), 'R10');
    })
    it("Should return the taxi fee based to the shift you are working, if you are working 'nightshift' shift the transport cost is free", function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    })    
})