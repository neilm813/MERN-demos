const { Destination } = require('../models/destination.model');

const handleCreateDestination = async (req, res) => {
  console.log('controller: handleCreateDestination', req.body);

  try {
    // Destination.create will take the data and translate it into the appropriate DB query language for us.
    const destination = await Destination.create(req.body);

    return res.json(destination);
  } catch (error) {
    // Using a .status http failure code means the .catch on the front end will be triggered
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleGetAllDestinations = async (req, res) => {
  console.log('controller: handleGetAllDestinations');

  try {
    const destinations = await Destination.find();
    return res.json(destinations);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleGetDestinationById = async (req, res) => {
  console.log('controller: handleGetDestinationById', req.params);

  try {
    const destination = await Destination.findById(req.params.id);
    return res.json(destination);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleUpdateDestinationById = async (req, res) => {
  console.log('controller: handleUpdateDestinationById', req.params, req.body);

  try {
    const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, {
      // Re-run validations
      runValidators: true,
      // Return the updated destination
      new: true,
    });
    return res.json(destination);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleDeleteDestinationById = async (req, res) => {
  console.log('controller: handleDeleteDestinationById', req.params);

  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    return res.json(destination);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

// Not needed on exam, used to seed lot's of data into the DB so we can travel
const handleCreateManyDestinations = async (req, res) => {
  try {
    if (Array.isArray(req.body) === false) {
      throw new Error('The request body must be an array.');
    }

    const createPromises = req.body.map((data) => Destination.create(data));
    const settledOutcomes = await Promise.allSettled(createPromises);
    return res.json(settledOutcomes);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

console.log('Destination controller created');
module.exports = {
  // long-form - key: value
  handleCreateDestination: handleCreateDestination,
  // shorthand when the key name matches the value name:
  handleGetAllDestinations,
  handleGetDestinationById,
  handleUpdateDestinationById,
  handleDeleteDestinationById,
  handleCreateManyDestinations,
};
