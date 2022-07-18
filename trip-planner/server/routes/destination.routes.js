const destinationController = require('../controllers/destination.controller');

// Bonus: look up express Router to export for routing.

/* 
LEADING SLASH REQUIRED

Export a function to be called in index.js
*/
module.exports = (app) => {
  console.log('Added routes.');
  app.post('/api/destinations', destinationController.create);
  app.post('/api/destinations/many', destinationController.createMany);
  app.get('/api/destinations', destinationController.getAll);
  app.get('/api/destinations/:_id', destinationController.getOne);
  app.put('/api/destinations/:_id', destinationController.update);
  app.delete('/api/destinations/:_id', destinationController.delete);
};
