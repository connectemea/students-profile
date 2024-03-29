// material components
import { Typography, Stepper, Step, StepLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import { Box } from "@mui/system";
import EducationalDetailsInput from "../../../utils/Student/EducationalDetailsInput";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
}));

const steps = [
  { name: "Personal Details", link: "/student/details/personal" },
  { name: "Educational Details", link: "/student/details/educational" },
  { name: "Family Details", link: "/student/details/family" },
];

export default function EducationalDetails() {
  return (
    <Page title="Educational Details">
      <RootStyle>
        <Typography variant={"h4"}>Educational Details</Typography>
        <Box sx={{ width: "100%", p: "0.75%" }}>
          <Stepper activeStep={1}>
            {steps.map((step) => (
              <Step key={step.name}>
                  <StepLabel>{step.name}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <EducationalDetailsInput />
      </RootStyle>
    </Page>
  );
}
