const mongoose = require("mongoose")

const Case = require("../models/Case");

module.exports = {
  async index(req, res) {
    const { page } = req.query;
    
    const cases = await Case.paginate({}, { page, limit: 10 });

    return res.json(cases);
  },

  async create(req, res) {
    const {
      name,
      age,
      phone,
      latitude,
      longitude,
      address,
      symptoms,
      status 
    } = req.body;

    const newCase = await Case.create({
      name,
      age,
      phone,
      address,
      latitude,
      longitude,
      symptoms,
      status
    });

    return res.json(newCase);
  },

  async setStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    const updatedCase = await Case.findByIdAndUpdate(id, { "status": status });

    if(!updatedCase) {
      return res.json({ error: 'case not found' })
    }

    return res.json(updatedCase);
  },

  async findByStatus(req, res) {
    const { status } = req.query;

    const cases = await Case.find({ "status": status });

    return res.json(cases);
  }
};
