const User = require("../models/userModel");
const Device = require("../models/deviceModel");

//----- Integrating accessToken on user db -----//
exports.buyProduct = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      accessToken: "03DE11F42DF93724B745A5F3F6DB001A",
    },
    { new: true }
  );

  // Update devices with userId which is an array i.e push
  const devices = await Device.update({
    $push: { userId: req.user._id },
  });
  console.log(devices);

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

// Get all devices.
exports.getAllDevices = async (req, res, next) => {
  const devices = await Device.find({ userId: req.user._id });

  // Hiding devices
  devices.forEach((el) => {
    el.userId = undefined;
  });

  res.status(200).json({
    status: "success",
    results: devices.length,
    data: {
      devices,
    },
  });
};
