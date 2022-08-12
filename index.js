// Including packages needed and importing the given tests for employee, engineer, intern, and manager
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
// const Employee = require("./Develop/__tests__/Employee.test");
// const Engineer = require("./Develop/__tests__/Engineer.test");
// const Intern = require("./Develop/__tests__/Intern.test");
// const Manager = require("./Develop/__tests__/Manager.test");
const Intern = require('./Develop/lib/Intern');
const Engineer = require('./Develop/lib/Engineer');
const Manager = require('./Develop/lib/Manager');


// started by declaring the new team as an empty array in order to insert into later via a push method when getting returned results
const internInsert = [];
const engineerInsert = [];
const managerInsert =[];

const promptQuestions = [
    {
        type: "input",
        name: 'name',
        message: 'Please enter your first and last name:'
    },
    {
        name: 'id',
        message: 'If you have an ID, please enter:'
    },
    {
        name: 'email',
        message: 'Please enter your email address:'
    },
    {
        name: 'officeNumber',
        message: 'If you have an office number, please enter it:'
    },
    
];

const advanceSeries = [
    {
        type: 'list',
        name: 'advanceSeries',
        message: 'Please select a role you would like to add for your team',
        choices: ['Engineer', 'Intern', 'My team is already built']
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: 'name',
        message: 'Please enter the name of the engineer:'
    },
    {
        name: 'email',
        message: 'Please enter the email address of your employee:',
    },
    {
        name: 'id',
        message: 'Please enter the ID of your employee, if no ID has been assigned then enter 0000',
    },
    {
        name: 'githubProfile',
        message: 'If your engineer has a Github profile, please enter:',
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of your teams Intern',
    },
    {
        name: 'email',
        message: 'Please enter the email address of your intern',
    },
    {
        name: 'id',
        message: 'Enter the id of your intern',
    },
    {
        name: 'institution',
        message: 'Please enter the school/university of your intern',
    },
]

function runTest() {
    inquirer.prompt(promptQuestions).then(({name, id, email, officeNumber}) => {
        managerInsert.push(new Manager (name, id, email, officeNumber))
        advance();
    });
};

function advance() {
    inquirer.prompt(advanceSeries).then((userView)=> {
        if (userView.advanceSeries === 'Engineer') {
            engineerFunc();
        } else if (userView.advanceSeries === 'Intern') {
            internFunc();
        } else {
            writeToFile(managerInsert, engineerInsert, internInsert);
        }
    })
};

function engineerFunc() {
    inquirer.prompt(engineerQuestions).then(({name, id, email, githubProfile})=> {
        engineerInsert.push(new Engineer (name, id, email, githubProfile));
        advance()
    })
}

function internFunc() {
    inquirer.prompt(internQuestions).then(({name, id, email, institution})=> {
        internInsert.push(new Intern (name, id, email, institution));
        advance();
    })
}

runTest();