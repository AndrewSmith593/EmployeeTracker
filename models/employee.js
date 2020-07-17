
const orm = require("./../orm.js");


class Employee {

    selectAll() {
        console.log(`employee.selectAll was fired off!`)
        return orm.selectAll('employees')
    }

}



module.exports = new Employee();