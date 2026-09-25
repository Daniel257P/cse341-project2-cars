const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    //#swagger.tags=['Authentication']
  passport.authenticate('github')(req, res);
});

router.get('/logout', (req, res, next) => {
     //#swagger.tags=['Authentication']
  req.logout((err) => {          
    if (err) return next(err);
    req.session.destroy(() => res.redirect('/'));
  });
});

router.use('/manufacturers', require('./manufacturers'));
router.use('/cars', require('./cars'));





module.exports = router;
