import BackendService from "./BackendService";

// get all users
const getUser = async () => {
  return BackendService.get("user/");
};

// create a new user
const createUser = async (data) => {
  return BackendService.post("user/", data);
};

// image upload 
const uploadImage = async (data) => {
  return BackendService.imageUpload("upload/", data);
};

//exporting the user service
const UserService = {
  getUser,
  createUser,
  uploadImage,  
};

export default UserService;
 