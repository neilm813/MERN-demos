// THIS IS OUR SERVER! It sets things up so our server can listen for requests.

/* 
Without additional tools / configurations, we cannot use the import keyword
because it has not been fully standardized yet, so we need to use the
built in require function to import.

require('name-of-package-or-folder1/folder2/fileName.js')
*/

const express = require('express');
const port = 8000;

// Create a new instance for our server app.
const app = express();

// req.body WILL BE UNDEFINED if you don't add this.
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ hello: 'world' });
});

app.get('/api/cities', (req, res) => {
  // We have no DB so pretend this came from a DB.
  const cities = [
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
  ];

  return res.json(cities);
});

app.get('/api/cities/:id', (req, res) => {
  return res.json({
    id: req.params.id,
    status: 'success',
  });
});

app.post('/api/cities', (req, res) => {
  return res.json({
    status: 'success',
    data: req.body,
  });
});

app.delete('/api/cities/:id', (req, res) => {
  console.log(req.params);

  return res.json({
    status: 'success',
    msg: `Deleted city id: ${req.params.id}`,
  });
});

// put is for updating
app.put('/api/cities/:id', (req, res) => {
  console.log(req.params);

  return res.json({
    status: 'success',
    msg: `Updated city id: ${req.params.id}`,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});
