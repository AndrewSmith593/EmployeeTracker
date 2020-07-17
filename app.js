const inquirer = require("inquirer");
const department = require("./models/department.js");
const employee = require("./models/employee.js");
const role = require("./models/role.js");
// const { selectAll } = require("./orm.js");


inquirer
    .prompt([
        {
            type: "list",
            message: "Which would you like to view?",
            name: "view",
            choices: ["Departments", "Employees", "Roles"]
        }
    ])
    .then(async ({ view }) => {
        console.log(`${view} was the answer!`);
        switch (view) {
            case 'Departments':
                var displayData = await department.selectAll();
                console.table(displayData)
                break;
            case 'Employees':
                var displayData = await employee.selectAll();
                console.table(displayData)
                break;
            case 'Roles':
                var displayData = await role.selectAll();
                console.table(displayData)
                break;
            default:
                break;
        }

    })
    .catch(err => console.log(err))

