// material components
import {
    Typography,
    Grid,
    Card,
    TextField,
    MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";


const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`
}));

export default function EducationalDetailsInput() {

    return (
        <>
        {/* SSLC/10th */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">SSLC/10th Std</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField fullWidth label="School Name" id="schoolName" color='info' />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextField select fullWidth label="Medium Of Instruction" id="mediumOfInstruction" color='info'>
                        <MenuItem>English</MenuItem>
                        <MenuItem>Malayalam</MenuItem>
                        <MenuItem>Hindi</MenuItem>
                    </TextField></Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField fullWidth label="English (in%)" type="number" id="english"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField fullWidth label="Maths (in%)" type="number" id="maths"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField fullWidth label="Science (in%)" type="number" id="science"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField fullWidth label="Social Science (in%)" type="number" id="socialScience"/>
                </Grid>
            </Grid>    
        </Grid>

        {/* Plus Two/VHSE */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">Plus Two/VHSE</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField fullWidth label="School Name" id="schoolName"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} >
                    <TextField select fullWidth label="Syllabus" id="syllabus">
                        <MenuItem>Kerala State</MenuItem>
                        <MenuItem>CBSE</MenuItem>
                        <MenuItem>ICSE</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} >
                    <TextField select fullWidth label="Course" id="course">
                        <MenuItem>Science</MenuItem>
                        <MenuItem>Computer Science</MenuItem>
                        <MenuItem>Commerce</MenuItem>
                        <MenuItem>Humanities</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} >
                    <TextField select fullWidth label="Subject" id="sub1">
                        <MenuItem>English</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <TextField select fullWidth label="Subject" id="sub2">
                        <MenuItem>Biology</MenuItem>
                        <MenuItem>Computer Science</MenuItem>
                        <MenuItem>Computer Application</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <TextField select fullWidth label="Subject" id="sub3">
                        <MenuItem>Physics</MenuItem>
                        <MenuItem>Physics</MenuItem>
                        <MenuItem>Physics</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <TextField select fullWidth label="Subject" id="sub4">
                        <MenuItem>Chemistry</MenuItem>
                        <MenuItem>Chemistry</MenuItem>
                        <MenuItem>Chemistry</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <TextField select fullWidth label="Subject" id="sub5">
                        <MenuItem>Maths</MenuItem>
                        <MenuItem>Maths</MenuItem>
                        <MenuItem>Maths</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextField fullWidth label="Marks (in%)" type="number" id="sub1Mark"/>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextField fullWidth label="Marks (in%)" type="number" id="sub2Mark"/>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextField fullWidth label="Marks (in%)" type="number" id="sub3Mark"/>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextField fullWidth label="Marks (in%)" type="number" id="sub4Mark"/>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextField fullWidth label="Marks (in%)" type="number" id="sub5Mark"/>
                </Grid>
            </Grid>    
        </Grid>

        {/* Degree */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">Degree</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField fullWidth label="College Name" id="collegeName"/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField fullWidth label="University" id="university"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} >
                    <TextField select fullWidth label="Course" id="course">
                        <MenuItem>Computer Science</MenuItem>
                        <MenuItem>B.com</MenuItem>
                        <MenuItem>BBA</MenuItem>
                        <MenuItem>English</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField fullWidth label="Core (Main) %" type="number" id="coreMark"/>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextField fullWidth label="Complementary (Sub) %" type="number" id="complementaryMark"/>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextField fullWidth label="Common (English) %" type="number" id="commonEnglishMark"/>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextField fullWidth label="Common (Language) %" type="number" id="commonLanguageMark"/>
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextField fullWidth label="Open %" type="number" id="openMark"/>
                </Grid>
            </Grid>    
        </Grid>

        {/* Other Qualification */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">Other Qualification</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField fullWidth label="Course Type" id="courseType"/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField fullWidth label="Institution Name" id="institutionName"/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField fullWidth label="Grade" id="grade"/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField fullWidth label="University (If Recognised)" id="institutionName"/>
                </Grid>
            </Grid>    
        </Grid>

        {/* Additional Course */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">Additional Course</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField fullWidth label="Degree / Diploma / Certificate Course" id="courseType"/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField fullWidth label="Institute Name" id="instituteName"/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField fullWidth label="University / Government" id="university"/>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextField fullWidth label="Marks / CGP obtained" id="marks"/>
                </Grid>
            </Grid>    
        </Grid>
        </>
    )
}