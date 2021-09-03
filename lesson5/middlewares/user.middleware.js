const User = require('../dataBase/User');
const ErrorHandler = require('../errors/ErrorHandler');
const userValidator = require('../validators/user.validator');

module.exports = {
    isUserPresent: async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const user = await User.findById(user_id);
            //          use select for add or hide some field like email, password...
            // const user = await User.findById(user_id).select('_id email');
            // const user = await User.findById(user_id).select('-email -role');
            // const user = await User.findById(user_id).select('+password');

            if (!user) {
                throw new ErrorHandler(418, 'User not found yet');
            }
            // console.log('=================================');
            // console.log(req);
            // console.log('=================================');
            req.user = user;
            req.testParam = 'Hello chat';
            next();
        } catch (e) {
            next(e);
        }
    },
    checkUniqueEmail: async (req, res, next) => {
        try {
            const { email } = req.body;
            const userByEmail = await User.findOne({ email });
            if (userByEmail) {
                throw new ErrorHandler(409, `Email ${email} is already exist`);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    validateUserBody: (req, res, next) => {
        try {
            const { error, value } = userValidator.createUserValidator.validate(req.body);
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++');
            console.log(value);
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++');

            if (error) {
                // https://youtu.be/NO8rRUk_G_I?t=2197
                throw new ErrorHandler(404, error.details[0].message);
            }
            next();
        } catch (e) {
            next(e);
        }
    }

};
