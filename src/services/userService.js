import BackendService from "./BackendService";

// get all users
const getUsers = async (type = "student") => {
  return BackendService.get(`user/?type=${type}`);
};

// create a new user
const createUser = async (data) => {
  return BackendService.post("user/", data);
};

//exporting the user service
const UserService = {
  getUsers,
  createUser,
};
export default UserService;
