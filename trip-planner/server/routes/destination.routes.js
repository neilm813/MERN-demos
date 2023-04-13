const {
  handleCreateDestination,
  handleGetAllDestinations,
  handleGetDestinationById,
  handleDeleteDestinationById,
  handleUpdateDestinationById,
} = require('../controllers/destination.controller');

module.exports = (app) => {
  app.post('/api/destinations', handleCreateDestination);
  app.get('/api/destinations', handleGetAllDestinations);
  app.get('/api/destinations/:id', handleGetDestinationById);
  app.delete('/api/destinations/:id', handleDeleteDestinationById);
  app.put('/api/destinations/:id', handleUpdateDestinationById);
};
