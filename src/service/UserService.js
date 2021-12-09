import BackendService from "./BackendService";

// get all users
const getUser = async () => {
  return BackendService.get("user/");
};

// create a new user
const createUser = async (data) => {
  return BackendService.post("user/", data);
};

//loging a user
const loginUser = async (data) => {
  return BackendService.post("user/login", data);
};

//registering a user
const registerUser = async (data) => {
  return BackendService.patch("user/register", data);
};

//forgot password
const forgotPassword = async (data) => {
  return BackendService.post("user/forgot", data);
};

//reset password
const resetPassword = async (data, token) => {
  return BackendService.post("user/reset", data, { token });
};

//exporting the user service
const UserService = {
  getUser,
  createUser,
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
};
export default UserService;
