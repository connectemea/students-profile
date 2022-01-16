import BackendService from "./BackendService";

// To get teacher
const getTeacher = () => {
  // return BackendService.get(`teacher/${id}`);
  return BackendService.get(`teacher/me`);
};
const getTeacherById = (id) => {
  return BackendService.get(`teacher/${id}`);
};

//To get all teacher sponsored by the user
const getAllTeacher = () => {
  return BackendService.get(`teacher/`);
};

// create a new teacher
const createTeacher = async (data) => {
  return BackendService.post("teacher/", { teacherDetails: data });
};

// update  teacher
const updateTeacher = async (id, data) => {
  return BackendService.patch(`teacher/${id}`, { teacherDetails: data });
};

const teacherService = {
  getTeacher,
  getTeacherById,
  getAllTeacher,
  createTeacher,
  updateTeacher,
};
export default teacherService;
