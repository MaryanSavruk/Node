const bcrypt = require('bcrypt');

const { ErrorHandler } = require('../errors/ErrorHandler');

// https://youtu.be/NO8rRUk_G_I?t=3611
module.exports = {
    hash: (password) => bcrypt.hash(password, 10),
    compare: async (hash, password) => {
        const isPasswordMatched = await bcrypt.compare(password, hash);

        if (!isPasswordMatched) {
            throw new ErrorHandler(400, 'Email or password is wrong');
        }
    }

    // hash: (password) => bcrypt.hash(password, 10),
    // compare: async (hash, password) => {
    //     const isPasswordMatched = await bcrypt.compare(password, hash);
    //
    //     if (!isPasswordMatched) {
    //         throw new ErrorHandler(400, 'Email or password is wrong');
    //     }
    // }
};
