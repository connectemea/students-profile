import EducationalDetailsInput from "../../../utils/Student/EducationalDetailsInput";
import { Container, Button, Grid, Typography } from "@mui/material";

export default function EducationDeatils() {
  return (
    <Container>
      <Grid>
        <Grid>
        <Typography variant={"h4"}>
        Education Details
        </Typography>
        </Grid>

        <Grid>
         <EducationalDetailsInput/>
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
