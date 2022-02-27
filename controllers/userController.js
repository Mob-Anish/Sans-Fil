const User = require("../models/userModel");

//------------ Route Handlers for Users ---------------//
exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
};

//------ Delete user -------//
exports.deleteUser = async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.param.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
};

//----- Integrating accessToken on user db -----//
exports.buyProduct = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      accessToken: "03DE11F42DF93724B745A5F3F6DB001A",
    },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};
