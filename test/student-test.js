'use strict';

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
  });

  describe('#formattedSalary()', function () {
    it('should convert #salary into a currency', function () {
      const wes = new Student('Wes', 'Hoover', 70000);
      assert.equal(wes.formattedSalary(), '$70,000.00');
    });
  });

  describe('#giveRaise()', function () {
    it('should increment #salary by 10%', function () {
      let richard = new Student('Richard', 'Davis', 70000);
      richard.giveRaise();
      assert.equal(richard.salary, 77000);
    })
  })

});
