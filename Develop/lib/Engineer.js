// import our made constructor function for Employee
const Employee = require('./Employee');

// New class and constructor function, extending from Employee (passing through different arguments here)
class Engineer extends Employee {
    constructor(name, id, email, githubProfile) {
        // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor (MDN)
        super(name, id, email)
        this.githubProfile = githubProfile;
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

    GitHubUser() {
        return this.githubProfile;
    };
    
    getRole() {
        return 'Engineer';
    };
}

//export this constructor 
module.exports = Engineer;