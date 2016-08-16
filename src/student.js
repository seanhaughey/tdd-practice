function Student(fn, ln, sal) {
  this.firstName = fn;
  this.lastName = ln;
  this.salary = sal
};

Student.prototype.fullName = function () {
  return this.firstName + ' ' + this.lastName;
};

module.exports = Student;
