import { useState, useEffect } from "react";

// material components
import {
    Typography,
    Grid,
    Card,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@mui/material";
import { styled } from "@mui/material/styles";

//Custom Components
import TextInput from "../Inputs/TextInput";

const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`
}));

export default function FamilyDetailsInput() {
    //Father
    const [fatherName, setFatherName] = useState();
    const [fatherQualification, setFatherQualification] = useState();
    const [fatherAnnualIncome, setFatherAnnualIncome] = useState();
    const [fatherOccupation, setFatherOccupation] = useState();
    const [fatherAddress, setFatherAddress] = useState();
    //Mother
    const [motherName, setMotherName] = useState();
    const [motherQualification, setMotherQualification] = useState();
    const [motherAnnualIncome, setMotherAnnualIncome] = useState();
    const [motherOccupation, setMotherOccupation] = useState();
    const [motherAddress, setMotherAddress] = useState();
    //Guardian
    const [guardianName, setGuardianName] = useState();
    const [guardianQualification, setGuardianQualification] = useState();
    const [guardianAnnualIncome, setGuardianAnnualIncome] = useState();
    const [guardianOccupation, setGuardianOccupation] = useState();
    const [guardianAddress, setGuardianAddress] = useState();

    //Radio button management
    //Father
    //father name
    const [isFatherChecked, setIsFatherChecked] = useState(false);
    const handleIsFatherChecked = () => {
        if (!isFatherChecked) setGuardianName(fatherName);
        setIsFatherChecked(!isFatherChecked)
    };
    useEffect(() => {
        const setFatherAsGuardian = () => setGuardianName(fatherName);
        if (isFatherChecked) setFatherAsGuardian();
    }, [fatherName])


    return (
        <>
            {/* Father Details */}
            <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
                {/* Add Details Section */}
                <Grid item md={12}><Typography variant="subtitle1">Father</Typography></Grid>
                <Grid item md={12} container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Name" name="Father Name" textValue={fatherName} setTextValue={setFatherName} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <TextInput label="Qualification" name="Father Qualification" textValue={fatherQualification} setTextValue={setFatherQualification} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput label="Annual Income (Rs)" name="Father Annual Income" textValue={fatherAnnualIncome} setTextValue={setFatherAnnualIncome} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Occupation" name="Father Occupation" textValue={fatherOccupation} setTextValue={setFatherOccupation} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Official Address" multiline rows="3" name="Father Official Address" textValue={fatherAddress} setTextValue={setFatherAddress} />
                    </Grid>
                </Grid>
            </Grid>

            {/* Mother Details */}
            <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
                {/* Add Details Section */}
                <Grid item md={12}><Typography variant="subtitle1">Mother</Typography></Grid>
                <Grid item md={12} container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Name" name="Mother Name" textValue={motherName} setTextValue={setMotherName} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <TextInput label="Qualification" name="Mother Qualification" textValue={motherQualification} setTextValue={setMotherQualification} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput label="Annual Income (Rs)" name="Mother Annual Income" textValue={motherAnnualIncome} setTextValue={setMotherAnnualIncome} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Occupation" name="Mother Occupation" textValue={motherOccupation} setTextValue={setMotherOccupation} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Official Address" name="Mother Official Address" multiline rows="3" textValue={motherAddress} setTextValue={setMotherAddress} />
                    </Grid>
                </Grid>
            </Grid>

            {/* Guardian Details */}
            <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
                {/* Add Details Section */}
                <Grid item md={12}><Typography variant="subtitle1">Guardian</Typography></Grid>
                <Grid item md={12}>
                    <RadioGroup row aria-label="guardian" name="guardian">
                        <FormControlLabel value="father" control={<Radio onClick={handleIsFatherChecked}/>} label="Father" />
                        <FormControlLabel value="mother" control={<Radio />} label="Mother" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </Grid>
                <Grid item md={12} container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Name" name="Guardian Name" textValue={guardianName} setTextValue={setGuardianName} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <TextInput label="Qualification" name="Guardian Qualification" textValue={guardianQualification} setTextValue={setGuardianQualification} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput label="Annual Income (Rs)" name="Guardian Annual Income" textValue={guardianAnnualIncome} setTextValue={setGuardianAnnualIncome} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Occupation" name="Guardian Occupation" textValue={guardianOccupation} setTextValue={setGuardianOccupation} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Official Address" name="Guardian Official Address" multiline rows="3" textValue={guardianAddress} setTextValue={setGuardianAddress} />
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}