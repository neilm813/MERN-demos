const service = require('../services/destination.service');

/* 
Controller should ONLY be concerned with handling the req and res
NO OTHER LOGIC. Keep the controller 'skinny'. All other logic is
reusable since it will be separated into other functions.

Separation of concerns.
*/

module.exports = {
  // long-form - key: value format
  // shorthand: create(req, res) {}
  create: async function (req, res) {
    console.log('create method executed');

    try {
      const destination = await service.create(req.body);
      return res.json(destination);
    } catch (error) {
      return res.json(error);
    }
  },

  async getAll(req, res) {
    console.log('getAll method executed');
    try {
      const destinations = await service.getAll();
      return res.json(destinations);
    } catch (error) {
      return res.json(error);
    }
  },

  async getOne(req, res) {
    console.log('getOne method executed');

    try {
      const destination = await service.getOne(req.params._id);
      return res.json(destination);
    } catch (error) {
      return res.json(error);
    }
  },

  async delete(req, res) {
    console.log('delete method executed');

    try {
      const destination = await service.delete(req.params._id);
      return res.json(destination);
    } catch (error) {
      return res.json(error);
    }
  },

  async update(req, res) {
    console.log('update method executed', 'url params:', req.params);

    try {
      const destination = await service.update(req.params._id, req.body);
      return res.json(destination);
    } catch (error) {
      return res.json(error);
    }
  },

  // Without using findByIdAndUpdate you need to perform both operations
  async delete2(req, res) {
    try {
      const destination = await service.delete2(req._id);
      return res.json(destination);
    } catch (error) {
      return res.json(error);
    }
  },

  // TODO: Add many
  async createMany(req, res) {
    console.log('createMany method executed');
    try {
      return await service.createMany(req.body);
    } catch (error) {
      return res.json(error);
    }
  },
};
