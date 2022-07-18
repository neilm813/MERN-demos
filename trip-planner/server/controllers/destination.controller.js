const Destination = require('../models/destination.model');

// You can do this many times to export many functions in an export object.
// module.exports.nameOfFunction = (req, res) => {}

// Or you can do it all in one export object.
module.exports = {
  // long-form - key: value format
  // shorthand: create(req, res) {}
  create: function (req, res) {
    console.log('create method executed');

    // Query the DB via our model.
    Destination.create(req.body)
      // then our DB gives us the found data
      .then((destination) => {
        // RESpond to the client with the newly created destination db data.
        return res.json(destination);
      })
      // or it gives us an error
      .catch((err) => {
        return res.status(400).json(err);
      });
  },

  getAll(req, res) {
    console.log('getAll method executed');

    // Pass in no query to .find all, .find can find many, so it ALWAYS
    // returns an array.
    Destination.find()
      .then((destinations) => {
        return res.json(destinations);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  },

  getOne(req, res) {
    console.log('getOne method executed');

    // Pass in no query to find all.
    Destination.findById(req.params._id)
      .then((destination) => {
        return res.json(destination);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  },

  delete(req, res) {
    console.log('delete method executed');

    // Pass in no query to find all.
    Destination.findByIdAndDelete(req.params._id)
      .then((destination) => {
        return res.json(destination);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  },

  update(req, res) {
    console.log('update method executed', 'url params:', req.params);

    Destination.findByIdAndUpdate(req.params._id, req.body, {
      runValidators: true, // Enforce model validations.
      new: true, // return the updated object rather than the old info.
    })
      .then((destination) => {
        return res.json(destination);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  },

  // Without using findByIdAndUpdate you need to perform both operations
  delete2(req, res) {
    Destination.findById(req.params._id)
      .then((destination) => {
        destination
          .remove()
          .then((removedDest) => {
            return res.json(removedDest);
          })
          // If something went wrong during .remove().
          .catch((err) => {
            return res.status(400).json(err);
          });
      })
      // If something went wrong, during findById
      .catch((err) => {
        return res.status(400).json(err);
      });
  },

  // Not needed for exam, just to add lot's of test data at once.
  createMany(req, res) {
    const createPromises = req.body.map((data) => Destination.create(data));

    Promise.allSettled(createPromises)
      .then((outcomes) => {
        return res.json(outcomes);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  },
};
