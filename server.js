const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require('dotenv').config();
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get('/', (req, res) => {
  //#swagger.ignore = true
  res.send(
    req.session.user ? `Logged in as ${req.session.user.displayName || req.session.user.username}` : 'Logged out'
  );
});

app.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/api-docs', session: false }),
  (req, res) => {
    //#swagger.ignore = true
    req.session.user = req.user;
    res.redirect('/');
  }
);

app.use('/', require('./routes'));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An unexpected error occurred.', error: err.message });
});

const port = process.env.PORT || 3000;

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node is running on port ${port}`);
    });
  }
});
