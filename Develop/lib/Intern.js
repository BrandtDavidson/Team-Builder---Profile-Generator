//import our constructor for Employee to use the Object object
const Employee = require('./Employee');

class Intern extends Employee {
    constuctor(name, id, email, institution) {
        super(name, id, email)
        this.institution = institution;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getSchool() {
        return this.institution;
    };

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;