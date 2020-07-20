
const orm = require("./../orm.js");


class Role {

    selectAll() {
        console.log(`role.selectAll was fired off!`)
        return orm.selectAll('roles')
    }

          // fires off and holds two parameters when cat.create is fired from catsController
  createRole(columns, values) {
    // returns the return value of orm.create with "cats", columns, and values as the params
    return orm.create('roles', columns, values)
  }
  update(objColVals, condition) {
    return orm.update('roles', objColVals, condition)
  }
  // TODO: create a remove method that references orm.delete
  remove(objColVals, value) {
    return orm.remove('roles', objColVals, value);
  }

}



module.exports = new Role();