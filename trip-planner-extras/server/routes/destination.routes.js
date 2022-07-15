const destinationController = require('../controllers/destination.controller');

const express = require('express');
const router = express.Router();
/* 
LEADING SLASH REQUIRED
*/
console.log('Added routes.');
router.post('/', destinationController.create);
router.post('/many', destinationController.createMany);
router.get('/', destinationController.getAll);
router.get('/:_id', destinationController.getOne);
router.put('/:_id', destinationController.update);
router.delete('/:_id', destinationController.delete);

module.exports = router;
