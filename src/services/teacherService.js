import BackendService from "./BackendService";

// To get teacher
const getTeacher = (id) => {
  // return BackendService.get(`teacher/${id}`);
  return BackendService.get(`teacher/${id}`);
};

// To get teacher one
const getTeacherOne = (id) => {
  return BackendService.get(`teacher/${id}`);
  // return BackendService.get(`teacher/me`);
};
// To get teacher me
const getTeacherMe = () => {
  // return BackendService.get(`teacher/${id}`);
  return BackendService.get(`teacher/me`);
};

//To get all teacher sponsored by the user
const getAllTeacher = () => {
  return BackendService.get(`teacher/`);
};

// create a new teacher
const createTeacher = async (data) => {
  return BackendService.post("teacher/", { teacherDetails: data });
};

const teacherService = {
  getTeacher,
  getAllTeacher,
  createTeacher,
  getTeacherMe,
  getTeacherOne,
};
export default teacherService;

