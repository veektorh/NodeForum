

const models = require('../db/models');
const {create_user_schema} = require('../db/view_models/user');

const createUser = async (userObj) => {
     let res =  await models.Users.create(userObj);
     return res;
}

module.exports = {
    createUser
}