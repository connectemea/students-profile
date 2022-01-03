import BackendService from "./BackendService";

// To get teacher
const getTeacher = () => {
  // return BackendService.get(`teacher/${id}`);
  return BackendService.get(`teacher/6195d89a2ee84ac208962c4f`);
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
};
export default teacherService;
// import BackendService from "./BackendService";

// // get all teacher
// const getTeacher = async () => {
//   return BackendService.get("teacher/");
// };

// // create a new teacher
// const createTeacher = async (data) => {
//   return BackendService.post("teacher/", data);
// };

// // get one teacher
// const getTeach = async () => {
//   return BackendService.get("teacher/6195d89a2ee84ac208962c4f");
// };

// //exporting the teacher service
// const TeacherService = {
//   getTeacher,
//   createTeacher,
//   getTeach,
// };

// export default TeacherService;
