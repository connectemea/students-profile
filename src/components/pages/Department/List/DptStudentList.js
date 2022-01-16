import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// material components
import { Stack, Container, Typography, Grid } from "@mui/material";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import departmentService from "../../../../services/departmentService";

//dropdown
import SelectInput from "../../../utils/Inputs/SelectInput";

// table header cell config
const TABLE_HEAD = [
  {
    id: "personalDetails.name",
    label: "Name",
    alignRight: false,
    type: "stack",
    baseUrl: "/app/student/view",
    imageId: "personalDetails.profileImage",
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
  const date = new Date();
  const currentYear = date.getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const [year, setYear] = useState(
    date.getMonth() > 0 ? currentYear : currentYear - 1
  );
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getStudents = async () => {
      try {
        const students = await departmentService.getStudentsByDepartment(
          id,
          year
        );
        setStudents(students);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
    getStudents();
  }, [id, year]);

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
            <SelectInput
              label="Joining year"
              name="year"
              menuItems={years}
              dropdownValue={year}
              setDropdownValue={setYear}
            />
          </Grid>
        </Stack>
        {students && (
          <DataTable TABLE_DATA={students} TABLE_HEAD={TABLE_HEAD} />
        )}
      </Container>
    </Page>
  );
}
