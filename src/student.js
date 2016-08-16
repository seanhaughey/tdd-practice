'use strict';

const accounting = require('accounting');

class Student {
  constructor(fn, ln, sal) {
    this.firstName = fn;
    this.lastName = ln;
    this.salary = sal
  };

  fullName() {
    return this.firstName + ' ' + this.lastName;
  };

  formattedSalary() {
    return accounting.formatMoney(this.salary);
  }
};



// function Student(fn, ln, sal) {
//   this.firstName = fn;
//   this.lastName = ln;
//   this.salary = sal
// };
//
// Student.prototype.fullName = function () {
//   return this.firstName + ' ' + this.lastName;
// };
//
// Student.prototype.formattedSalary = function () {
//   return accounting.formatMoney(this.salary);
// };




module.exports = Student;
