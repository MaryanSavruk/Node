const router = require('express').Router();

const { userController } = require('../controllers');
const { isUserPresent, checkUniqueEmail } = require('../middlewares/user.middleware');

router.post('/', checkUniqueEmail, userController.createUser);
router.get('/', userController.getAllUser);
router.get('/:user_id', isUserPresent, userController.getSingllUser);
router.delete('/:user_id', isUserPresent, userController.deleteUser);

module.exports = router;
