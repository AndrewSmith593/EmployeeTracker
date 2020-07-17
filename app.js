const inquirer = require("inquirer");
const department = require("./models/department.js");
const employee = require("./models/employee.js");
const role = require("./models/role.js");
// const { selectAll } = require("./orm.js");

inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "actionChoice",
            choices: ["View", "Add", "Delete"]
        }
    ])
    .then(async ({actionChoice}) => {
        console.log(`${actionChoice} was the answer!`);
        switch (actionChoice) {
            case 'View':
                console.log("user chose to view some data...");
                view();
                break;
            case 'Add':
                console.log("user chose to add some data...");
                add();
                break;
            case 'Delete':
                console.log("user chose to remove some data...");
                remove();
                break;
            default:
                break;
        }

    })
    .catch(err => console.log(err));


const view = () => {

inquirer
    .prompt([
        {
            type: "list",
            message: "Which would you like to view?",
            name: "viewChoice",
            choices: ["Departments", "Employees", "Roles"]
        }
    ])
    .then(async ({ viewChoice }) => {
        console.log(`${viewChoice} was the answer!`);
        switch (viewChoice) {
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
};


const add = () => {

    inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to add?",
            name: "tableToAddTo",
            choices: ["Department", "Employee", "Role"]
        }
    ])
    .then(async ({ tableToAddTo }) => {

        console.log(`We're gonna add something to the table: ${tableToAddTo}!`);

        switch (tableToAddTo) {
            case 'Department':
                console.log("user chose to add a new Department...");
                createDepartment();
                break;
            case 'Employee':
                console.log("user chose to add a new Employee...");
                createEmployee();
                break;
            case 'Role':
                console.log("user chose to add a new Role...");
                createRole();
                break;
            default:
                break;
        }

    })
    .catch(err => console.log(err))
}



// const createDepartment = () => {

//     inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "What is the name of the new department?",
//             name: "dept_name",
//         }
//     ])
//     .then(async ({ answers }) => {

//         console.log(`Let's make a department!`);

//         switch (answers) {
//             case 'Departments':
//                 console.log(`user added a department called: ${answers.dept_name}`);
//                 var displayData = await department.create('dept_name', answers.name)
//                 break;
//             case 'Employees':
//                 console.log("user chose to add some data to Employees table...");
//                 createEmployee();
//                 break;
//             case 'Roles':
//                 console.log("user chose to add some data to Roles table...");
//                 createRole();
//                 break;
//             default:
//                 break;
//         }

//     })
//     .catch(err => console.log(err))
// }



    // inquirer
    // .prompt([
    //     {
    //         type: "list",
    //         message: "Which would you like to view?",
    //         name: "view",
    //         choices: ["Departments", "Employees", "Roles"]
    //     }
    // ])
    // var displayData = await department.create('dept_name', answers.name)





    // .then(async ({ tableToAddTo }) => {
    //     console.log(`We're gonna add something to the table: ${tableToAddTo}!`);
    //     switch (tableToAddTo) {
    //         case 'Departments':
    //             var displayData = await department.create('dept_name', tableToAddTo.name)
    //             console.table(displayData)
    //             break;
    //         case 'Employees':
    //             var displayData = await employee.create(['first_name', 'last_name', 'role_id', 'manager_id'], [tableToAddTo.])
    //             console.table(displayData)
    //             break;
    //         case 'Roles':
    //             var displayData = await role.create();
    //             console.table(displayData)
    //             break;
    //         default:
    //             break;
    //     }

    // })
    // .catch(err => console.log(err))