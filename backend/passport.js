const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID ="224962938987-77a8f4v825rlvusupjri565nta8bvh4g.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "5c1f7fb60559e5a247d1";
GITHUB_CLIENT_SECRET = "05b439b9b0e75e2e92f690a872ea9a0753f8f434";

FACEBOOK_APP_ID = "576432007437573";
FACEBOOK_APP_SECRET = "583f234f1dbc03b5fa816c7f15d7d6f0";

passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );
  
  passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  