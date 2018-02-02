"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phone_formatter_1 = require("../src/phone-formatter");
var chai_1 = require("chai");
describe('Spanish phone numbers', function () {
    it('return as is if prefix found ', function () {
        chai_1.expect(phone_formatter_1.default('+34 944 646 821')).to.equal('+34 944 646 821');
    });
    it('recognise and format landline (without spaces)', function () {
        chai_1.expect(phone_formatter_1.default('944646821')).to.equal('+34 944 646 821');
    });
    it('recognise and format landline (with spaces)', function () {
        chai_1.expect(phone_formatter_1.default('944 646 821')).to.equal('+34 944 646 821');
    });
    it('recognise and format mobile (without spaces)', function () {
        chai_1.expect(phone_formatter_1.default('655746535')).to.equal('+34 655 746 535');
    });
    it('recognise and format mobile (with spaces, option 1)', function () {
        chai_1.expect(phone_formatter_1.default('655 746 535')).to.equal('+34 655 746 535');
    });
    it('recognise and format mobile (with spaces, option 2)', function () {
        chai_1.expect(phone_formatter_1.default('655 74 65 35')).to.equal('+34 655 746 535');
    });
    it('recognise and format mobile (with crazy spaces)', function () {
        chai_1.expect(phone_formatter_1.default('6 5 5 7 4 6 5 3 5')).to.equal('+34 655 746 535');
    });
});
describe('United Kingdom phone numbers', function () {
    it('return as is if prefix found ', function () {
        chai_1.expect(phone_formatter_1.default('+44 7597 178 112')).to.equal('+44 7597 178 112');
    });
    it('recognise and format landline 01 (without spaces)', function () {
        chai_1.expect(phone_formatter_1.default('01002003655')).to.equal('+44 1002 003 655');
    });
    it('recognise and format landline 01 (with spaces)', function () {
        chai_1.expect(phone_formatter_1.default('0100 200 3655')).to.equal('+44 1002 003 655');
    });
    it('recognise and format landline 02 (without spaces)', function () {
        chai_1.expect(phone_formatter_1.default('02002003655')).to.equal('+44 2002 003 655');
    });
    it('recognise and format landline 01 (with spaces)', function () {
        chai_1.expect(phone_formatter_1.default('0200 200 3655')).to.equal('+44 2002 003 655');
    });
    it('recognise and format landline 03 (without spaces)', function () {
        chai_1.expect(phone_formatter_1.default('03002003655')).to.equal('+44 3002 003 655');
    });
    it('recognise and format landline 03 (with spaces)', function () {
        chai_1.expect(phone_formatter_1.default('0300 200 3655')).to.equal('+44 3002 003 655');
    });
    it('recognise and format mobile (without spaces)', function () {
        chai_1.expect(phone_formatter_1.default('07528173120')).to.equal('+44 7528 173 120');
    });
    it('recognise and format mobile (with spaces)', function () {
        chai_1.expect(phone_formatter_1.default('07528 173 120')).to.equal('+44 7528 173 120');
    });
    it('recognise and format mobile (with crazy spaces)', function () {
        chai_1.expect(phone_formatter_1.default('0 7 5 2 8 1 7 3 1 2 0')).to.equal('+44 7528 173 120');
    });
});
describe('Other cases', function () {
    it('return as is if not recognised', function () {
        chai_1.expect(phone_formatter_1.default('1300 200 365')).to.equal('1300 200 365');
    });
});
//# sourceMappingURL=Test.js.map