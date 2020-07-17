
const orm = require("./../orm.js");


class Role {

    selectAll() {
        console.log(`role.selectAll was fired off!`)
        return orm.selectAll('roles')
    }

}



module.exports = new Role();