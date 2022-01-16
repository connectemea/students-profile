import { useState, useEffect, useContext } from "react";
import {
  Typography,
  Grid,
  Card,
  Switch,
  FormControlLabel,
  Button,
  MenuItem,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import LOCAL_KEYS from "../../../constants/LOCAL_KEY";
//student service
import studentsService from "../../../services/studentsService";
import userService from "../../../services/userService";
//Custom Components
import SelectInput from "../Inputs/SelectInput";
import TextInput from "../Inputs/TextInput";
import DatePickerInput from "../Inputs/DatePickerInput";
import ImageUpload from "../Inputs/ImageUpload";
import { studentContext } from "../../../context/studentContext";
import departmentService from "../../../services/departmentService";

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

export default function PersonalDetailsInput() {
  const { student, setStudent } = useContext(studentContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [profileImage, setProfileImage] = useState();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState(null);
  const [caste, setCaste] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [yearOfJoin, setYearOfJoin] = useState(null);
  const [department, setDepartment] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  const [admissionNO, setAdmissionNO] = useState(null);
  const [bloodGroup, setBloodGroup] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [religion, setReligion] = useState(null);
  const [categoryOfAdmission, setCategoryOfAdmission] = useState(null);
  const [identificationMarkOne, setIdentificationMarkOne] = useState(null);
  const [identificationMarkTwo, setIdentificationMarkTwo] = useState(null);
  const [presentAddress, setPresentAddress] = useState(null);
  const [permanentAddress, setPermanentAdress] = useState(null);
  const [residence, setResidence] = useState(null);
  const [distanceFromCollege, setDistanceFromCollege] = useState(null);
  const [isAddressSame, setIsAddressSame] = useState(false);
  const [departmentData, setDepartmentData] = useState();

  const handleIsAddressChecked = () => {
    if (!isAddressSame) setPermanentAdress(presentAddress);
    setIsAddressSame(!isAddressSame);
  };
  const departmentChangeHandler = (e) => {
    setDepartment(e.target.value);
  };
  useEffect(() => {
    const setPresentAsPermanent = () => setPermanentAdress(presentAddress);
    if (isAddressSame) setPresentAsPermanent();
  }, [presentAddress, isAddressSame]);

  //Function to Structure Data
  const structureData = () => {
    const personalDetails = {
      profileImage,
      name,
      email,
      admissionNO,
      yearOfJoin,
      department,
      mobileNo,
      dateOfBirth,
      gender,
      bloodGroup,
      maritalStatus,
      religion,
      caste,
      categoryOfAdmission,
      identificationMarkOne,
      identificationMarkTwo,
      presentAddress,
      permanentAddress,
      residence,
      distanceFromCollege,
    };

    return personalDetails;
  };

  //To Check if the form is filled
  const errorCheck = () => {
    if (
      !profileImage ||
      !dateOfBirth ||
      !yearOfJoin ||
      !name ||
      !email ||
      !department ||
      !mobileNo ||
      !gender ||
      !admissionNO ||
      !bloodGroup ||
      !maritalStatus ||
      !religion ||
      !caste ||
      !categoryOfAdmission ||
      !identificationMarkOne ||
      !identificationMarkTwo ||
      !presentAddress ||
      !permanentAddress ||
      !residence ||
      !distanceFromCollege
    ) {
      errorSetter();
      return false;
    }
    return true;
  };

  //Set error for empty field
  const errorSetter = () => {
    if (!profileImage) setProfileImage("");
    if (!dateOfBirth) setDateOfBirth("");
    if (!yearOfJoin) setYearOfJoin("");
    if (!name) setName("");
    if (!email) setEmail("");
    if (!department) setDepartment("");
    if (!mobileNo) setMobileNo("");
    if (!gender) setGender("");
    if (!admissionNO) setAdmissionNO("");
    if (!bloodGroup) setBloodGroup("");
    if (!maritalStatus) setMaritalStatus("");
    if (!religion) setReligion("");
    if (!caste) setCaste("");
    if (!categoryOfAdmission) setCategoryOfAdmission("");
    if (!identificationMarkOne) setIdentificationMarkOne("");
    if (!identificationMarkTwo) setIdentificationMarkTwo("");
    if (!presentAddress) setPresentAddress("");
    if (!permanentAddress) setPermanentAdress("");
    if (!residence) setResidence("");
    if (!distanceFromCollege) setDistanceFromCollege("");
  };

  //To set the given value to the state
  const setCurrentDetails = (details) => {
    if (!details) return;
    setProfileImage(details.profileImage);
    setName(details.name);
    setEmail(details.email);
    setDepartment(details.department);
    setMobileNo(details.mobileNo);
    setDateOfBirth(new Date(details.dateOfBirth));
    setGender(details.gender);
    setDepartment(details.department);
    setYearOfJoin(new Date(details.yearOfJoin));
    setGender(details.gender);
    setAdmissionNO(details.admissionNO);
    setBloodGroup(details.bloodGroup);
    setMaritalStatus(details.maritalStatus);
    setReligion(details.religion);
    setCaste(details.caste);
    setCategoryOfAdmission(details.categoryOfAdmission);
    setIdentificationMarkOne(details.identificationMarkOne);
    setIdentificationMarkTwo(details.identificationMarkTwo);
    setPresentAddress(details.presentAddress);
    setPermanentAdress(details.permanentAddress);
    setResidence(details.residence);
    setDistanceFromCollege(details.distanceFromCollege);
  };

  // To handle next button click
  const handleNext = () => {
    //To check if there are any error
    if (!errorCheck()) return;
    setStudent({
      ...student,
      personalDetails: structureData(),
    });
    navigate("/student/details/educational");
  };

  //To check its an image or not
  const isFile = (file) => file instanceof File;

  //To handle edit
  const handleUpdate = async () => {
    //To check if there are any error
    if (!errorCheck()) return;
    const data = {
      personalDetails: structureData(),
    };
    if (isFile(profileImage)) {
      const formData = new FormData();
      formData.append("profile", profileImage);
      const imageUrl = await userService.updateImage(formData);
      data.personalDetails.profileImage = imageUrl.filepath;
    }
    await studentsService.updateStudent(id, data);
  };

  //To set the previously filled data
  useEffect(() => {
    setCurrentDetails(student?.personalDetails);
  }, [student?.personalDetails]);
  //To get departments
  useEffect(() => {
    const getDepartment = async () => {
      try {
        const departmentList = await departmentService.getDepartment();
        setDepartmentData(departmentList);
      } catch (err) {
        console.error(err.response);
      }
    };
    getDepartment();
  }, []);

  //To set the data on update
  useEffect(() => {
    const getStudent = async () => {
      try {
        const student = await studentsService.getStudentById(id);
        setCurrentDetails(student.personalDetails);
      } catch (error) {
        console.error(error?.response?.data?.message);
      }
    };
    if (id) getStudent();
  }, [id]);

  return (
    <>
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Image Section */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={12}
          md={4}
          lg={4}
        >
          <ImageUpload image={profileImage} setImage={setProfileImage} />
          {profileImage === "" && (
            <Typography sx={{ mt: 2 }} variant="body2" color="error">
              Profile image is required
            </Typography>
          )}
          <Typography sx={{ mt: 2, color: "gray" }} variant={"body2"}>
            Allowed *.jpeg, *.jpg, *.png, *.gif <br />
            max size: 1MB
          </Typography>
        </Grid>

        {/* Add Details Section */}
        <Grid item xs={12} sm={12} md={8} lg={8} container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Name"
              name="Name"
              textValue={name}
              setTextValue={setName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              name="Email"
              label="Email Address"
              textValue={email}
              setTextValue={setEmail}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* select input from custom made component */}
            <TextField
              select
              varient="contained"
              value={department}
              name="deparment"
              label="deparment"
              error={department === "" ? true : false}
              helperText={department === "" ? `${name} is required` : null}
              color="info"
              fullWidth
              onChange={departmentChangeHandler}
              InputLabelProps={{ shrink: department }}
            >
              {departmentData &&
                departmentData.map((menuItem) => (
                  <MenuItem key={menuItem._id} value={menuItem?._id}>
                    {menuItem?.name}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              name="Mobile Number"
              label="Mobile Number"
              type="number"
              textValue={mobileNo}
              setTextValue={setMobileNo}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <DatePickerInput
              label="Date Of Birth"
              name="Date of Birth"
              date={dateOfBirth}
              setDate={setDateOfBirth}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <SelectInput
              label="Gender"
              name="Gender"
              menuItems={LOCAL_KEYS.GENDER}
              dropdownValue={gender}
              setDropdownValue={setGender}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Admission Number"
              name="Admission Number"
              textValue={admissionNO}
              setTextValue={setAdmissionNO}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <DatePickerInput
              views={["year"]}
              label="Joining Year"
              name="Joining Year"
              date={yearOfJoin}
              setDate={setYearOfJoin}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <SelectInput
            label="Blood Group"
            name="Blood Group"
            menuItems={LOCAL_KEYS.BLOOD_GROUP}
            dropdownValue={bloodGroup}
            setDropdownValue={setBloodGroup}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <SelectInput
            label="Marital Status"
            name="Marital Status"
            menuItems={LOCAL_KEYS.MARITAL_STATUS}
            dropdownValue={maritalStatus}
            setDropdownValue={setMaritalStatus}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextInput
            label="Religion"
            name="Religion"
            textValue={religion}
            setTextValue={setReligion}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <TextInput
            label="Caste"
            name="Caste"
            textValue={caste}
            setTextValue={setCaste}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <SelectInput
            label="Category Of Admission"
            name="Category Of Admission"
            menuItems={LOCAL_KEYS.CATEGORY_OF_ADMISSION}
            dropdownValue={categoryOfAdmission}
            setDropdownValue={setCategoryOfAdmission}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextInput
            label="Identification Mark 1"
            name="Identification Mark"
            textValue={identificationMarkOne}
            setTextValue={setIdentificationMarkOne}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextInput
            label="Identification Mark 2"
            name="Identification Mark"
            textValue={identificationMarkTwo}
            setTextValue={setIdentificationMarkTwo}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ display: "flex", alignItems: "flex-end" }}
        >
          <TextInput
            label="Present Address"
            name="Present Address"
            multiline
            rows={3}
            textValue={presentAddress}
            setTextValue={setPresentAddress}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <FormControlLabel
            control={<Switch onClick={handleIsAddressChecked} />}
            label="Same as Present Address"
            sx={{ color: "#637381" }}
          />
          <TextInput
            label="Permanent Address"
            name="Permanent Address"
            multiline
            rows={3}
            textValue={permanentAddress}
            disabled={isAddressSame}
            setTextValue={setPermanentAdress}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SelectInput
            label="Residence"
            name="Residence"
            menuItems={LOCAL_KEYS.RESIDENCE}
            dropdownValue={residence}
            setDropdownValue={setResidence}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <TextInput
            label="Distance From College"
            name="Distance From College"
            textValue={distanceFromCollege}
            setTextValue={setDistanceFromCollege}
          />
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
