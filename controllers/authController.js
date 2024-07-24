const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    User.findOne({ where: { username } }).then(user => {
        if (user) {
            return res.status(400).json({ error: 'Username already exists' });
        }
        }
    );
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, role });
    res.status(201).json({ data: user });
  } catch (error) {
    console.log("ERROR : ", error)
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, config.secret, { expiresIn: '1h' });
    res.json({ data: user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
