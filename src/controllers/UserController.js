const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findById(id);

    return res.json(user.name);
  },

  async create(req, res) {
    const {
      name,
      email,
      password,
    } = req.body;

    const newUser = await User.create({
      name,
      email,
      password,
    });

    return res.json(newUser);
  }
}