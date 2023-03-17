const express = require('express');

const {
  handleCreateDestination,
  handleGetAllDestinations,
  handleGetDestinationById,
  handleUpdateDestinationById,
  handleDeleteDestinationById,
  handleCreateManyDestinations,
} = require('../controllers/destination.controller');

const router = express.Router();

// In the server.js the prefix /destinations will be added to this url
// Notice handleCreateDestination is not called now, it's a callback, it will be called later, when the route is visited
router.post('/', handleCreateDestination);
router.get('/', handleGetAllDestinations);
router.get('/:id', handleGetDestinationById);
router.put('/:id', handleUpdateDestinationById);
router.delete('/:id', handleDeleteDestinationById);

// This route isn't needed on the exam:
router.post('/many', handleCreateDestination);

console.log('Destination routes created');
module.exports = {
  destinationRouter: router,
};
