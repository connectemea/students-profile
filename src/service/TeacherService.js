import BackendService from "./BackendService";

// get all teacher
const getTeacher = async () => {
  return BackendService.get("teacher/");
};

// create a new teacher
const createTeacher = async (data) => {
  return BackendService.post("teacher/", data);
};

// get one teacher
const getTeach = async () => {
  return BackendService.get("teacher/6195d89a2ee84ac208962c4f");
};

//exporting the teacher service
const TeacherService = {
  getTeacher,
  createTeacher,
  getTeach,
};

export default TeacherService;
