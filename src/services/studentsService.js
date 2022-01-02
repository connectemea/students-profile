import BackendService from "./BackendService";

// To get an individual student by id
const getStudentById = (id) => {
  return BackendService.get(`student/${id}`);
};

//To get all students
const getStudents = () => {
  return BackendService.get(`student`);
};

//Add student
const addStudent = (data) => {
  return BackendService.post(`student/`, data);
};

//update students
const updateStudent = (id, data) => {
  return BackendService.patch(`student/${id}`, data);
};

const studentsService = {
  getStudentById,
  getStudents,
  addStudent,
  updateStudent,
};

export default studentsService;
