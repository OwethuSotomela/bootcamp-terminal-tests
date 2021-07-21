let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe("totalPhoneBill", function () {

    it("Should calculate the total of two calls and three smses made and return the total", function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    })
    it("Should calculate the total of a single call and an smses made and return the total", function () {
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    })
    it("Should calculate the total of two smses made and return the total", function () {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
    it("Should calculate the total of two smses made and return the total", function () {
        assert.equal('R3.90', totalPhoneBill('sms, sms, sms, sms, sms, sms'));
    })
    it("Should calculate the total of two smses made and return the total", function () {
        assert.equal('R16.50', totalPhoneBill('call, call, call, call, call, call'));
    })
})