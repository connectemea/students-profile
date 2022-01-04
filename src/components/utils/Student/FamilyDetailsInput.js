import { useState, useEffect, useContext } from "react";

// material components
import {
  Typography,
  Grid,
  Card,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

//Custom Components
import TextInput from "../Inputs/TextInput";
import { useNavigate, useParams } from "react-router-dom";
//student Service
import studentsService from "../../../services/studentsService";

import { studentContext } from "../../../context/studentContext";

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function FamilyDetailsInput(props) {
  const { currentData } = props;
  const { student, setStudent } = useContext(studentContext);
  const navigate = useNavigate();
  const { id } = useParams();
  //Father
  const [fatherName, setFatherName] = useState(null);
  const [fatherQualification, setFatherQualification] = useState(null);
  const [fatherAnnualIncome, setFatherAnnualIncome] = useState(null);
  const [fatherOccupation, setFatherOccupation] = useState(null);
  const [fatherNO, setFatherNO] = useState();
  const [fatherAddress, setFatherAddress] = useState(null);
  //Mother
  const [motherName, setMotherName] = useState(null);
  const [motherQualification, setMotherQualification] = useState(null);
  const [motherAnnualIncome, setMotherAnnualIncome] = useState(null);
  const [motherOccupation, setMotherOccupation] = useState(null);
  const [motherNO, setMotherNO] = useState(null);
  const [motherAddress, setMotherAddress] = useState(null);
  //Guardian
  const [guardianName, setGuardianName] = useState(null);
  const [guardianQualification, setGuardianQualification] = useState(null);
  const [guardianAnnualIncome, setGuardianAnnualIncome] = useState(null);
  const [guardianOccupation, setGuardianOccupation] = useState(null);
  const [guardianNO, setGuardianNO] = useState(null);
  const [guardianAddress, setGuardianAddress] = useState(null);

  //Radio button management
  //Father
  const [isFatherChecked, setIsFatherChecked] = useState(false);
  const handleIsFatherChecked = () => {
    if (!isFatherChecked) setFatherAsGuardian();
    setIsOtherChecked(false);
  };
  const setFatherAsGuardian = () => {
    setGuardianName(fatherName);
    setGuardianQualification(fatherQualification);
    setGuardianAnnualIncome(fatherAnnualIncome);
    setGuardianOccupation(fatherOccupation);
    setGuardianNO(fatherNO);
    setGuardianAddress(fatherAddress);
  };
  //Mother
  const [isMotherChecked, setIsMotherChecked] = useState(false);
  const handleIsMotherChecked = () => {
    if (!isMotherChecked) setMotherAsGuardian();
    setIsOtherChecked(false);
  };
  const setMotherAsGuardian = () => {
    setGuardianName(motherName);
    setGuardianQualification(motherQualification);
    setGuardianAnnualIncome(motherAnnualIncome);
    setGuardianOccupation(motherOccupation);
    setGuardianNO(motherNO);
    setGuardianAddress(motherAddress);
  };
  //Other
  const [isOtherChecked, setIsOtherChecked] = useState(true);
  const handleIsOtherChecked = () => {
    setIsOtherChecked(true);
  };

  // Function to structure data
  const structureData = () => {
    const familyDetails = {
      father: {
        name: fatherName,
        occupation: fatherOccupation,
        officialAddress: fatherAddress,
        qualification: fatherQualification,
        number: fatherNO,
      },
      mother: {
        name: motherName,
        occupation: motherOccupation,
        officialAddress: motherAddress,
        qualification: motherQualification,
        number: motherNO,
      },
      guardian: {
        name: guardianName,
        occupation: guardianOccupation,
        officialAddress: guardianAddress,
        qualification: guardianQualification,
        number: guardianNO,
      },
    };
    return familyDetails;
  };

  //To check if fields are filled
  const errorCheck = () => {
    if (
      !fatherName ||
      !fatherQualification ||
      !fatherAnnualIncome ||
      !fatherOccupation ||
      !fatherNO ||
      !fatherAddress ||
      !motherName ||
      !motherQualification ||
      !motherAnnualIncome ||
      !motherOccupation ||
      !motherNO ||
      !motherAddress ||
      !guardianName ||
      !guardianQualification ||
      !guardianAnnualIncome ||
      !guardianOccupation ||
      !guardianNO ||
      !guardianAddress
    ) {
      errorSetter();
      return false;
    }
    return true;
  };
  //To set error in field
  const errorSetter = () => {
    if (!fatherName) setFatherName("");
    if (!fatherQualification) setFatherQualification("");
    if (!fatherAnnualIncome) setFatherAnnualIncome("");
    if (!fatherOccupation) setFatherOccupation("");
    if (!fatherNO) setFatherNO("");
    if (!fatherAddress) setFatherAddress("");

    if (!motherName) setMotherName("");
    if (!motherQualification) setMotherQualification("");
    if (!motherAnnualIncome) setMotherAnnualIncome("");
    if (!motherOccupation) setMotherOccupation("");
    if (!motherNO) setMotherNO("");
    if (!motherAddress) setMotherAddress("");

    if (!guardianName) setGuardianName("");
    if (!guardianQualification) setGuardianQualification("");
    if (!guardianAnnualIncome) setGuardianAnnualIncome("");
    if (!guardianOccupation) setGuardianOccupation("");
    if (!guardianNO) setGuardianNO("");
    if (!guardianAddress) setGuardianAddress("");
  };
  //To set the given value to the state
  const setCurrentDetails = (details) => {
    if (!details) return;
    setFatherName(details.father.name);
    setFatherQualification(details.father.qualification);
    setFatherAnnualIncome();
    setFatherOccupation(details.father.occupation);
    setFatherNO();
    setFatherAddress(details.father.officialAddress);

    //mother Details

    setMotherName(details.mother.name);
    setMotherQualification(details.mother.qualification);
    setMotherAnnualIncome();
    setMotherOccupation(details.mother.occupation);
    setMotherNO();
    setMotherAddress(details.mother.officialAddress);

    //Guardian details

    setGuardianName(details.guardian.name);
    setGuardianQualification();
    setGuardianAnnualIncome();
    setGuardianOccupation(details.guardian.occupation);
    setGuardianNO();
    setGuardianAddress(details.guardian.officialAddress);
  };

  //To handle next button click
  const handleNext = () => {
    //To check if there are any error
    if (!errorCheck()) return;
    setStudent({
      ...student,
      familyDetails: structureData(),
    });
    navigate("/student/list");
  };
  //To handle edit
  const handleUpdate = async () => {
    //To check if there are any error
    if (!errorCheck()) return;
    const data = {
      familyDetails: structureData(),
    };
    await studentsService.updateStudent(id, data);
  };
  //To set the previously filled data
  useEffect(() => {
    setCurrentDetails(student.familyDetails);
  }, []);

  //To set the data on update
  useEffect(() => {
    const getStudent = async () => {
      try {
        const student = await studentsService.getStudentById(id);
        console.log(student)
        setCurrentDetails(student.familyDetails);
        
      } catch (error) {
        console.error(error?.response?.data?.message);
      }
    };
    if (id) getStudent();
  }, [id]);

  return (
    <>
      {/* Father Details */}
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Details Section */}
        <Grid item md={12}>
          <Typography variant="subtitle1">Father</Typography>
        </Grid>
        <Grid item md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Name"
              name="Father Name"
              textValue={fatherName}
              setTextValue={setFatherName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Qualification"
              name="Father Qualification"
              textValue={fatherQualification}
              setTextValue={setFatherQualification}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextInput
              label="Annual Income (Rs)"
              name="Father Annual Income"
              textValue={fatherAnnualIncome}
              setTextValue={setFatherAnnualIncome}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Occupation"
              name="Father Occupation"
              textValue={fatherOccupation}
              setTextValue={setFatherOccupation}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Phone Number"
              type="number"
              name="Phone Number"
              textValue={fatherNO}
              setTextValue={setFatherNO}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Official Address"
              multiline
              rows="3"
              name="Father Official Address"
              textValue={fatherAddress}
              setTextValue={setFatherAddress}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Mother Details */}
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Details Section */}
        <Grid item md={12}>
          <Typography variant="subtitle1">Mother</Typography>
        </Grid>
        <Grid item md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Name"
              name="Mother Name"
              textValue={motherName}
              setTextValue={setMotherName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Qualification"
              name="Mother Qualification"
              textValue={motherQualification}
              setTextValue={setMotherQualification}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextInput
              label="Annual Income (Rs)"
              name="Mother Annual Income"
              textValue={motherAnnualIncome}
              setTextValue={setMotherAnnualIncome}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Occupation"
              name="Mother Occupation"
              textValue={motherOccupation}
              setTextValue={setMotherOccupation}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Phone Number"
              type="number"
              name="Phone Number"
              textValue={motherNO}
              setTextValue={setMotherNO}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Official Address"
              name="Mother Official Address"
              multiline
              rows="3"
              textValue={motherAddress}
              setTextValue={setMotherAddress}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Guardian Details */}
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Details Section */}
        <Grid item md={12}>
          <Typography variant="subtitle1">Guardian</Typography>
        </Grid>
        <Grid item md={12}>
          <RadioGroup
            row
            aria-label="guardian"
            name="guardian"
            defaultValue="other"
          >
            <FormControlLabel
              value="father"
              control={<Radio onClick={handleIsFatherChecked} />}
              label="Father"
            />
            <FormControlLabel
              value="mother"
              control={<Radio onClick={handleIsMotherChecked} />}
              label="Mother"
            />
            <FormControlLabel
              value="other"
              control={<Radio onClick={handleIsOtherChecked} />}
              label="Other"
            />
          </RadioGroup>
        </Grid>
        <Grid item md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Name"
              name="Guardian Name"
              disabled={!isOtherChecked}
              textValue={guardianName}
              setTextValue={setGuardianName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Qualification"
              name="Guardian Qualification"
              disabled={!isOtherChecked}
              textValue={guardianQualification}
              setTextValue={setGuardianQualification}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextInput
              label="Annual Income (Rs)"
              name="Guardian Annual Income"
              disabled={!isOtherChecked}
              textValue={guardianAnnualIncome}
              setTextValue={setGuardianAnnualIncome}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Occupation"
              name="Guardian Occupation"
              disabled={!isOtherChecked}
              textValue={guardianOccupation}
              setTextValue={setGuardianOccupation}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Phone Number"
              type="number"
              name="Phone Number"
              disabled={!isOtherChecked}
              textValue={guardianNO}
              setTextValue={setGuardianNO}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Official Address"
              name="Guardian Official Address"
              disabled={!isOtherChecked}
              multiline
              rows="3"
              textValue={guardianAddress}
              setTextValue={setGuardianAddress}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {id ? (
          <Button
            sx={{ mt: 2 }}
            onClick={handleUpdate}
            size="large"
            color="info"
            variant="contained"
          >
            update
          </Button>
        ) : (
          <Button
            sx={{ mt: 2 }}
            onClick={handleNext}
            size="large"
            color="info"
            variant="contained"
          >
            Next
          </Button>
        )}
      </Box>
    </>
  );
}
