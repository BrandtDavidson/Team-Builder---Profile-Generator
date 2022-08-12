// import our made constructor function for Employee
const Employee = require('./Employee');

// New class and constructor function, extending from Employee (passing through different arguments here)
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor (MDN)
        super(name, id, email);
        this.github = github;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return 'Engineer';
    }
}

//export this constructor 
module.exports = Engineer;