const express = require('express');

const destinationController = require('../controllers/destination.controller');

const router = express.Router();
/* 
LEADING SLASH REQUIRED
*/
console.log('Added routes.');
router.post('/many', destinationController.createMany);
router.post('/', destinationController.create);
router.get('/', destinationController.getAll);
router.get('/:_id', destinationController.getOne);
router.put('/:_id', destinationController.update);
router.delete('/:_id', destinationController.delete);

module.exports = router;
