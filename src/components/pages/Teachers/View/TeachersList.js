import { Link as RouterLink } from "react-router-dom";
import { useState, useContext } from "react";
import teacherService from "../../../../services/teacherService";
// material components
import { Stack, Button, Container, Typography } from "@mui/material";

// material icons
import AddIcon from "@mui/icons-material/Add";
// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import { useEffect } from "react";

// Loader
import { loadingContext } from "../../../../context/loadingContext";
import Loader from "../../../utils/Loader";

// table header cell config
const TABLE_HEAD = [
  {
    id: "name",
    label: "Name",
    type: "stack",
    baseUrl: "/app/teacher/view",
    imageId: "profileImage",
  },
  { id: "shortName", label: "short form", type: "text" },
  { id: "department.name", label: "department", type: "text" },
];

export default function TeachersList() {
  const { loaderToggler } = useContext(loadingContext);
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const getTeachers = async () => {
      try {
        loaderToggler(true);
        // get teachers
        const newTeacher = await teacherService.getAllTeacher();
        console.log(newTeacher);
        setTeachers(newTeacher);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getTeachers();
  }, []);

  return (
    <Page title="TeachersList">
      <Container>
        <Loader />
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
