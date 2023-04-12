// import express from 'express';
const express = require('express');
const port = 8000;

const app = express();

// req.body is UNDEFINED without this!
app.use(express.json());

const fakeDb = {
  destinations: [
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
  return res.send('Hello from express');
});

app.get('/api/destinations', (req, res) => {
  return res.json(fakeDb.destinations);
});

app.post('/api/destinations', (req, res) => {
  console.log(req.body);

  fakeDb.destinations.push(req.body);

  // Normally we would return the newly created DB record since it contains extra data like the db id.
  return res.json(req.body);
});

app.delete('/api/destinations/:id', (req, res) => {
  console.log(req.params);

  // url params are all strings! But our id's in the fakeDb are numbers.
  const idToDelete = parseInt(req.params.id);

  if (isNaN(idToDelete)) {
    return res.status(400).json({ message: 'The id to delete must be a number.' });
  }

  const foundIndex = fakeDb.destinations.findIndex((destination) => destination.id === idToDelete);
  const foundDestination = fakeDb.destinations[foundIndex];

  if (foundIndex === -1) {
    return res.status(400).json({ message: 'The requested record was not found.' });
  }

  fakeDb.destinations.splice(foundIndex, 1);

  return res.json(foundDestination);
});

app.put('/api/destinations/:id', (req, res) => {
  console.log(req.params);

  // url params are all strings! But our id's in the fakeDb are numbers.
  const idToDelete = parseInt(req.params.id);

  if (isNaN(idToDelete)) {
    return res.status(400).json({ message: 'The id to delete must be a number.' });
  }

  const foundIndex = fakeDb.destinations.findIndex((destination) => destination.id === idToDelete);
  const foundDestination = fakeDb.destinations[foundIndex];

  if (foundIndex === -1) {
    return res.status(400).json({ message: 'The requested record was not found.' });
  }

  fakeDb.destinations[foundIndex] = {
    // Copy existing data so all the existing data doesn't need to be provided on each update
    ...foundDestination,
    // Add in the updated keys. This will overwrite the existing data for any matching keys.
    ...req.body,
  };

  return res.json(fakeDb.destinations[foundIndex]);
});

app.get('/api/destinations/:id', (req, res) => {
  const foundDestination = fakeDb.destinations.find((destination) => destination.id == req.params.id);
  return res.json(foundDestination === undefined ? null : foundDestination);
});

app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));
