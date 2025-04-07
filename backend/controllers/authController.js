const User = require('../models/User');
exports.register = async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    try {
        await newUser.save();
        res.send({ message: 'User registered successfully' });
      } catch (err) {
        res.send({ message: 'Error registering user' });
      }
    };
  exports.login = async (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err || !user) {
        res.send({ message: 'Invalid email/password' });
      } else if (user.password !== req.body.password) {
        res.send({ message: 'Invalid email/password' });
      } else {
        res.send({ message: 'User logged in successfully' });
      }
    });
  };