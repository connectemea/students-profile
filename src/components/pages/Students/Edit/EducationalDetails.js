import EducationalDetailsInput from "../../../utils/Student/EducationalDetailsInput";
import { Container, Grid, Typography } from "@mui/material";

export default function EducationDeatils() {
  return (
    <Container>
      <Grid>
        <Grid>
        <Typography variant={"h4"}>Education Details</Typography>
        </Grid>
        <EducationalDetailsInput />
      </Grid>
    </Container>
  );
}
