const express = require("express");
const cors = require("cors");

// Environment vars
const port = 5000;
const db_name = "travel-planner";

require("./config/mongoose.config")(db_name);

// app is a function but it also has key value pairs on it like an object.
const app = express();

// req.body undefined without this!
app.use(express.json());
require("./routes/destination.routes")(app);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
