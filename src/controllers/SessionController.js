const User = require("../models/User");

module.exports = {
  async create(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password });

    if(!user) {
      return res.status(400).json({ message: 'E-mail ou senha inválidos' });
    }

    return res.json(user._id);
  }
}