// require in the database
const connection = require("./connection.js");


// create class orm with constructor connection, then this.connection=connection
class ORM {
    constructor(connection){
        this.connection = connection;
    }
// to the class, add the functions that select specific departments, roles, employees, or tables of the groups, and also a function that will add new employees, depts, roles, 

    selectAll(table)  {
        console.log(`orm.selectAll was fired off!`)
        console.log(`here is the table: ${table}`)
        // set the queryString to select all from a table
        const queryString = 'SELECT * FROM ??';
        // return the selected table data
        return this.connection.query(queryString, [table])
    }

// also a function to return total salaries of departments
// starter code for the addition function:
// var sum = function(numOne, numTwo) {
//     return numOne + numTwo;
//   };

}

module.exports = new ORM(connection);

const test = new ORM(connection);
test.selectAll('departments')
    .then(results => console.log(results))

