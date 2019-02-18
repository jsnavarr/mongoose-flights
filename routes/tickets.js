var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

// router.delete('/flights/:id/tickets/:id', ticketsCtrl.delete);
// router.post('/flights/:id/tickets', ticketsCtrl.create);

router.delete('/tickets/:id', ticketsCtrl.delete);
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;