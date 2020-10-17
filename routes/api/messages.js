const express = require('express');
const router = express.Router();
const messagesCtrl = require('../../controllers/api/messages');

/*---Public Routes---*/

/*---Protected Routes---*/
router.use(require('../../config/auth'));
router.get('/', messagesCtrl.index);
router.get('/', messagesCtrl.show);
router.post('/', messagesCtrl.create);
router.delete('/:id', messagesCtrl.delete);
/*---Helper Functions---*/
function chechAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;