import BackendService from "./BackendService";

// get all teacher
const getTeacher = async () => {
  return BackendService.get("teacher/");
};

// create a new teacher
const createTeacher = async (data) => {
  return BackendService.post("teacher/", data);
};

//exporting the teacher service
const TeacherService = {
  getTeacher,
  createTeacher,
};

export default TeacherService;
