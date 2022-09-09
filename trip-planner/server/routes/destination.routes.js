const express = require('express');

const {
  handleCreateDestination,
  handleCreateManyDestinations,
  handleGetAllDestinations,
  handleGetDestinationById,
  handleDeleteDestinationById,
  handleUpdateDestinationById,
} = require('../controllers/destination.controller');

const router = express.Router();

/* 
/api/destinations will be prepended to all these routes in server.js!
*/

// Notice, handleCreateDestination is not called now, it's called back later
// when the route is visited.
router.post('/', handleCreateDestination);
router.post('/many', handleCreateManyDestinations);

// data at the :id spot in url is accessed with req.params.id.
// route params can be named anything and the name will be added to req.params.
router.get('/:id', handleGetDestinationById);
router.get('/', handleGetAllDestinations);
router.delete('/:id', handleDeleteDestinationById);
router.put('/:id', handleUpdateDestinationById);

module.exports = { destinationRouter: router };
