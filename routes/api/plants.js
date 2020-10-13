const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants');


/*----Public Routes----*/
router.get('/', plantsCtrl.index)

/*----Protected Routes----*/
router.use(require('../../config/auth'));
router.post('/', plantsCtrl.create);

/*---Helper Functions---*/
function chechAuth(rew, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;