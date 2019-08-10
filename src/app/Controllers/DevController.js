const axios = require('axios');
const Dev = require('../Models/Dev');

module.exports = {
  async store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.status(400).json({ user: `${username}:alredy exists` });
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  }
};

//metodos controllers não podem ter mais de 5 metodos

//caso aconteça cria se um  novo controller
