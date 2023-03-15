// On the back-end we use require instead of import, import can only be used with additional configuration steps
// or if you use a tool to create the app that sets it up for you
const express = require('express');
const port = 8000;

const app = express();

// Without this req.body will be undefined when being sent JSON
app.use(express.json());

const fakeDb = {
  cities: [
    {
      id: 1,
      name: 'Aogashima',
      population: 170,
    },
    {
      id: 2,
      name: 'Longyearbyen',
      population: 2144,
    },
    {
      id: 3,
      name: 'Kennedy Meadows',
      population: 28,
    },
  ],
};

app.get('/', (req, res) => {
  return res.send('hello from express');
});

app.get('/api/cities', (req, res) => {
  return res.json(fakeDb.cities);
});

// The url is the same as getting all cities based on RESTful convention, but the api knows the difference
// because one is a GET and is a POST
app.post('/api/cities', (req, res) => {
  fakeDb.cities.push(req.body);
  console.log(fakeDb.cities);

  // Normally we would respond with newly created DB record b/c it would have a DB id added to it, but since we have DB
  // we'll just respond the same data we were given.
  return res.json(req.body);
});

// In this example we handle some errors and return http failure codes.
app.delete('/api/cities/:id', (req, res) => {
  console.log(req.params);

  const idToDelete = parseInt(req.params.id);

  if (isNaN(idToDelete)) {
    return res.status(400).json({ message: 'The id to delete must be a number.' });
  }

  const foundIndex = fakeDb.cities.findIndex((city) => city.id === idToDelete);
  const foundCity = fakeDb.cities[foundIndex];

  if (foundIndex === -1) {
    return res.status(400).json({ message: 'The requested record was not found.' });
  }

  fakeDb.cities.splice(foundIndex, 1);

  return res.json(foundCity);
});

app.put('/api/cities/:id', (req, res) => {
  console.log(req.params);

  const idToDelete = parseInt(req.params.id);

  if (isNaN(idToDelete)) {
    return res.status(400).json({ message: 'The id to delete must be a number.' });
  }

  const foundIndex = fakeDb.cities.findIndex((city) => city.id === idToDelete);
  const foundCity = fakeDb.cities[foundIndex];

  if (foundIndex === -1) {
    return res.status(400).json({ message: 'The requested record was not found.' });
  }

  fakeDb.cities[foundIndex] = {
    // Copy existing data
    ...foundCity,
    // Add in the provided keys. This will overwrite the existing data for keys that match
    ...req.body,
  };

  return res.json(fakeDb.cities[foundIndex]);
});

app.get('/api/cities/:id', (req, res) => {
  const foundCity = fakeDb.cities.find((city) => city.id == req.params.id);
  return res.json(foundCity === undefined ? null : foundCity);
});

app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));
