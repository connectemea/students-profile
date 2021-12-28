import BackendService from "./BackendService";

//get all students
const getStudent = async (id) => {
  return BackendService.get(`student/${id}`);
};

//exporting the user service
const StudentService = {
  getStudent,
};
export default StudentService;
