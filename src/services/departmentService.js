import BackendService from './BackendService';

//to get all departments
const getDepartment= async () => {
    return BackendService.get(`department/`);
}

//to add department
const addDepartment = async (data) => {
    return BackendService.post("department/", data);
  };

  const departmentService = {
    getDepartment,
    addDepartment
}
export default departmentService;
  