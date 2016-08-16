'use strict';

const chai = require('chai');
const assert = chai.assert;

const Student = require('../src/student');

describe('Student', () => {

  describe('.new', () => {
    const shirish = new Student('Shirish', 'Dali', 1000000);
    it('should set #firstName', () => {
      assert.equal(shirish.firstName, 'Shirish');
    });

    it('should set #lastName', () => {
      assert.equal(shirish.lastName, 'Dali');
    });

    it('should set #salary', () => {
      assert.equal(shirish.salary, 1000000);
    });
  });

  describe('#fullName()', () => {
    it('should return #firstName and #lastName concatenated', () => {
      const jesse = new Student('Jesse', 'Houghton', 1000000000);
      assert.equal(jesse.fullName(), 'Jesse Houghton');
    });
  });

  describe('#formattedSalary()', () => {
    it('should convert #salary into a currency', () => {
      const wes = new Student('Wes', 'Hoover', 70000);
      assert.equal(wes.formattedSalary(), '$70,000.00');
    });
  });

  describe('#giveRaise()', () => {
    it('should increment #salary by 10%', () => {
      let richard = new Student('Richard', 'Davis', 70000);
      richard.giveRaise();
      assert.equal(richard.salary, 77000);
    })
  })

});
