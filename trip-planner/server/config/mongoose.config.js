const mongoose = require('mongoose');
// These env variables are retrieved from the .env file (which is git ignored).
const dbName = process.env.MONGODB_NAME;
const username = process.env.MONGODB_USERNAME;
const pw = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://${username}:${pw}@explore.kl2kalm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected to:', dbName))
  .catch((err) => console.log('Database connection error:', err));
