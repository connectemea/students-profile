import EducationalDetailsInput from "../../../utils/Student/EducationalDetailsInput";
import { useEffect, useState } from "react";
import { Container, Button, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import StudentService from "../../../../services/studentService";

export default function EducationDeatils() {
  const [details, setDetails] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getStudentDetails = async () => {
      try {
        const details = await StudentService.getStudent(id);
        setDetails(details);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) getStudentDetails();
  }, [id]);
  return (
    <Container>
      <Grid>
        <Grid>
        <Typography variant={"h4"}>
        Education Details
        </Typography>
        </Grid>

        <Grid>
         {details&& <EducationalDetailsInput currentData={details.educationDeatils}/>}
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
