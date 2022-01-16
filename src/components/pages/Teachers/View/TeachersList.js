import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import teacherService from "../../../../services/teacherService";
// material components
import { Stack, Button, Container, Typography } from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import { useEffect } from "react";

// table header cell config
const TABLE_HEAD = [
  { id: "name", label: "Name", type: "stack" ,baseUrl:"/app/teacher/view"},
  { id: "shortName", label: "short form", type: "text" },
  { id: "department", label: "department", type: "text" },
];


export default function TeachersList() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const getTeachers = async () => {
      try {
        // get teachers
        const newTeacher = await teacherService.getAllTeacher();
        setTeachers(newTeacher);
      } catch (err) {
        console.error(err?.response?.data?.message);
      }
    };
    getTeachers();
  }, []);

  return (
    <Page title="TeachersList">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Teachers
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/app/teacher/add"
            startIcon={<AddIcon />}
          >
            New Teacher
          </Button>
        </Stack>
        {teachers && (
          <DataTable TABLE_DATA={teachers} TABLE_HEAD={TABLE_HEAD} />
        )}
      </Container>
    </Page>
  );
}
