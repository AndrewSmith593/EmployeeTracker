
const orm = require("./../orm.js");


class Department {

    selectAll() {
        console.log(`department.selectAll was fired off!`)
        return orm.selectAll('departments')
    }

      // fires off and holds two parameters when cat.create is fired from catsController
  createDepartment(columns, deptName) {
    // returns the return value of orm.create with "cats", columns, and values as the params
    return orm.create('departments', columns, deptName)
  }
  update(objColVals, condition) {
    return orm.update('departments', objColVals, condition)
  }
  // TODO: create a remove method that references orm.delete
  remove(objColVals, value) {
    return orm.remove('departments', objColVals, value);
  }

}



module.exports = new Department();