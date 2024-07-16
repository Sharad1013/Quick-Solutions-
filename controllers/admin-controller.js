const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// get All users Logic
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

// Delete User from (frontend + Backend) using admin
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

// User Update Logic
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body; // this line will pass all the data of the user who is getting updated through the admin update page to the backend. (Basically this is the data which we have to replace or update with the old data.)

    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updatedUserData }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// get Update User page with data using admin ( Single User Logic )
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// get All Contacts Logic
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// Delete The Contact
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
};
