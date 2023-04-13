const { Destination } = require('../models/destination.model');

const handleCreateDestination = async (req, res) => {
  console.log('controller: handleCreateDestination req.body:', req.body);

  try {
    const destination = await Destination.create(req.body);
    return res.json(destination);
  } catch (error) {
    // 400 means Bad Request (requesters fault)
    // Sending an error status code will trigger the .catch on the client side.
    // .json(error) instead of below will result in an empty object when a non-extended error is caught
    // mongoose errors work b/c they extend and fix the issue.
    return res.status(400).json({ ...error, message: error.message });
  }
};

// .then .catch version
const handleCreateDestination2 = (req, res) => {
  console.log('controller: handleCreateDestination2 req.body:', req.body);

  Destination.create(req.body)
    .then((destination) => {
      return res.json(destination);
    })
    .catch((error) => {
      return res.status(400).json({ ...error, message: error.message });
    });
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

const handleDeleteDestinationById = async (req, res) => {
  console.log('controller: handleDeleteDestinationById', req.params);

  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    return res.json(destination);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleUpdateDestinationById = async (req, res) => {
  console.log('controller: handleUpdateDestinationById', req.params, req.body);

  try {
    const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, {
      // Re-run validations.
      runValidators: true,
      // Return the updated destination
      new: true,
    });

    return res.json(destination);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

module.exports = {
  // long-form syntax - keyName: value
  handleCreateDestination: handleCreateDestination,
  // shorthand can be used when the key name matches the var name that is used for the value
  handleGetAllDestinations,
  handleGetDestinationById,
  handleDeleteDestinationById,
  handleUpdateDestinationById,
};
