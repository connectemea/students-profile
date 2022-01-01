import { useState } from "react";

// material components
import {
    Typography,
    Grid,
    Card,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    Box
} from "@mui/material";
import { styled } from "@mui/material/styles";

//Custom Components
import TextInput from "../Inputs/TextInput";
import { useNavigate } from "react-router-dom";

const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`
}));

export default function FamilyDetailsInput(props) {
    const {currentData} = props ;
    //Father
    const [fatherName, setFatherName] = useState(currentData?currentData.father.name:null);
    const [fatherQualification, setFatherQualification] = useState(currentData?currentData.father.educationQualification:null);
    const [fatherAnnualIncome, setFatherAnnualIncome] = useState(currentData?currentData.father.annualIncome:null);
    const [fatherOccupation, setFatherOccupation] = useState(currentData?currentData.father.occupation:null);
    const [fatherNO, setFatherNO] = useState();
    const [fatherAddress, setFatherAddress] = useState(currentData?currentData.father.officialAddress:null);
    //Mother
    const [motherName, setMotherName] = useState(currentData?currentData.mother.name:null);
    const [motherQualification, setMotherQualification] = useState(currentData?currentData.mother.educationQualification:null);
    const [motherAnnualIncome, setMotherAnnualIncome] = useState(currentData?currentData.annualIncome:null);
    const [motherOccupation, setMotherOccupation] = useState(currentData?currentData.occupation:null);
    const [motherNO, setMotherNO] = useState(currentData?currentData.mother.name:null);
    const [motherAddress, setMotherAddress] = useState(currentData?currentData.mother.officialAddress:null);
    //Guardian
    const [guardianName, setGuardianName] = useState(currentData?currentData.gardian.name:null);
    const [guardianQualification, setGuardianQualification] = useState(currentData?currentData.gardian.educationQualification:null);
    const [guardianAnnualIncome, setGuardianAnnualIncome] = useState(currentData?currentData.gardian.annualIncome:null);
    const [guardianOccupation, setGuardianOccupation] = useState(currentData?currentData.gardian.occupation:null);
    const [guardianNO, setGuardianNO] = useState(currentData?currentData.mother.officialAddress:null);
    const [guardianAddress, setGuardianAddress] = useState(currentData?currentData.gardian.officialAddress:null);

    //Radio button management
    //Father
    const [isFatherChecked, setIsFatherChecked] = useState(false);
    const handleIsFatherChecked = () => {
        if (!isFatherChecked) setFatherAsGuardian();
        setIsOtherChecked(false);
    }
    const setFatherAsGuardian = () => {
        setGuardianName(fatherName);
        setGuardianQualification(fatherQualification);
        setGuardianAnnualIncome(fatherAnnualIncome);
        setGuardianOccupation(fatherOccupation);
        setGuardianNO(fatherNO);
        setGuardianAddress(fatherAddress);
    }
    //Mother
    const [isMotherChecked, setIsMotherChecked] = useState(false);
    const handleIsMotherChecked = () => {
        if (!isMotherChecked) setMotherAsGuardian();
        setIsOtherChecked(false)
    }
    const setMotherAsGuardian = () => {
        setGuardianName(motherName)
        setGuardianQualification(motherQualification)
        setGuardianAnnualIncome(motherAnnualIncome)
        setGuardianOccupation(motherOccupation)
        setGuardianNO(motherNO)
        setGuardianAddress(motherAddress)
    }
    //Other
    const [isOtherChecked, setIsOtherChecked] = useState(true);
    const handleIsOtherChecked = () => {
        setIsOtherChecked(true);
    }

    //To check if fields are filled
    const navigate = useNavigate()
    const handleSubmitBtn = () => {
        if(!fatherName || !fatherQualification || !fatherAnnualIncome || !fatherOccupation || !fatherNO || !fatherAddress || !motherName || !motherQualification || !motherAnnualIncome || !motherOccupation || !motherNO || !motherAddress || !guardianName || !guardianQualification || !guardianAnnualIncome || !guardianOccupation || !guardianNO || !guardianAddress){
            return errorSetter()
        }
        return navigate("/app/home")
    }
    //To set error in field
    const errorSetter = () => {
        if(!fatherName) setFatherName("")
        if(!fatherQualification) setFatherQualification("")
        if(!fatherAnnualIncome) setFatherAnnualIncome("")
        if(!fatherOccupation) setFatherOccupation("")
        if(!fatherNO) setFatherNO("")
        if(!fatherAddress) setFatherAddress("")

        if(!motherName) setMotherName("")
        if(!motherQualification) setMotherQualification("")
        if(!motherAnnualIncome) setMotherAnnualIncome("")
        if(!motherOccupation) setMotherOccupation("")
        if(!motherNO) setMotherNO("")
        if(!motherAddress) setMotherAddress("")
        
        if(!guardianName) setGuardianName("")
        if(!guardianQualification) setGuardianQualification("")
        if(!guardianAnnualIncome) setGuardianAnnualIncome("")
        if(!guardianOccupation) setGuardianOccupation("")
        if(!guardianNO) setGuardianNO("")
        if(!guardianAddress) setGuardianAddress("")
    }



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
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <TextInput label="Occupation" name="Father Occupation" textValue={fatherOccupation} setTextValue={setFatherOccupation} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <TextInput label="Phone Number" type="number" name="Phone Number" textValue={fatherNO} setTextValue={setFatherNO} />
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
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <TextInput label="Occupation" name="Mother Occupation" textValue={motherOccupation} setTextValue={setMotherOccupation} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <TextInput label="Phone Number" type="number" name="Phone Number" textValue={motherNO} setTextValue={setMotherNO} />
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
                    <RadioGroup row aria-label="guardian" name="guardian" defaultValue="other">
                        <FormControlLabel value="father" control={<Radio onClick={handleIsFatherChecked} />} label="Father" />
                        <FormControlLabel value="mother" control={<Radio onClick={handleIsMotherChecked} />} label="Mother" />
                        <FormControlLabel value="other" control={<Radio onClick={handleIsOtherChecked} />} label="Other" />
                    </RadioGroup>
                </Grid>
                <Grid item md={12} container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Name" name="Guardian Name" disabled={!isOtherChecked} textValue={guardianName} setTextValue={setGuardianName} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <TextInput label="Qualification" name="Guardian Qualification" disabled={!isOtherChecked} textValue={guardianQualification} setTextValue={setGuardianQualification} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextInput label="Annual Income (Rs)" name="Guardian Annual Income" disabled={!isOtherChecked} textValue={guardianAnnualIncome} setTextValue={setGuardianAnnualIncome} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <TextInput label="Occupation" name="Guardian Occupation" disabled={!isOtherChecked} textValue={guardianOccupation} setTextValue={setGuardianOccupation} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <TextInput label="Phone Number" type="number" name="Phone Number" disabled={!isOtherChecked} textValue={guardianNO} setTextValue={setGuardianNO} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextInput label="Official Address" name="Guardian Official Address" disabled={!isOtherChecked} multiline rows="3" textValue={guardianAddress} setTextValue={setGuardianAddress} />
                    </Grid>
                </Grid>
            </Grid>
            {/* Buttons */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ mt: 2, mr: 2 }} href="/student/details/dependencies" size="large" color="info" variant="contained">Previous</Button>
                <Button sx={{ mt: 2 }} onClick={handleSubmitBtn} size="large" color="info" variant="contained">Submit</Button>
            </Box>

        </>
    )
}