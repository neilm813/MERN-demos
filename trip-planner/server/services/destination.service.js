const { Destination } = require('../models/destination.model');

const createDestination = async (data) => {
  console.log('service: createDestination');

  // Use the mongoose model to interact with the database.
  const destination = await Destination.create(data);
  return destination;
};

const getAllDestinations = async () => {
  const destinations = await Destination.find();
  return destinations;
};

const getDestinationById = async (id) => {
  const destination = await Destination.findById(id);
  return destination;
};

const deleteDestinationById = async (id) => {
  const destination = await Destination.findByIdAndDelete(id);
  return destination;
};

const updateDestinationById = async (id, data) => {
  const destination = await Destination.findByIdAndUpdate(id, data, {
    // Re-run validations.
    runValidators: true,
    // Return the updated destination.
    new: true,
  });

  return destination;
};

const deleteDestinationById2 = async (id) => {
  // findByIdAndDelete performs both tasks together for us, without it, it
  // would look like this.

  // Or reuse our findDestinationById function.
  const foundDestination = await Destination.findById(id);

  if (foundDestination === null) {
    return null;
  }

  const deletedDestination = await foundDestination.remove();
  return deletedDestination;
};

// Not needed on exam, used to load lot's of data so we can travel.
const createManyDestinations = async (documents) => {
  // Don't await inside a loop, it will delay iteration.
  const createPromises = documents.map((document) =>
    createDestination(document)
  );
  // The one resulting promise will be awaited by the caller of this function.
  return Promise.allSettled(createPromises);
};

// Export all the service functions in an object.
module.exports = {
  // long-form - key: value
  createDestination: createDestination,
  // Shorthand can be used when key name matches var name
  getAllDestinations,
  getDestinationById,
  deleteDestinationById,
  updateDestinationById,
  createManyDestinations,
};
