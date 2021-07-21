let assert = require("assert");
let isWeekday = require("../isWeekday");

describe("isWeekday", function () {
    it("Should check if the day passed in is a weekday and not a weekend", function () {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
        assert.equal(isWeekday('Sunday'), false);
    })
})