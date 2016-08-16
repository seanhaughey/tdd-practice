const chai = require('chai');
const assert = chai.assert;

const Student = require('../src/student');

describe('Student', function () {

  describe('.new', function () {
    const shirish = new Student('Shirish', 'Dali', 1000000);
    it('should set #firstName', function () {
      assert.equal(shirish.firstName, 'Shirish');
    });

    it('should set #lastName', function () {
      assert.equal(shirish.lastName, 'Dali');
    });

    it('should set #salary', function () {
      assert.equal(shirish.salary, 1000000);
    });
  });

  describe('#fullName()', function () {
    it('should return #firstName and #lastName concatenated', function () {
      const jesse = new Student('Jesse', 'Houghton', 1000000000);
      assert.equal(jesse.fullName(), 'Jesse Houghton');
    });
  })

});
