const mongoose = require('mongoose');

// Export a function to be called from index.js
module.exports = (db_name) => {
  console.log(`Starting connection to ${db_name}.`);
  mongoose
    .connect(`mongodb://localhost/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Successfully connected to ${db_name}`);
    })
    .catch((err) =>
      console.log(`mongoose connection to ${db_name} failed:`, err)
    );
};
