const express = require('express');
const app = express();
const router = express.Router();
const authController = require('./controllers/authController');
const mongoose = require('mongoose');
const User = require('./models/User');
app.use(express.json());
mongoose.connect('mongodb://localhost/godsowncountrydb');
router.post('/auth/register', authController.register);
router.post('/api/auth/login', authController.login);
app.use('/api', router);
app.get('/', (req, res) => res.send('Welcome to GodsOwnCountry Backend!'));
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});