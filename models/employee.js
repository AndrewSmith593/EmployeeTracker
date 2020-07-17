
const orm = require("./../orm.js");


class Employee {

    selectAll() {
        console.log(`employee.selectAll was fired off!`)
        return orm.selectAll('employees')
    }

          // fires off and holds two parameters when cat.create is fired from catsController
  create(columns, values) {
    // returns the return value of orm.create with "cats", columns, and values as the params
    return orm.create('employees', columns, values)
  }
  update(objColVals, condition) {
    return orm.update('employees', objColVals, condition)
  }
  // TODO: create a remove method that references orm.delete
  remove(objColVals, value) {
    return orm.remove('employees', objColVals, value);
  }

}



module.exports = new Employee();