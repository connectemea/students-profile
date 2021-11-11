import { useState } from "react";

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
    MenuItem
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

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
const AddImage =styled(IconButton)(({theme}) =>({
    height: theme.spacing(20),
    width: theme.spacing(20),
    outline: "1.5px dotted grey",
    outlineOffset: "10px",
}));

export default function AddDetails() {



    return (
        <Page title="Personal Details">
            <RootStyle>
                <Typography variant={"h4"}>Personal Details</Typography>
                <Grid component={Card} sx={{ mt: 2, p: 2 }} container spacing={2}>
                    {/* Add Image Section */}
                   <Grid container direction="column" justifyContent="flex-end" alignItems="center" xs={12} sm={12} md={4} lg={4}>
                   <input type="file" id="imageUpload" hidden/>
                        <AddImage>
                        <label for="imageUpload"><Stack direction="column" spacing={1}>
                        <item><AddAPhotoIcon/></item>
                        <item><Typography variant={"body1"}>Upload photo</Typography></item></Stack>
                        </label>
                        </AddImage>
                   
                    <Typography sx={{mt:3}} variant={"body2"}>
                    Allowed *.jpeg, *.jpg, *.png, *.gif <br/>max size: 3.1 MB
                    </Typography>
                    </Grid>
                    
                    {/* Add Details Section */}
                    <Grid item xs={12} sm={12} md={8} lg={8} container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Name" id="fullWidth" color='info' />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Email Address" id="fullWidth" color='info' />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        <TextField select fullWidth label="Department" id="fullWidth" color='info'>
                        <MenuItem>BSc CS</MenuItem>
                        <MenuItem>BSc MB</MenuItem>
                        <MenuItem>BSc BT</MenuItem>
                        <MenuItem>BSc</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        <MenuItem>cs</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Admission Number" id="fullWidth" color='info' />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Date Of Birth" id="fullWidth" color='info' />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} >
                        <TextField select fullWidth label="Gender" id="fullWidth" color='info'>
                        <MenuItem>Male</MenuItem>
                        <MenuItem>Female</MenuItem>
                        <MenuItem>Other</MenuItem>
                        </TextField></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Mobile Number" id="fullWidth" color='info' />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Joining Year" id="fullWidth" color='info' />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField select fullWidth label="Blood Group" id="fullWidth" color='info'>
                        <MenuItem>A+ve</MenuItem>
                        <MenuItem>A+ve</MenuItem>
                        <MenuItem>A+ve</MenuItem>
                        <MenuItem>A+ve</MenuItem>
                        <MenuItem>A+ve</MenuItem>
                        </TextField></Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                        <TextField select fullWidth label="Marital Status" id="fullWidth" color='info'>
                        <MenuItem>Married</MenuItem>
                        <MenuItem>Unmarried</MenuItem>
                        </TextField></Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField fullWidth label="Religion" id="fullWidth" color='info' />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                        <TextField fullWidth label="Caste" id="fullWidth" color='info' />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} >
                        <TextField select fullWidth label="Category Of Admission" id="fullWidth" color='info'>
                        <MenuItem>Merit</MenuItem>
                        <MenuItem>Merit</MenuItem>
                        </TextField></Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Identification Mark 1" id="fullWidth" color='info' />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Identification Mark 2" id="fullWidth" color='info' />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Permenant Address" id="fullWidth" color='info' />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Present Address" id="fullWidth" color='info' />
                        </Grid>
                </Grid>
            </RootStyle>

        </Page>
    );
}
