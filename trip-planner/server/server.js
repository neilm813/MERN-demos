// Load .env vars
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Access .env vars
const port = process.env.API_PORT;

// Requiring / importing runs the file!
// This file doesn't need to export anything though, so we don't need a var.
require('./config/mongoose.config');

const app = express();

// Avoid CORS error since our front-end is running on a different port, so our requests are 'cross origin' 3000 -> 8000
app.use(cors());
// req.body will be undefined without this!
app.use(express.json());

const addDestinationRoutes = require('./routes/destination.routes');

addDestinationRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));
