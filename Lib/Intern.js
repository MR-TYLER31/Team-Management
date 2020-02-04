const Employee = require("../Lib/Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.role = "Intern";
    this.school = school;
  }

  getSchoool() {
    return this.school;
  }
}

module.exports = Intern;
