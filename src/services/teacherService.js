import BackendService from './BackendService';

// To get teacher
const getTeacher = (id) => {
    return BackendService.get(`teacher/${id}`);
}

//To get all teacher sponsored by the user
const getAllTeacher = () => {
    return BackendService.get(`teacher/`);
}

const teacherService = {
    getTeacher,
    getAllTeacher
}
export default teacherService;