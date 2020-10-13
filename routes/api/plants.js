const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants');
const { route } = require('./users');


/*----Public Routes----*/
router.get('/', plantsCtrl.index);
router.get('/', plantsCtrl.show);
/*----Protected Routes----*/
router.use(require('../../config/auth'));
router.post('/', plantsCtrl.create);
router.delete('/:id', plantsCtrl.delete);
router.put('/:id', plantsCtrl.update);


/*---Helper Functions---*/
function chechAuth(rew, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;