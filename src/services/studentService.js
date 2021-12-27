import BackendService from "./BackendService";

// To get an individual student by id
const getStudent = (id) =>{
    return BackendService.get(`student/${id}`);
}

//To get all students
const getStudents = () =>{
    return BackendService.get(`student`);
}

const studentService = {
    getStudent,
    getStudents
}

export default studentService;