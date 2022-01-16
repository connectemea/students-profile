import PersonalDetailsInput from "../../../utils/Student/PersonalDetailsInput";
import { Container, Grid, Typography } from "@mui/material";

export default function PersonalDeatils() {
  return (
    <Container>
      <Grid>
        <Grid>
        <Typography variant={"h4"}>Personal Details</Typography>
        </Grid>
        <PersonalDetailsInput />
      </Grid>
    </Container>
  );
}
