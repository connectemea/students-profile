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

import { Link } from "react-router-dom";

import { Box } from "@mui/system";


const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(4),
}));

const steps = [
    {name:'Personal Details', link:'/student/details/personal'},
    {name:'Educational Details', link:'/student/details/educational'},
    {name:'Family Details', link:'/student/details/family'}
];


export default function Dependencies() {


    return (
        <Page title="Dependencies">
            <RootStyle>
                <Typography variant={"h4"}>Dependencies</Typography>
                <Box sx={{ width: '100%', p: '0.75%' }}>
                    <Stepper activeStep={1}>
                    {steps.map((step) => (
                            <Step key={step.name}>
                            <Link to={step.link} style={{textDecoration:'none'}}>
                                <StepLabel>{step.name}</StepLabel>
                            </Link>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                {/* Add Custom Component Here */}
                {/* Dependencies Page Deleted */}
                
            </RootStyle>

        </Page>
    );
}
