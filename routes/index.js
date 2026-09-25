const router = require('express').Router();
const passport = require('passport');

router.get('/login', passport.authenticate('github'));

router.get('/logout', (req, res, next) => {
  req.logout((err) => {          
    if (err) return next(err);
    req.session.destroy(() => res.redirect('/'));
  });
});

router.use('/manufacturers', require('./manufacturers'));
router.use('/cars', require('./cars'));





module.exports = router;
