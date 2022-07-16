/* 
This is actually what creates and starts our server. It's the only file we run
from the terminal but it results in all other files being executed from here.
*/

// Import packages here from node_modules:
const express = require('express');

/* 
Environment configurations that can change between environments (dev, prod)
are added to a .evn file which is ignored since it may change between
environments. Otherwise you have to manually edit configuration settings
in variables in the code rather than in configuration files.

SEE .env-notes.txt
*/
require('dotenv').config();

const connectToDbCallback = require('./config/mongoose.config');
connectToDbCallback(process.env.DB_NAME);

const app = express();

// req.body will be undefined without this when receiving JSON.
app.use(express.json());

const destinationRouter = require('./routes/destination.routes');
app.use('/api/destinations', destinationRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});
