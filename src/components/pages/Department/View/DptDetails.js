import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// material components
import { Stack, Button, Container, Typography, Grid } from "@mui/material";
import Page from "../../../utils/Page";
import AddIcon from "@mui/icons-material/Add";
import Dptcard from "../../../utils/Department/Dptcard";
//loading
import { loadingContext } from "../../../../context/loadingContext";
import Loader from "../../../utils/Loader";

//api service
import departemntService from "../../../../services/departmentService";

export default function DptDetails() {
  const { loaderToggler } = useContext(loadingContext);
  const [departmentData, setdepartmentData] = useState();
  useEffect(() => {
    const getDepartment = async () => {
      try {
        loaderToggler(true);
        // get department
        const departmentList = await departemntService.getDepartment();
        setdepartmentData(departmentList);
        loaderToggler(false);
      } catch (err) {
        console.error(err.response);
        loaderToggler(false);
      }
    };
    getDepartment();
  }, []);

  return (
    <Page title="Departments">
      <Container>
        <Loader />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Departments
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/app/department/add"
            startIcon={<AddIcon />}
          >
            New department
          </Button>
        </Stack>
        <Grid container spacing={3} rowSpacing={1} direction="row">
          {departmentData &&
            departmentData.map((department, index) => (
              <Grid item xs={12} sm={6} md={3}>
                <Dptcard data={department} index={index} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Page>
  );
}
