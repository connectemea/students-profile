import PersonalDetailsInput from "../../../utils/Student/PersonalDetailsInput";
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


const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(4),
}));

const steps = [
    'Personal Details',
    'Educational Details',
    'Family Details',
];


export default function PersonalDetails() {


    return (
        <Page title="Personal Details">
            <RootStyle>
                <Typography variant={"h4"}>Personal Details</Typography>
                <Box sx={{ width: '100%', p: '0.75%' }}>
                    <Stepper activeStep={0}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <PersonalDetailsInput />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button sx={{ mt: 2 }} 
                    href="/student/details/educational" 
                    onClick
                    size="large" color="info" variant="contained">Next</Button>
                </Box>
            </RootStyle>

        </Page>
    );
}
