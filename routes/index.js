const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res, next) => {
    //#swagger.ignore = true
  passport.authenticate('github')(req, res, next);
});

router.get('/logout', (req, res, next) => {
     //#swagger.ignore = true
  req.logout((err) => {          
    if (err) return next(err);
    req.session.destroy(() => res.redirect('/'));
  });
});

router.use('/manufacturers', require('./manufacturers'));
router.use('/cars', require('./cars'));





module.exports = router;
