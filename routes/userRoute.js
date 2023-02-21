const { Router } = require('express');
const {
  signupLogic,
  loginLogic,
  logoutLogic,
  deleteLogic,
} = require('../controllers/userController');

const router = Router();

// SIGN UP ROUTE
router.post('/signup', signupLogic);
router.post('/login', loginLogic);
router.get('/logout', logoutLogic);
router.delete('/:id', deleteLogic)

module.exports = { userRoute: router };
