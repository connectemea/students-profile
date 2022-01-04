import BackendService from "./BackendService";

// get all users
const getUsers = async (type = "student") => {
  return BackendService.get(`user/?type=${type}`);
};

// create a new user
const createUser = async (data) => {
  return BackendService.post("user/", data);
};

// image upload 
const uploadImage = async (data) => {
  return BackendService.imageUpload("upload/", data);
};

const getProfile = async () => {
  return BackendService.get("user/profile");
};

//exporting the user service
const UserService = {
  getUsers,
  createUser,
  uploadImage,
  getProfile,
};

export default UserService;
 