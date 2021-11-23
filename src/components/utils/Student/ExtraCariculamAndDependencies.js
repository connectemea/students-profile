import { useState } from "react";

// material components
import {
    Typography,
    Grid,
    Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";

//Custom Components
import TextInput from "../Inputs/TextInput";
// import SelectInput from "../Inputs/SelectInput";


const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`
}));

//Dropdown Menu
//SSLC
// const meduimsOfInstruction = ["Malayalam", "English", "Hindi"]
// //HSE
// const syllabuses = ["Kerala State", "CBSE", "ICSE"]
// const hseCourses = ["Science", "Computer Science", "Commerce", "Humanities"]
// const english = ["English"]
// const hseSubjects1 = ["Biology", "Computer Science"]
// const hseSubjects2 = ["Physics", "Accounting", "Journalism"]
// const hseSubjects3 = ["Chemistry", "Geology", "Computer Application"]
// const hseSubjects4 = ["Mathematics", "Politics", "Sociology"]
// //Degree
// const ugCourses = ["Bsc. Computer Science", "B.com", "BBA"]

export default function DependenciesInpu() {
    // extra cariculam
    const [activity, setActivity] = useState();
    const [prize , setPrize] = useState();
    const [yearOfParticipation, setYearOfParticipation] = useState();
    const [perfomance , setPerfomance] = useState();
 
    // dependencies
    const [classRoomPercent , setClassRoomPercent] = useState();
    const [classRoomRemark , setClassRoomRemark] = useState();
    const [lectureNotePercent , setLectureNotePercent] = useState();
    const [lectureNoteRemark , setLectureNoteRemark] = useState();
    const [noteByTeacherPercent , setNoteByTeacherPercent] = useState();
    const [noteByTeacherRemark , setNoteByTeacherRemark] = useState();
    const [caseStudyPercent , setCaseStudyPercent] = useState();
    const [caseStudyRemark , setCaseStudyRemark] = useState();
    const [observationPercent , setObservationPercent] = useState();
    const [observationRemark , setObservationRemark] = useState();
    const [surveyPercent , setSurveyPercent] = useState();
    const [surveyRemark , setSurveyRemark] = useState();
    const [experimentPercent , setExperimentPercent] = useState();
    const [experimentRemark , setExperimentRemark] = useState();
    const [extraReadingPercent , setExtraReadingPercent] = useState();
    const [extraReadingRemark , setExtraReadingRemark] = useState();
    const [internetPercent , setInternetPercent] = useState();
    const [internetRemark , setInternetRemark] = useState();

    
    



    return (
        <>
        {/* extra curiculam */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
            {/* Add Details Section */}
            <Grid item md={12}><Typography variant="subtitle1">Extra Cariculam Activities</Typography></Grid>
            <Grid item md={12} container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="Activity" name="Activity" textValue={activity} setTextValue={setActivity} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Prize" name="Prize" textValue={prize} setTextValue={setPrize}  />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={6}>
                    <TextInput label="Year of Participation" name="Year of Participation" type="number" textValue={yearOfParticipation} setTextValue={setYearOfParticipation} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextInput label="Details of excellence in Perfomance" name="Details of excellence in Perfomance"  textValue={perfomance} setTextValue={setPerfomance} />
                </Grid>
            </Grid>    
        </Grid>

        {/* Dependencies  */}
        <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>

            <Grid item md={12}><Typography variant="subtitle1">Learing Method and Dependance on each Method</Typography></Grid>
            <Grid item md={4}><Typography variant="subtitle1">Learning method</Typography></Grid>
            <Grid item md={4}><Typography variant="subtitle1">% of Dependance</Typography></Grid>
            <Grid item md={4}><Typography variant="subtitle1">Remark</Typography></Grid>
            <Grid item md={4}><Typography variant="subtitle1">Class room lecture</Typography></Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="in %" name="" type="number" textValue={classRoomPercent} setTextValue={setClassRoomPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <TextInput label="Remark" name="" textValue={classRoomRemark} setTextValue={setClassRoomRemark}  />
                </Grid>
            <Grid item md={4}><Typography variant="subtitle1">Lecture Note</Typography></Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="in %" name="" type="number" textValue={lectureNotePercent} setTextValue={setLectureNotePercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <TextInput label="Remark" name="" textValue={lectureNoteRemark} setTextValue={setLectureNoteRemark}  />
                </Grid>
            <Grid item md={4}><Typography variant="subtitle1">Note provided by Teacher</Typography></Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="in %" name="" type="number" textValue={noteByTeacherPercent} setTextValue={setNoteByTeacherPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <TextInput label="Remark" name="" textValue={noteByTeacherRemark} setTextValue={setNoteByTeacherRemark}  />
                </Grid>
            <Grid item md={4}><Typography variant="subtitle1">Case Study</Typography></Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="in %" name="" type="number" textValue={caseStudyPercent} setTextValue={setCaseStudyPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <TextInput label="Remark" name="" textValue={caseStudyRemark} setTextValue={setCaseStudyRemark}  />
                </Grid>
            <Grid item md={4}><Typography variant="subtitle1">Observation</Typography></Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="in %" name="" type="number" textValue={observationPercent} setTextValue={setObservationPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <TextInput label="Remark" name="" textValue={observationRemark} setTextValue={setObservationRemark}  />
                </Grid>
            
            <Grid item md={4}><Typography variant="subtitle1">Survey</Typography></Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="in %" name="" type="number" textValue={surveyPercent} setTextValue={setSurveyPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <TextInput label="Remark" name="" textValue={surveyRemark} setTextValue={setSurveyRemark}  />
                </Grid>
            <Grid item md={4}><Typography variant="subtitle1">Experiments</Typography></Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="in %" name="" type="number" textValue={experimentPercent} setTextValue={setExperimentPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <TextInput label="Remark" name="" textValue={experimentRemark} setTextValue={setExperimentRemark}  />
                </Grid>
            <Grid item md={4}><Typography variant="subtitle1">Extra Reading</Typography></Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="in %" name="" type="number" textValue={extraReadingPercent} setTextValue={setExtraReadingPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <TextInput label="Remark" name="" textValue={extraReadingRemark} setTextValue={setExtraReadingRemark}  />
                </Grid>

            <Grid item md={4}><Typography variant="subtitle1">Internet/Learing App</Typography></Grid>

                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <TextInput label="in %" name="" type="number" textValue={internetPercent} setTextValue={setInternetPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} >
                    <TextInput label="Remark" name="" textValue={internetRemark} setTextValue={setInternetRemark}  />
                </Grid>

        </Grid>
        

    
    
        </>
    )
}