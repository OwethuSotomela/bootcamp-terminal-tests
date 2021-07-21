let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("yearsAgo", function(){
    it("Should check how many years a year passed in is from the current year", function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    })
})