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
import { setQuarter } from "date-fns";


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
//Degree
const ugCourses = ["Bsc. Computer Science", "B.com", "BBA"]

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
    //Degree
    const [collegeName, setCollegeName] = useState();
    const [ugUniversity, setUgUniversity] = useState();
    const [ugCourse, setUgCourse] = useState();
    const [ugCoreMark, setUgCoreMark] = useState();
    const [ugComplementaryMark, setUgComplementaryMark] = useState();
    const [ugCommonEnglishMark, setUgCommonEnglishMark] = useState();
    const [ugCommonLanguageMark, setUgCommonLanguageMark] = useState();
    const [ugOpenMark, setUgOpenMark] = useState();
    //Other Qualification
    const [othCourseType, setOthCourseType] = useState();
    const [othInstitutionName, setOthInstitutionName] = useState();
    const [othGrade, setOthGrade] = useState();
    const [othUniversity, setOthUniversity] = useState();
    //Additional Coourse
    const [addiCourse, setAddiCourse] = useState();
    const [addiInstituionName, setAddiInstituionName] = useState();
    const [addiUniversity, setAddiUniversity] = useState();
    const [addiMarks, setAddiMarks] = useState();



    return (
        <>
        {/* SSLC/10th */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">SSLC/10th Std</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="School Name" name="School Name" textValue={sslcSchoolName} setTextValue={setSslcSchoolName} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <SelectInput label="Medium Of Instruction" name="Medium Of Instruction" menuItems={meduimsOfInstruction} dropdownValue={sslcMediumOfInstruction} setDropdownValue={setSslcMediumOfInstruction} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="English (in%)" name="Marks" type="number" textValue={sslcEnglishMark} setTextValue={setSslcEnglishMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="Maths (in%)" name="Marks" type="number" textValue={sslcMathsMark} setTextValue={setSslcMathsMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="Scince (in%)" name="Marks" type="number" textValue={sslcScienceMark} setTextValue={setSslcScienceMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="Social Science (in%)" name="Marks" type="number" textValue={sslcSocialScienceMark} setTextValue={setSslcSocialScienceMark} />
                </Grid>
            </Grid>    
        </Grid>

        {/* Plus Two/VHSE */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">Plus Two/VHSE</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextInput label="School Name" name="School Name" textValue={hseSchoolName} setTextValue={setHseSchoolName} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} >
                    <SelectInput label="Syllabus" name="Syllabus" menuItems={syllabuses} dropdownValue={hseSyllabus} setDropdownValue={setHseSyllabus} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} >
                    <SelectInput label="Course" name="Course" menuItems={hseCourses} dropdownValue={hseCourse} setDropdownValue={setHseCourse} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} >
                    <SelectInput label="Subject" name="Subject" menuItems={english} dropdownValue={hseEnglish} setDropdownValue={setHseEnglish} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <SelectInput label="Subject" name="Subject" menuItems={hseSubjects1} dropdownValue={hseSub1} setDropdownValue={setHseSub1} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <SelectInput label="Subject" name="Subject" menuItems={hseSubjects2} dropdownValue={hseSub2} setDropdownValue={setHseSub2} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <SelectInput label="Subject" name="Subject" menuItems={hseSubjects3} dropdownValue={hseSub3} setDropdownValue={setHseSub3} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2} >
                    <SelectInput label="Subject" name="Subject" menuItems={hseSubjects4} dropdownValue={hseSub4} setDropdownValue={setHseSub4} />
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
                    <TextInput label="College Name" name="College Name" textValue={collegeName} setTextValue={setCollegeName} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextInput label="University" name="University" textValue={ugUniversity} setTextValue={setUgUniversity} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3} >
                    <SelectInput label="Course" name="Course" menuItems={ugCourses} dropdownValue={ugCourse} setDropdownValue={setUgCourse} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="Core (Main) %" name="Marks" type="number" textValue={ugCoreMark} setTextValue={setUgCoreMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={3}>
                    <TextInput label="Complementary (Sub) %" name="Marks" type="number" textValue={ugComplementaryMark} setTextValue={setUgComplementaryMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextInput label="Common (English) %" name="Marks" type="number" textValue={ugCommonEnglishMark} setTextValue={setUgCommonEnglishMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextInput label="Common (Language) %" name="Marks" type="number" textValue={ugCommonLanguageMark} setTextValue={setUgCommonLanguageMark} />
                </Grid>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                    <TextInput label="Open Course %" name="Marks" type="number" textValue={ugOpenMark} setTextValue={setUgOpenMark} />
                </Grid>
            </Grid>    
        </Grid>

        {/* Other Qualification */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">Other Qualification</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextInput label="Course Type" name="Course Type" textValue={othCourseType} setTextValue={setOthCourseType} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextInput label="Institution Name" name="Institution Name" textValue={othInstitutionName} setTextValue={setOthInstitutionName} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextInput label="Grade" name="Grade" textValue={othGrade} setTextValue={setOthGrade} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <TextInput label="University (If Recognised)" name="University" textValue={othUniversity} setTextValue={setOthUniversity} />
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