const destinationController = require('../controllers/destination.controller');

// Bonus: look up express Router to export for routing.

/* 
LEADING SLASH REQUIRED

Export a function to be called in index.js
*/
module.exports = (app) => {
  app.post('/api/destinations', destinationController.create);
  app.post('/api/destinations/:_id', destinationController.getOne);
  app.put('/api/destinations/:_id', destinationController.update);
  app.delete('/api/destinations/:_id', destinationController.getOne);
};
