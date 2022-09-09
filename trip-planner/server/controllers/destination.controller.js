const {
  createDestination,
  getAllDestinations,
  getDestinationById,
  deleteDestinationById,
  updateDestinationById,
  createManyDestinations,
} = require('../services/destination.service');

const handleCreateDestination = async (req, res) => {
  console.log('controller: handleCreateDestination req.body:', req.body);

  try {
    const destination = await createDestination(req.body);
    return res.json(destination);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetAllDestinations = async (req, res) => {
  try {
    const destinations = await getAllDestinations();
    return res.json(destinations);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetDestinationById = async (req, res) => {
  try {
    const destination = await getDestinationById(req.params.id);
    return res.json(destination);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleDeleteDestinationById = async (req, res) => {
  try {
    const destination = await deleteDestinationById(req.params.id);
    return res.json(destination);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleUpdateDestinationById = async (req, res) => {
  try {
    const destination = await updateDestinationById(req.params.id, req.body);
    return res.json(destination);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Not needed on exam, used to seed lot's of data into the DB so we can travel
const handleCreateManyDestinations = async (req, res) => {
  try {
    if (Array.isArray(req.body) === false) {
      throw new Error('The request body must be an array.');
    }

    const settledOutcomes = await createManyDestinations(req.body);
    return res.json(settledOutcomes);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Export an object of our controller methods so they can be added to routes.
module.exports = {
  // long-form - key: value
  handleCreateDestination: handleCreateDestination,
  // Shorthand can be used when key name matches var name.
  handleCreateManyDestinations,
  handleGetAllDestinations,
  handleGetDestinationById,
  handleDeleteDestinationById,
  handleUpdateDestinationById,
};
