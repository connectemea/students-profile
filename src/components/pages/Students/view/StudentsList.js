import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
// material components
import { Stack, Button, Container, Typography } from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import studentsService from "../../../../services/studentsService";

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

export default function StudentsList() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getStudents = async () => {
      try {
        // get students
        const students = await studentsService.getStudents();
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
          <Button
            variant="contained"
            component={RouterLink}
            to="/app/student/add"
            startIcon={<AddIcon />}
          >
            New Student
          </Button>
        </Stack>
        {students && (
          <DataTable TABLE_DATA={students} TABLE_HEAD={TABLE_HEAD} />
        )}
      </Container>
    </Page>
  );
}
