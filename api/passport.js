const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const passportJWT = require("passport-jwt");

const JWTStrategy = passportJWT.Strategy;

const CONFIG = require("config");
const request = require("request");

const { User } = require("./models/user.model");

// For initial log in
passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    (username, password, done) => {
      User.findOne({ username: username })
        .then(user => {
          if (user) {
            if (user.password === password) {
              return done(null, user);
            }
          } else {
            newUser = new User({
              personId: 101,
              username: username,
              password: password
            });
            return done(null, newUser);
          }
        })
        .catch(err => {
          res.status(500).send({ error: "error occured" });
        });

      /* const credentials = {
        encoded: true,
        username,
        password,
        loginType: "active directory"
      };*/

      /*
      const newsFlexOptions = {
        method: 'POST',
        url: CONFIG.get('api.url') + CONFIG.get('api.loginExt'),
        json: credentials,
        timeout: 3 * 1000,
      };
      request(newsFlexOptions, (err, response, body) => {
        console.log(body);
        if (err) {
          console.log(`Error: ${err}`);
        }
        if (response.statusCode !== 200) {
          console.log('Auth: failed due to API error', response.statusCode);
          return done(null, false, body.errorMessage);
        }
        if (body && body.items && body.items.length > 0) {
          console.log('Success');
          const user = body.items[0];

          return done(null, user);
        }

        // this shouldn't happen.
        console.log('Auth: Failed. Login was 200 but no user was in resp body');
        return done(null, false, 'Please try again');
        
      });
      */
    }
  )
);

const cookieExtractor = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.jwt;
  }
  return token;
};
// To authenticate requests
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: CONFIG.get("jwt.secret")
    },
    (jwtPayload, done) => done(null, jwtPayload)
  )
);
