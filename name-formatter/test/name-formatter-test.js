const chai = require('chai');
const assert = chai.assert;

const NameFormatter = require('../name-formatter');

describe('invert name', function () {

    it('should return an empty string when passed an empty string', function () {
        const nameFormatter = new NameFormatter();
        const inputName = "";
        const expectedOutput = "";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
    it('should return a single name when passed a single name', function () {
        const nameFormatter = new NameFormatter();
        const inputName = "name"
        const expectedOutput = "name";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
    it('should return a single name when passed a single name with extra spaces', function () {
        const nameFormatter = new NameFormatter();
        const inputName = " name "
        const expectedOutput = "name";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
    it('should return a last-name, first-name when passed a first and last-name', function () {
        const nameFormatter = new NameFormatter();
        const inputName = "first last"
        const expectedOutput = "last, first";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
    it('should return a last-name, first-name when passed a first and last-name with extra spaces around the names', function () {
        const nameFormatter = new NameFormatter();
        const inputName = " first last"
        const expectedOutput = "last, first";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
    it('should return an empty string when passed a single honorific', function () {
        const nameFormatter = new NameFormatter();
        const inputName = "Dr. "
        const expectedOutput = "";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
    it('should return honorific first-name when passed honorific first-name', function () {
        const nameFormatter = new NameFormatter();
        const inputName = "Dr. first"
        const expectedOutput = "Dr. first";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
    it('should return a honorific last-name, first-name when passed honorific first-name last-name', function () {
        const nameFormatter = new NameFormatter();
        const inputName = "Dr. first-name last-name"
        const expectedOutput = "Dr. last-name, first-name";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
    it('should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function () {
        const nameFormatter = new NameFormatter();
        const inputName = " Dr. first-name last-name "
        const expectedOutput = "Dr. last-name, first-name";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
    });
    it('should throw an error when name is undefined', function () {
        const nameFormatter = new NameFormatter();
        const inputName = undefined
        assert.throws(() => nameFormatter.invertName(inputName), "Error");
    });
    

});