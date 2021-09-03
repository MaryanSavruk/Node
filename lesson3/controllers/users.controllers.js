const db = require('../db/users');

module.exports = {
    getSingllUser: (req, res) => {
        const { user_id } = req.params;
        const user = db[user_id];

        if (!user) {
            res.status(404).send('User not found');
            return;
        }
        res.json(user);
    },

    getAllUser: (req, res) => {
        res.json('Test get All users');
    },

    createUser: (req, res) => {
        res.json('Ok! Now you created singl user');
    }
};
