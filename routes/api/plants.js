const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plant');

/*----Routes----*/


/*----Protected Routes----*/
router.use(require('../../config/auth'));


/*---Helper Functions---*/
function chechAuth(rew, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}