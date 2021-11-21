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
//SSLC
const meduimsOfInstruction = ["Malayalam", "English", "Hindi"]
//HSE
const syllabuses = ["Kerala State", "CBSE", "ICSE"]
const hseCourses = ["Science", "Computer Science", "Commerce", "Humanities"]
const english = ["English"]
const hseSubjects1 = ["Biology", "Computer Science"]
const hseSubjects2 = ["Physics", "Accounting", "Journalism"]
const hseSubjects3 = ["Chemistry", "Geology", "Computer Application"]
const hseSubjects4 = ["Mathematics", "Politics", "Sociology"]

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
    const [hseEnglish, setHseEnglish] = useState();
    const [hseSub1, setHseSub1] = useState();
    const [hseSub2, setHseSub2] = useState();
    const [hseSub3, setHseSub3] = useState();
    const [hseSub4, setHseSub4] = useState();
    const [hseEnglishMark, setHseEnglishMark] = useState();
    const [hseSub1Mark, setHseSub1Mark] = useState();
    const [hseSub2Mark, setHseSub2Mark] = useState();
    const [hseSub3Mark, setHseSub3Mark] = useState();
    const [hseSub4Mark, setHseSub4Mark] = useState();


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
                    <SelectInput label="Subject" name="english" menuItems={english} dropdownValue={hseEnglish} setDropdownValue={setHseEnglish} />
                </Grid>

                {/* Completed till here */}
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <SelectInput label="Subject" name="sub1" menuItems={hseSubjects1} dropdownValue={hseSub1} setDropdownValue={setHseSub1} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <SelectInput label="Subject" name="sub2" menuItems={hseSubjects2} dropdownValue={hseSub2} setDropdownValue={setHseSub2} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <SelectInput label="Subject" name="sub3" menuItems={hseSubjects3} dropdownValue={hseSub3} setDropdownValue={setHseSub3} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <SelectInput label="Subject" name="sub4" menuItems={hseSubjects4} dropdownValue={hseSub4} setDropdownValue={setHseSub4} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="Marks (in%)" name="Marks" type="number" textValue={hseEnglishMark} setTextValue={setHseEnglishMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextInput label="Marks (in%)" name="Marks" type="number" textValue={hseSub1Mark} setTextValue={setHseSub1Mark} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextInput label="Marks (in%)" name="Marks" type="number" textValue={hseSub2Mark} setTextValue={setHseSub2Mark} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextInput label="Marks (in%)" name="Marks" type="number" textValue={hseSub3Mark} setTextValue={setHseSub3Mark} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextInput label="Marks (in%)" name="Marks" type="number" textValue={hseSub4Mark} setTextValue={setHseSub4Mark} />
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