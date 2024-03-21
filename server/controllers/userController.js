// controllers/userController.js
import User from '../models/userModel.js';

const UserController = {
  createUser: async (req, res) => {
    try {
      const { phone_number, priority } = req.body;
      
      // Check if the user with the same phone number already exists
      const existingUser = await User.findOne({ phone_number });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this phone number already exists' });
      }

      // If user doesn't exist, create a new user
      const newUser = await User.create({ phone_number, priority });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export default UserController;
