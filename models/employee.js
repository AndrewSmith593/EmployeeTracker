
const orm = require("./../orm.js");


class Department {

    selectAll() {
        console.log(`department.selectAll was fired off!`)
        return orm.selectAll('departments')
    }

}



module.exports = new Department();