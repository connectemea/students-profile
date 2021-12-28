import FamilyDetailsInput from "../../../utils/Student/FamilyDetailsInput";
import { useEffect, useState } from "react";
import { Container, Button, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import StudentService from "../../../../services/StudentService";
import FamilyDetails from "../Add/FamilyDetails";

export default function FamilyDetails() {
  const [details, setDetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getStudentDetails = async () => {
      try {
        const details = await StudentService.getStudent(id);
        setDetails(details);
      } catch (err) {
        console.err(err);
      }
    };
    if (id) getStudentDetails();
  }, [id]);
  return (
    <Container>
      <Grid>
        <Grid>FamilyDetails</Grid>
        <Grid>
          {details && <FamilyDetailsInput currentdetails={details.FamilyDetails} />}
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            sx={{ mt: 2 }}
            align
            href="/student/details/"
            onClick
            size="large"
            color="info"
            variant="contained"
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
