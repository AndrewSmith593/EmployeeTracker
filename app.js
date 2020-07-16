const inquirer = require("inquirer");
const department = require("models/department.js");


inquirer
.prompt([
    {
        type: "list",
        message: "Which would you like to view?",
        name: "showAllChoice",
        choices: ["All Departments", "All Employees", "All Roles"]
    }
])
.then(answers => {
    if(answers.showAllChoice === 'All Departments') {
        department.selectAll();
    } else if (answers.showAllChoice === 'All Employees') {
        employee.selectAll();
    } else {
        role.selectAll();
    }
    
})