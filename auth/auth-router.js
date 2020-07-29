const router = require('express').Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require('passport')
const Profile = require('../users/profileModel')
const {isValid} = require('../users/validation')

// client ID  787519690058-qiea5frv3ehhppcj8ihhas8ovcl26que.apps.googleusercontent.com
// client secret  -vkNXrE3Mo0aIzqPLhkDUi56







router.post('/register', (req, res) => {
  const credentials = req.body;
    
  if (isValid(credentials)) {
      const rounds = process.env.BCRYPT_ROUNDS || 8;

      // hash the password
      const hash = bcryptjs.hashSync(credentials.password, rounds);

      credentials.password = hash;

      // save the user to the database
      Profile.add(credentials)
          .then(profile => {
              const token = makeJwt(profile);

              res.status(201).json({ data: profile, token });
          })
          .catch(error => {
              res.status(500).json({ message: error.message });
          });
  } else {
      res.status(400).json({
          message: "missing username, email and password",
      });
  }
});

router.post('/login', (req, res) => {
  const { username, email, password } = req.body;

  if (isValid(req.body)) {
      Profile.findBy({ email: email })
          .then(([profile]) => {
              console.log("profiles", profile);
              // compare the password the hash stored in the database
              if (Profile && bcryptjs.compareSync(password, profile.password)) {
                  const token = makeJwt(profile);

                  res.status(200).json({ message: "Welcome to our API", token });
              } else {
                  res.status(401).json({ message: "Invalid credentials" });
              }
          })
          .catch(error => {
              res.status(500).json({ message: error.message });
          });
  } else {
      res.status(400).json({
          message: "missing username and password",
      });
  }
});


function makeJwt(profile) {
  const payload = {
      subject: profile.id,
      username: profile.username,
      email: profile.email
  };

  const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

  const options = {
      expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options);
}
module.exports = router;
