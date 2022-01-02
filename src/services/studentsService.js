import BackendService from "./BackendService";

// To get an individual student by id
const getStudent = (id) =>{
    return BackendService.get(`student/${id}`);
}

//To get all students
const getStudents = () =>{
    return BackendService.get(`student`);
}

//update students details
const updateStudentsDetails = () =>{
    return BackendService.patch('');
}


const studentsService = {
    getStudent,
    getStudents,
    updateStudentsDetails
}


export default studentsService;