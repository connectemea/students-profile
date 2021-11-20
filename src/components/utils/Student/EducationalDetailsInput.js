import { useState } from "react";

// material components
import {
    Typography,
    Grid,
    Card,
    TextField,
    MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";

//Custom Components
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";


const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`
}));

//Dropdown Menu
const meduimsOfInstruction = ["Malayalam", "English", "Hindi"]
const syllabuses = ["Kerala State", "CBSE", "ICSE"]
const hseCourses = ["Science", "Computer Science", "Commerce", "Humanities"]
const english = ["English"]

export default function EducationalDetailsInput() {
    // sslc
    const [sslcSchoolName, setSslcSchoolName] = useState();
    const [sslcMediumOfInstruction, setSslcMediumOfInstruction] = useState();
    const [sslcEnglishMark, setSslcEnglishMark] = useState();
    const [sslcMathsMark, setSslcMathsMark] = useState();
    const [sslcScienceMark, setSslcScienceMark] = useState();
    const [sslcSocialScienceMark, setSslcSocialScienceMark] = useState();
    //HSE
    const [hseSchoolName, setHseSchoolName] = useState();
    const [hseSyllabus, setHseSyllabus] = useState();
    const [hseCourse, setHseCourse] = useState();
    const [hseSub1, setHseSub1] = useState();


    return (
        <>
        {/* SSLC/10th */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">SSLC/10th Std</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="School Name" name="schoolName" textValue={sslcSchoolName} setTextValue={setSslcSchoolName} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <SelectInput label="Medium Of Instruction" name="mediumOfInstruction" menuItems={meduimsOfInstruction} dropdownValue={sslcMediumOfInstruction} setDropdownValue={setSslcMediumOfInstruction} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="English (in%)" name="english" type="number" textValue={sslcEnglishMark} setTextValue={setSslcEnglishMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="Maths (in%)" name="maths" type="number" textValue={sslcMathsMark} setTextValue={setSslcMathsMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="Scince (in%)" name="scienceMarks" type="number" textValue={sslcScienceMark} setTextValue={setSslcScienceMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="Social Science (in%)" name="socialScienceMark" type="number" textValue={sslcSocialScienceMark} setTextValue={setSslcSocialScienceMark} />
                </Grid>
            </Grid>    
        </Grid>

        {/* Plus Two/VHSE */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">Plus Two/VHSE</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextInput label="School Name" name="schoolName" textValue={hseSchoolName} setTextValue={setHseSchoolName} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} >
                    <SelectInput label="Syllabus" name="syllabus" menuItems={syllabuses} dropdownValue={hseSyllabus} setDropdownValue={setHseSyllabus} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} >
                    <SelectInput label="Course" name="course" menuItems={hseCourses} dropdownValue={hseCourse} setDropdownValue={setHseCourse} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} >
                    <SelectInput label="Subject" name="sub1" menuItems={english} dropdownValue={hseSub1} setDropdownValue={setHseSub1} />
                </Grid>

                {/* Completed till here */}
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