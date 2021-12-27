import { useState } from "react";

// material components
import {
    Typography,
    Grid,
    Card,
    Button
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

//Custom Components
import TextInput from "../Inputs/TextInput";
import { useNavigate } from "react-router-dom";
// import SelectInput from "../Inputs/SelectInput";


const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`
}));


export default function DependenciesInput() {


    // dependencies
    const [classRoomPercent, setClassRoomPercent] = useState();
    const [classRoomRemark, setClassRoomRemark] = useState();
    const [lectureNotePercent, setLectureNotePercent] = useState();
    const [lectureNoteRemark, setLectureNoteRemark] = useState();
    const [noteByTeacherPercent, setNoteByTeacherPercent] = useState();
    const [noteByTeacherRemark, setNoteByTeacherRemark] = useState();
    const [caseStudyPercent, setCaseStudyPercent] = useState();
    const [caseStudyRemark, setCaseStudyRemark] = useState();
    const [observationPercent, setObservationPercent] = useState();
    const [observationRemark, setObservationRemark] = useState();
    const [surveyPercent, setSurveyPercent] = useState();
    const [surveyRemark, setSurveyRemark] = useState();
    const [experimentPercent, setExperimentPercent] = useState();
    const [experimentRemark, setExperimentRemark] = useState();
    const [extraReadingPercent, setExtraReadingPercent] = useState();
    const [extraReadingRemark, setExtraReadingRemark] = useState();
    const [internetPercent, setInternetPercent] = useState();
    const [internetRemark, setInternetRemark] = useState();

    //To check if the field is filled
    const navigate = useNavigate()
    const handleNextBtn = () => {
        if(!classRoomPercent || !lectureNotePercent || !noteByTeacherPercent || !caseStudyPercent || !observationPercent || !surveyPercent || !experimentPercent || !extraReadingPercent || !internetPercent){
            return errorSetter()
        }
        return navigate("/student/details/family")
    }
    const errorSetter = () => {
        if(!classRoomPercent) setClassRoomPercent("")
        if(!lectureNotePercent) setLectureNotePercent("")
        if(!noteByTeacherPercent) setNoteByTeacherPercent("")
        if(!caseStudyPercent) setCaseStudyPercent("")
        if(!observationPercent) setObservationPercent("")
        if(!surveyPercent) setSurveyPercent("")
        if(!experimentPercent) setExperimentPercent("")
        if(!extraReadingPercent) setExtraReadingPercent("")
        if(!internetPercent) setInternetPercent("")
    }



    return (
        <>

            {/* Dependencies  */}
            <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>

                <Grid item md={12}>
                    <Typography variant="subtitle1">Learing Method</Typography>
                    <Typography variant="body2">How much do you depend on each of the following for learning?</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="Classroom Lecture (in%)" name="" type="number" textValue={classRoomPercent} setTextValue={setClassRoomPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Remark" name="" textValue={classRoomRemark} setTextValue={setClassRoomRemark} />
                </Grid>


                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextInput label="Lecture Note (in%)" name="" type="number" textValue={lectureNotePercent} setTextValue={setLectureNotePercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Remark" name="" textValue={lectureNoteRemark} setTextValue={setLectureNoteRemark} />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextInput label="Notes Provided by Teacher (in%)" name="" type="number" textValue={noteByTeacherPercent} setTextValue={setNoteByTeacherPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Remark" name="" textValue={noteByTeacherRemark} setTextValue={setNoteByTeacherRemark} />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextInput label="Case Study (in%)" name="" type="number" textValue={caseStudyPercent} setTextValue={setCaseStudyPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Remark" name="" textValue={caseStudyRemark} setTextValue={setCaseStudyRemark} />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextInput label="Observation (in%)" name="" type="number" textValue={observationPercent} setTextValue={setObservationPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Remark" name="" textValue={observationRemark} setTextValue={setObservationRemark} />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextInput label="Survey (in%)" name="" type="number" textValue={surveyPercent} setTextValue={setSurveyPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Remark" name="" textValue={surveyRemark} setTextValue={setSurveyRemark} />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextInput label="Experiments (in%)" name="" type="number" textValue={experimentPercent} setTextValue={setExperimentPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Remark" name="" textValue={experimentRemark} setTextValue={setExperimentRemark} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextInput label="Extra Readings (in%)" name="" type="number" textValue={extraReadingPercent} setTextValue={setExtraReadingPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Remark" name="" textValue={extraReadingRemark} setTextValue={setExtraReadingRemark} />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextInput label="Internet/Learing App (in%)" name="" type="number" textValue={internetPercent} setTextValue={setInternetPercent} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <TextInput label="Remark" name="" textValue={internetRemark} setTextValue={setInternetRemark} />
                </Grid>

            </Grid>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ mt: 2, mr: 2 }} href="/student/details/educational" size="large" color="info" variant="contained">Previous</Button>
                <Button sx={{ mt: 2 }} onClick={handleNextBtn} size="large" color="info" variant="contained">Next</Button>
            </Box>

        </>
    )
}