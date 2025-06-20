const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = new User({ name, email, password, role });
  await user.save();
  const token = generateToken(user);
  res.status(201).json({ user: { id: user._id, name: user.name, role: user.role }, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken(user);
  res.json({ user: { id: user._id, name: user.name, role: user.role }, token });
};
