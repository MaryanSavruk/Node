module.exports = {
    // eslint-disable-next-line no-useless-escape
    PASSWORD_REGEXP: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'),
    EMAIL_REGEXP: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    CURENT_YEAR: new Date().getFullYear()
};
