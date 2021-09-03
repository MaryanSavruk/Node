const router = require('express').Router();

const { userController } = require('../controllers/users.controllers');

router.post('/', userController.createUser);

router.get('/', userController.getAllUser);
router.get('/user_id', userController.getSingllUser);
// router.put('/user_id', (req, res) => {});
router.delete('/user_id', userController.deleteUser);

module.exports = router;
