const router = require('express').Router();

router.use('/manufacturers', require('./manufacturers'));
router.use('/cars', require('./cars'));

module.exports = router;
