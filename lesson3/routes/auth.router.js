const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('Auth router works');
});

module.exports = router;
