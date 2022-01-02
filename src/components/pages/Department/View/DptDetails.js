import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
  Grid,
} from '@mui/material';
import Page from '../../../utils/Page';
import AddIcon from '@mui/icons-material/Add';
import Dptcard from "../../../utils/Department/Dptcard";
import DptTypeConfig from "../../../utils/Department/DptTypeConfig";

//api service
import departemntService from "../../../../services/departmentService"

export default function DptDetails() {
  const [departmentData, setdepartmentData] = useState();
  useEffect(() => {
    const getDepartment = async () => {
      try {
        console.log("called getDepartment");
        // get department
        const departmentList = await departemntService.getDepartment();
        setdepartmentData(departmentList);
      } catch (err) {
        console.error(err.response);
      }
    };
    getDepartment();
  }, []);

  return (
    <Page title="Departments">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
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
          {departmentData && departmentData.map(department => (
            <Grid item xs={12} sm={6} md={3}>
              {DptTypeConfig.map((type) => (
                <Dptcard
                  data={department}
                  type={type}
                // onClick={handleClick}
                />
              ))}

            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  )
}
