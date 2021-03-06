let assert = require("assert");
let regCheck = require("../regCheck");

describe("regCheck", function () {

    it("Should check and return true for Gauteng registration numbers and false for registration that are not from Gauteng", function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    })

    it("Should check and return true for Limpopo registration numbers and false for registration that are not from Limpopo", function () {
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);
    })

    it("Should check and return true for Eastern Cape registration numbers and false for registration that are not from Eastern Cape", function () {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    })

    it("Should check and return true for Mpumalanga registration numbers and false for registration that are not from Mpumalanga", function () {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    })

})