import BackendService from "./BackendService";

// get all users
const getUsers = async (type = "student") => {
  return BackendService.get(`user/?type=${type}`);
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

// image upload
const uploadImage = async (data) => {
  return BackendService.post("upload/", data);
};

// get profile image
const getProfileImage = async (url) => {
  return BackendService.get(`upload/${url}`);
};

//exporting the user service
const UserService = {
  getUsers,
  createUser,
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
  uploadImage,
  getProfileImage
};
export default UserService;
