import { Link as RouterLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// material components
import { Stack, Container, Typography, Grid } from "@mui/material";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import departmentService from "../../../../services/departmentService";

//dropdown
import SelectInput from "../../../utils/Inputs/SelectInput";
const years = ["2017", "2018", "2019", "2020", "2021", "2022"]

// table header cell config
const TABLE_HEAD = [
  {
    id: "personalDetails.name",
    label: "Name",
    alignRight: false,
    type: "stack",
    baseUrl: "/app/student/view",
  },
  { id: "userId.email", label: "email", type: "text" },
  {
    id: "personalDetails.admissionNO",
    label: "admission No",
    type: "text",
  },
];

export default function DptStudentsList() {
  const { id } = useParams();
// //get department by id
//   const [department, setDepartment] = useState();
//   useEffect(() => {
//     const getDepartment = async () => {
//       try {
//         // get department data
//         const response = await departmentService.getDepartmentData(id);
//         setDepartmentName(response);
//         console.log(response);
//       } catch (err) {
//         console.error(err.response);
//       }
//     };
//     if (id) getDepartment()
//   }, [id]);
  
  //setState function
//  function setDepartmentName(department) {
//   setDepartment(department.name);
//   }
// console.log(department);

  const [year, setYear] = useState(2021);
  console.log(year);

  //get student list
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getStudents = async () => {
      try {
        // get students
        const students = await departmentService.getStudentsByDepartment(id, year);
        console.log(students);
        setStudents(students);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
    getStudents();
  }, []);

  return (
    <Page title="StudentsList">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Students
          </Typography>
          <Grid container justify="flex-end" item xs={12} sm={6} md={3} lg={3}>
            {/* select input from custom made component */}
            <SelectInput label="select year" name="year" menuItems={years} dropdownValue={year} setDropdownValue={setYear} />
          </Grid>
        </Stack>
        {students && (
          <DataTable TABLE_DATA={students} TABLE_HEAD={TABLE_HEAD} />
        )}
      </Container>
    </Page>
  );
}
