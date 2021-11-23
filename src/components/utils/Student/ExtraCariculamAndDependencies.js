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
    // sslc
    const [activity, setActivity] = useState();
    const [prize , setPrize] = useState();
    const [yearOfParticipation, setYearOfParticipation] = useState();
    const [perfomance , setPerfomance] = useState();




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
            
        </Grid>
        

    
    
        </>
    )
}