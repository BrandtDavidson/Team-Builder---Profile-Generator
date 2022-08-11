// Using Object object and class/constructor function 
// naming is based upon the given (from instructor) tests
class Employee {
    // here is the constructor function passing through name, id and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
    getRole() {
        return 'Employee';
    };
}


// A named exported aliased with Employee
//exporting module for later importing 
module.exports = Employee;