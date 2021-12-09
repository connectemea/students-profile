import BackendService from "./BackendService";

//get all students
const getStudent = async () => {
  return BackendService.get("student/6194ac7b193228a8eac8f943");
};

//exporting the user service
const StudentService = {
  getStudent,
};
export default StudentService;
