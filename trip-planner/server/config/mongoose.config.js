const mongoose = require('mongoose');

// Export a function to be called from index.js
module.exports = (db_name) => {
  console.log(`Starting connection to ${db_name}.`);
  mongoose
    // ip address instead of localhost for windows issue
    // .connect(`mongodb://localhost/${db_name}`, {
    .connect(`mongodb://127.0.0.1:27017/${db_name}`, {
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

// This also works
// mongoose.connect(`mongodb://localhost/${db_name}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   /*
//     WINDOWS:
//     Below opt needed for MongoDB to work as a Windows service for me.
//     Alternatively, this terminal cmd can be used: mongod --ipv6
//     instead of a Windows service and the below opt.
//     */
//   family: 4,
// });
