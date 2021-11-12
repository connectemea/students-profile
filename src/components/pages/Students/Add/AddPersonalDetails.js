import { useState } from "react";
import PersonalDetailsInput from "../../../utils/Student/PersonalDetailsInput";
// material components
import {
    Stack,
    Button,
    Container,
    Typography,
    Grid,
    Card,
    TextField,
    Tooltip,
    MenuItem,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

//Date Picker
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


// material icons
import PublishIcon from "@mui/icons-material/Publish";
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


// page wrapper for dynamic meta tags
import Page from "../../../utils/Page";
import DataTable from "../../../utils/DataTable";
import { Box, width } from "@mui/system";


const RootStyle = styled("div")(({ theme }) => ({
    padding: theme.spacing(4),
}));



export default function AddPersonalDetails() {


    return (
        <Page title="Personal Details">
            <RootStyle>
                <Typography variant={"h4"}>Personal Details</Typography>
                <PersonalDetailsInput/>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button sx={{ mt: 2 }} size="large" color="info" variant="contained">Next</Button>
                </Box>
            </RootStyle>

        </Page>
    );
}
