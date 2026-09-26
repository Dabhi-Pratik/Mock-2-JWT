import HttpError from "../middleware/HttpError.js";
import User from "../model/userModel.js";

const add = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const newUser = {
      name,
      email,
      password,
    };

    const user = new User(newUser);

    await user.save();

    res.status(201).json({ message: "User Added Successfully!", user });
  } catch (error) {
    next(new HttpError(error.message));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findByCredentials(email, password);

    if (!user) {
      next(new HttpError("Unable to login"));
    }

    res
      .status(200)
      .json({ success: true, message: "Login successfully", user });
  } catch (error) {
    next(new HttpError(error.message));
  }
};



export default { add, login };
