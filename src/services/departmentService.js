import BackendService from './BackendService';
import axios from 'axios';

//to get all departments
const getDepartment = async() => {
    return BackendService.get(`department/`);
}

//to add department
const addDepartment = async(data) => {
    return BackendService.post("department/", data);
};

// delete department
const deleteDepartment = async() => {

    axios.delete(`department/${_id}`);
}

// update department
const updateDepartment = async(id) => {

    axios.patch(`department/${id}`);
}
const departmentService = {
    getDepartment,
    addDepartment,
    deleteDepartment,
    updateDepartment
}
export default departmentService;