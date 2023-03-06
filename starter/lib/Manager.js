// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

// Manager class is a child of the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email );
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;
