const Destination = require("../models/destination.model");

// Export an object that is full of methods.
module.exports = {
  // long-form - key: value format
  create: function (req, res) {
    console.log("create method executed");

    Destination.create(req.body)
      .then((destination) => {
        // newly created DB model instance
        res.json(destination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // Shorthand key value pair, key name will be the name of the function and value will be the function.
  getAll(req, res) {
    console.log("getAll method executed");

    Destination.find()
      .then((destinations) => {
        res.json(destinations);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params", req.params);

    Destination.findById(req.params.id)
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params", req.params);

    Destination.findByIdAndDelete(req.params.id)
      .then((destination) => {
        res.json(destination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    Destination.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true, // return the newly updated model
    })
      .then((updatedDestination) => {
        res.json(updatedDestination);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // You don't need to know this.
  createMany(req, res) {
    const promises = req.body.map((dest) => {
      return Destination.create(dest);
    });

    Promise.allSettled(promises).then((results) => {
      res.json(results);
    });
  },
};
