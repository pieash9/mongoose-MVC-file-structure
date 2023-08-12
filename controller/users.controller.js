const User = require("../models/user.model");

//  get all users
const getAllUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// create user
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      age: req.body.age,
    });

    const result = await newUser.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// update user
const updateUser = async (req, res) => {
  const id = req.params.id;
  const result = await User.findOneAndUpdate({ _id: id }, { ...req.body });
  res.status(200).send(result);
};
// delete user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const result = await User.deleteOne({ _id: id });
  res.status(200).send(result);
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
