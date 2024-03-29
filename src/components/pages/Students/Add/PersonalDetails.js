import PersonalDetailsInput from "../../../utils/Student/PersonalDetailsInput";
// material components
import {
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
    {name:'Personal Details', link:'/student/details/personal'},
    {name:'Educational Details', link:'/student/details/educational'},
    {name:'Family Details', link:'/student/details/family'}
];


export default function PersonalDetails() {


    return (
        <Page title="Personal Details">
            <RootStyle>
                <Typography variant={"h4"}>Personal Details</Typography>
                <Box sx={{ width: '100%', p: '0.75%' }}>
                    <Stepper activeStep={0}>
                        {steps.map((step) => (
                            <Step key={step.name}>
                                <StepLabel>{step.name}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <PersonalDetailsInput />
                
            </RootStyle>

        </Page>
    );
}
