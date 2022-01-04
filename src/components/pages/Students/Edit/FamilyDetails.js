import FamilyDetailsInput from "../../../utils/Student/FamilyDetailsInput";
import { Container, Button, Grid, Typography } from "@mui/material";


export default function FamilyDetails() {
  return (
    <Container>
          <Grid>
        <Grid>
        <Typography variant={"h4"}>Family Details</Typography>
        </Grid>
        <FamilyDetailsInput />
      </Grid>

    </Container>
  );
}
