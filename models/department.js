
const orm = require("../orm.js");


class Department {

    selectAll() {
        return orm.selectAll("departments")
    }
    
}



module.exports = new Department();