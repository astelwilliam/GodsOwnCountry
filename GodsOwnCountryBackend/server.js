// app.listen():
// app.get('/', (req, res) => res.send('Welcome to GodsOwnCountry Backend!'));
// const express = require('express');
// const app = express();
// const port = 3000;

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
// app.get('/', (req, res) => res.send('Welcome to GodsOwnCountry Backend!'));

const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/godsowncountrydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('Server started on port ' + port);
});

app.get('/', (req, res) => res.send('Welcome to GodsOwnCountry Backend!'));
app.use(express.json()); // body-parser alternative

// Registration Route
app.post('/register', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save((err) => {
    if (err) {
      res.send({ message: 'Error registering user' });
    } else {
      res.send({ message: 'User registered successfully' });
    }
  });
});

// Login Route
app.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err || !user) {
      res.send({ message: 'Invalid email/password' });
    } else if (user.password !== req.body.password) {
      res.send({ message: 'Invalid email/password' });
    } else {
      res.send({ message: 'User logged in successfully' });
    }
  });
});