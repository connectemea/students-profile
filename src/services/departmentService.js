import BackendService from './BackendService';

//to get all departments
const getDepartment = async() => {
    return BackendService.get(`department/`);
}

//get department data by id
const getDepartmentData = async(_id) => {
    return BackendService.get(`department/${_id}`)
};

//to add department
const addDepartment = async(data) => {
    return BackendService.post("department/", data);
};

// delete department
const deleteDepartment = async(_id) => {

    return BackendService.destroy(`department/${_id}`);
}

// update department
const updateDepartment = async(_id , data) => {

    return BackendService.patch(`department/${_id}` , data);
}
const departmentService = {
    getDepartment,
    addDepartment,
    deleteDepartment,
    updateDepartment,
    getDepartmentData,
}
export default departmentService;