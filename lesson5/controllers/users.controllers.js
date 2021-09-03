const User = require('../dataBase/User');
const passwordService = require('../service/password.service');
// const ErrorHandler = require('../errors/ErrorHandler');

module.exports = {
    getSingllUser: (req, res, next) => {
        try {
            res.json(req.user);
            // const { user, testParam } = req;

            // const { user_id } = req.params;
            // const user = db[user_id];

            // if (!user) {
            //     throw new ErrorHandler(418, 'user not found');
            // }
        } catch (e) {
            next(e);
        }
    },

    getAllUser: (req, res) => {
        res.json('Test get All users');
    },

    createUser: async (req, res, next) => {
        try {
            const { password } = req.body;

            const hashedPassword = await passwordService.hash(password);

            const createdUser = await User.create({ ...req.body, password: hashedPassword });

            res.json(createdUser);

            // const createdUser = await User.create(req.body);  ---- before hashPassword
            // res.json(createdUser);                            ---- before hashPassword
        } catch (e) {
            next(e);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            await User.deleteOne({ _id: user_id });
            res.status(204).json(`User with id ${user_id} is deleted`);
        } catch (e) {
            next(e);
        }
    }
};
