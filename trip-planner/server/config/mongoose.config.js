// Import installed package from node_modules.
const mongoose = require('mongoose');

// Normally the db name or connection string would go in a .env or config file
// that's git ignored so the prod app can choose a different name if needed.
const dbName = 'trip-planner';

mongoose
  .connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    // These may not be needed in newest version?
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Successfully connected to ${dbName}`);
  })
  .catch((error) =>
    console.log(`mongoose connection to ${dbName} failed:`, error)
  );