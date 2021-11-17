// material components
import {
    Button,
    Typography,
    Stepper,
    Step,
    StepLabel
} from "@mui/material";
import { styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

import { Box } from "@mui/system";
import FamilyDetailsInput from "../../../utils/Student/FamilyDetailsInput";


const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(4),
}));

const steps = [
    'Personal Details',
    'Educational Details',
    'Family Details',
];


export default function FamilyDetails() {


    return (
        <Page title="Family Details">
            <RootStyle>
                <Typography variant={"h4"}>Family Details</Typography>
                <Box sx={{ width: '100%', p: '0.75%' }}>
                    <Stepper activeStep={2}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <FamilyDetailsInput/>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button sx={{ mt: 2, mr:2 }} href="/student/details/educational" size="large" color="info" variant="contained">Previous</Button>
                    <Button sx={{ mt: 2 }} href="/home" size="large" color="info" variant="contained">Submit</Button>
                </Box>
            </RootStyle>

        </Page>
    );
}
