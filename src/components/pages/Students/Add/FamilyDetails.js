// material components
import {
    Button,
    Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";

// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";

import { Box } from "@mui/system";
import FamilyDetailsInput from "../../../utils/Student/FamilyDetailsInput";


const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(4),
}));



export default function FamilyDetails() {


    return (
        <Page title="Family Details">
            <RootStyle>
                <Typography variant={"h4"}>Family Details</Typography>
                <FamilyDetailsInput/>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button sx={{ mt: 2, mr:2 }} href="/student/details/educational" size="large" color="info" variant="contained">Previous</Button>
                    <Button sx={{ mt: 2 }} size="large" color="info" variant="contained">Next</Button>
                </Box>
            </RootStyle>

        </Page>
    );
}
