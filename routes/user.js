

const user_manager = require('../managers/user');
const express = require('express');
const router = express.Router();
const {create_user_schema} = require('../db/view_models/user')

router.post('/', async (req, res, next) => {
    let { body } = req;
    await create_user_schema.validateAsync(body)
    let result = await user_manager.createUser(body);
    res.json(result)
})

module.exports = router;
