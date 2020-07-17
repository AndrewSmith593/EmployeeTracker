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
        // set the queryString to select all from a table
        const queryString = 'SELECT * FROM ??';
        // return the selected table data
        return this.connection.query(queryString, table)
    }

    // fired off when orm.create is fired off from cat.js. parameters already filled in from cats.js
  create(table, columns, values) {
    console.log(`orm.create was fired off!`)
    // var for the querystring... insert sql command to table param, 
    const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`;

    console.log(queryString);

    return this.connection.query(queryString, [table, ...values])
  }

  update(table, objColVals, id) {
    console.log(`orm.update was fired off!`)
    var queryString = `UPDATE ?? SET ? WHERE ?`;

    console.log(queryString);

    return this.connection.query(queryString, [table, objColVals, id])
  }

  // TODO: Create method that will allow us to remove a row from the table
  remove(table, objColVals, value) {
    console.log(`orm.remove was fired off!`)
    var queryString = `DELETE FROM ?? WHERE ?? = ?`;

    console.log(queryString);

    return this.connection.query(queryString, [table, objColVals, value])
  }

// also a function to return total salaries of departments
// starter code for the addition function:
// var sum = function(numOne, numTwo) {
//     return numOne + numTwo;
//   };

}

module.exports = new ORM(connection);

// const test = new ORM(connection);
// test.selectAll('departments')
//     .then(results => console.table(results))

