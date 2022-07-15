/* 
This is actually what creates and starts our server. It's the only file we run
from the terminal but it results in all other files being executed from here.
*/

// Import packages here from node_modules:
const express = require('express');

// Environment variables, these may change from dev to prod environments.
// Look up how to put these environment vars in dotenv package.
const port = 8000;
const db_name = 'travel-planner';

const connectToDbCallback = require('./config/mongoose.config');
connectToDbCallback(db_name);

const app = express();

// req.body will be undefined without this when receiving JSON.
app.use(express.json());

const destinationRouter = require('./routes/destination.routes');
app.use('/api/destinations', destinationRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});
