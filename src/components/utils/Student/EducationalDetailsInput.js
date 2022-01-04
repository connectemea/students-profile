import { useState, useEffect, useContext } from "react";

// material components
import { Typography, Grid, Card, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
//student service
import studentsService from "../../../services/studentsService";
//Custom Components
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";
import DatePickerInput from "../Inputs/DatePickerInput";
import { useNavigate, useParams } from "react-router-dom";

import { studentContext } from "../../../context/studentContext";

const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

//Dropdown Menu
//SSLC
const meduimsOfInstruction = ["Malayalam", "English", "Hindi"];
//HSE
const syllabuses = ["Kerala State", "CBSE", "ICSE"];
const hseCourses = ["Science", "Computer Science", "Commerce", "Humanities"];
const english = ["English"];
const hseSubjects1 = ["Biology", "Computer Science"];
const hseSubjects2 = ["Physics", "Accounting", "Journalism"];
const hseSubjects3 = ["Chemistry", "Geology", "Computer Application"];
const hseSubjects4 = ["Mathematics", "Politics", "Sociology"];
//Degree
const ugCourses = ["Bsc. Computer Science", "B.com", "BBA"];

export default function EducationalDetailsInput(props) {
  const { student, setStudent } = useContext(studentContext);
  const { id } = useParams();
  const navigate = useNavigate();
  // sslc
  const [sslcSchoolName, setSslcSchoolName] = useState();
  const [sslcMediumOfInstruction, setSslcMediumOfInstruction] = useState(null);
  const [sslcEnglishMark, setSslcEnglishMark] = useState(null);
  const [sslcMathsMark, setSslcMathsMark] = useState(null);
  const [sslcScienceMark, setSslcScienceMark] = useState(null);
  const [sslcSocialScienceMark, setSslcSocialScienceMark] = useState(null);
  //HSE
  const [hseSchoolName, setHseSchoolName] = useState(null);
  const [hseSyllabus, setHseSyllabus] = useState(null);
  const [hseCourse, setHseCourse] = useState(null);
  const [hseEnglish, setHseEnglish] = useState(null);
  const [hseSub1, setHseSub1] = useState(null);
  const [hseSub2, setHseSub2] = useState(null);
  const [hseSub3, setHseSub3] = useState(null);
  const [hseSub4, setHseSub4] = useState(null);
  const [hseEnglishMark, setHseEnglishMark] = useState(null);
  const [hseSub1Mark, setHseSub1Mark] = useState(null);
  const [hseSub2Mark, setHseSub2Mark] = useState(null);
  const [hseSub3Mark, setHseSub3Mark] = useState(null);
  const [hseSub4Mark, setHseSub4Mark] = useState(null);
  //Degree
  const [collegeName, setCollegeName] = useState(null);
  const [ugUniversity, setUgUniversity] = useState(null);
  const [ugCourse, setUgCourse] = useState(null);
  const [ugCoreMark, setUgCoreMark] = useState(null);
  const [ugComplementaryMark, setUgComplementaryMark] = useState(null);
  const [ugCommonEnglishMark, setUgCommonEnglishMark] = useState(null);
  const [ugCommonLanguageMark, setUgCommonLanguageMark] = useState(null);
  const [ugOpenMark, setUgOpenMark] = useState(null);
  //Other Qualification
  const [othCourseType, setOthCourseType] = useState(null);
  const [othInstitutionName, setOthInstitutionName] = useState(null);
  const [othGrade, setOthGrade] = useState(null);
  const [othUniversity, setOthUniversity] = useState(null);
  //Additional Coourse
  const [addiCourse, setAddiCourse] = useState(null);
  const [addiInstituionName, setAddiInstituionName] = useState(null);
  const [addiUniversity, setAddiUniversity] = useState(null);
  const [addiMarks, setAddiMarks] = useState(null);
  // extra caricular
  const [activity, setActivity] = useState(null);
  const [prize, setPrize] = useState(null);
  const [yearOfParticipation, setYearOfParticipation] = useState(null);
  const [perfomance, setPerfomance] = useState(null);

  //To check if the form is filled
  const errorCheck = () => {
    if (
      !sslcSchoolName ||
      !sslcMediumOfInstruction ||
      !sslcEnglishMark ||
      !sslcMathsMark ||
      !sslcScienceMark ||
      !sslcSocialScienceMark ||
      !hseSchoolName ||
      !hseSyllabus ||
      !hseCourse ||
      !hseEnglish ||
      !hseSub1 ||
      !hseSub2 ||
      !hseSub3 ||
      !hseSub4 ||
      !hseEnglishMark ||
      !hseSub1Mark ||
      !hseSub2Mark ||
      !hseSub3Mark ||
      !hseSub4Mark
    ) {
      errorSetter();
      return false;
    }
    return true;
  };

  //To set error for empty field
  const errorSetter = () => {
    if (!sslcSchoolName) setSslcSchoolName("");
    if (!sslcMediumOfInstruction) setSslcMediumOfInstruction("");
    if (!sslcEnglishMark) setSslcEnglishMark("");
    if (!sslcMathsMark) setSslcMathsMark("");
    if (!sslcScienceMark) setSslcScienceMark("");
    if (!sslcSocialScienceMark) setSslcSocialScienceMark("");
    if (!hseSchoolName) setHseSchoolName("");
    if (!hseSyllabus) setHseSyllabus("");
    if (!hseCourse) setHseCourse("");
    if (!hseEnglish) setHseEnglish("");
    if (!hseSub1) setHseSub1("");
    if (!hseSub2) setHseSub2("");
    if (!hseSub3) setHseSub3("");
    if (!hseSub4) setHseSub4("");
    if (!hseEnglishMark) setHseEnglishMark("");
    if (!hseSub1Mark) setHseSub1Mark("");
    if (!hseSub2Mark) setHseSub2Mark("");
    if (!hseSub3Mark) setHseSub3Mark("");
    if (!hseSub4Mark) setHseSub4Mark("");
  };

  //Structure Data
  const structureData = () => {
    const educationDetails = {
      tenthStd: {
        schoolName: sslcSchoolName,
        syllabus: sslcMediumOfInstruction,
        english: sslcEnglishMark,
        maths: sslcMathsMark,
        science: sslcScienceMark,
        socialScience: sslcSocialScienceMark,
      },
      twelthStd: {
        schoolName: hseSchoolName,
        syllabus: hseSyllabus,
        course: hseCourse,
        sub: [hseEnglish, hseSub1, hseSub2, hseSub3, hseSub4],
        subMark: [
          hseEnglishMark,
          hseSub1Mark,
          hseSub2Mark,
          hseSub3Mark,
          hseSub4Mark,
        ],
      },
      degree: [
        {
          college: collegeName,
          university: ugUniversity,
          course: ugCourse,
          core: ugCoreMark,
          complementary: ugComplementaryMark,
          commonOne: ugCommonEnglishMark,
          commonTwo: ugCommonLanguageMark,
          open: ugOpenMark,
        },
      ],
      otherQualifications: [
        {
          institutionName: othInstitutionName,
          courseType: othCourseType,
          Grade: othGrade,
          university: othUniversity,
        },
      ],
      additionalCourse: [
        {
          courseName: addiCourse,
          institutionName: addiInstituionName,
          university: addiUniversity,
          cgp: addiMarks,
        },
      ],
      extraCurricular: [
        {
          activity: activity,
          yearOfParticipation: yearOfParticipation,
          Price: prize,
          detailsOfExcellenceInPerformance: perfomance,
        },
      ],
    };
  };

  //To set the given value to the state
  const setCurrentDetails = (details) => {
    if (!details) return;
    setSslcSchoolName(details.tenthStd.schoolName);
    setSslcMediumOfInstruction(details.tenthStd.syllabus);
    setSslcEnglishMark(details.tenthStd.english);
    setSslcMathsMark(details.tenthStd.maths);
    setSslcScienceMark(details.tenthStd.science);
    setSslcSocialScienceMark(details.tenthStd.socialScience);
    // Plus two
    setHseSchoolName(details.twelthStd.schoolName);
    setHseSyllabus(details.twelthStd.syllabus);
    setHseCourse(details.twelthStd.course);
    setHseEnglish(details.twelthStd.sub[0]);
    setHseSub1(details.twelthStd.sub[1]);
    setHseSub2(details.twelthStd.sub[2]);
    setHseSub3(details.twelthStd.sub[3]);
    setHseSub4(details.twelthStd.sub[4]);
    setHseSub1Mark(details.twelthStd.subMark[0]);
    setHseSub2Mark(details.twelthStd.subMark[1]);
    setHseSub3Mark(details.twelthStd.subMark[2]);
    setHseSub4Mark(details.twelthStd.subMark[3]);
    setCollegeName(details.degree.collegeName);
    setUgUniversity(details.degree.university);
    setUgCourse(details.degree.course);
    setUgCoreMark(details.degree.coreMark);
    setUgComplementaryMark(details.degree.ugComplementaryMark);
    setUgCommonEnglishMark(details.degree.ugCommonEnglishMark);
    setUgCommonLanguageMark(details.degree.ugCommonLanguageMark);
    setUgOpenMark(details.degree.ugOpenMark);
    setOthInstitutionName(details.otherQualifications.othInstitutionName);
    setOthCourseType(details.otherQualifications.othCourseType);
    setOthGrade(details.otherQualifications.othGrade);
    setOthUniversity(details.otherQualifications.othGrade);
    setAddiInstituionName(details.otherQualifications.addiInstituionName);
    setAddiCourse();
    setAddiUniversity();
    setAddiMarks();
    setYearOfParticipation();
    setPrize();
    setPerfomance();
  };
  //To handle next button click
  const handleNext = () => {
    //To check if there are any error
    if (!errorCheck()) return;
    setStudent({
      ...student,
      educationalDetails: structureData(),
    });
    navigate("/student/family");
  };
  //To handle edit
  const handleUpdate = async () => {
    //To check if there are any error
    if (!errorCheck()) return;
    const data = {
      educationDetails: structureData(),
    };
    await studentsService.updateStudent(id, data);
  };
  //To set the previously filled data
  useEffect(() => {
    setCurrentDetails(student.educationDetails);
  }, []);

  //To set the data on update
  useEffect(() => {
    const getStudent = async () => {
      try {
        const student = await studentsService.getStudentById(id);
        setCurrentDetails(student.educationDetails);
        console.log(student)
      } catch (error) {
        console.error(error?.response?.data?.message);
      }
    };
    if (id) getStudent();
  }, [id]);

  return (
    <>
      {/* SSLC/10th */}
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Details Section */}
        <Grid item md={12}>
          <Typography variant="subtitle1">SSLC/10th Std</Typography>
        </Grid>
        <Grid item md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="School Name"
              name="School Name"
              textValue={sslcSchoolName}
              setTextValue={setSslcSchoolName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <SelectInput
              label="Medium Of Instruction"
              name="Medium Of Instruction"
              menuItems={meduimsOfInstruction}
              dropdownValue={sslcMediumOfInstruction}
              setDropdownValue={setSslcMediumOfInstruction}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextInput
              label="English (in%)"
              name="Marks"
              type="number"
              textValue={sslcEnglishMark}
              setTextValue={setSslcEnglishMark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextInput
              label="Maths (in%)"
              name="Marks"
              type="number"
              textValue={sslcMathsMark}
              setTextValue={setSslcMathsMark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextInput
              label="Science (in%)"
              name="Marks"
              type="number"
              textValue={sslcScienceMark}
              setTextValue={setSslcScienceMark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextInput
              label="Social Science (in%)"
              name="Marks"
              type="number"
              textValue={sslcSocialScienceMark}
              setTextValue={setSslcSocialScienceMark}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Plus Two/VHSE */}
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Details Section */}
        <Grid item md={12}>
          <Typography variant="subtitle1">Plus Two/VHSE</Typography>
        </Grid>
        <Grid item md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="School Name"
              name="School Name"
              textValue={hseSchoolName}
              setTextValue={setHseSchoolName}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <SelectInput
              label="Syllabus"
              name="Syllabus"
              menuItems={syllabuses}
              dropdownValue={hseSyllabus}
              setDropdownValue={setHseSyllabus}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <SelectInput
              label="Course"
              name="Course"
              menuItems={hseCourses}
              dropdownValue={hseCourse}
              setDropdownValue={setHseCourse}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <SelectInput
              label="Subject"
              name="Subject"
              menuItems={english}
              dropdownValue={hseEnglish}
              setDropdownValue={setHseEnglish}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <SelectInput
              label="Subject"
              name="Subject"
              menuItems={hseSubjects1}
              dropdownValue={hseSub1}
              setDropdownValue={setHseSub1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <SelectInput
              label="Subject"
              name="Subject"
              menuItems={hseSubjects2}
              dropdownValue={hseSub2}
              setDropdownValue={setHseSub2}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <SelectInput
              label="Subject"
              name="Subject"
              menuItems={hseSubjects3}
              dropdownValue={hseSub3}
              setDropdownValue={setHseSub3}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <SelectInput
              label="Subject"
              name="Subject"
              menuItems={hseSubjects4}
              dropdownValue={hseSub4}
              setDropdownValue={setHseSub4}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <TextInput
              label="Marks (in%)"
              name="Marks"
              type="number"
              textValue={hseEnglishMark}
              setTextValue={setHseEnglishMark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextInput
              label="Marks (in%)"
              name="Marks"
              type="number"
              textValue={hseSub1Mark}
              setTextValue={setHseSub1Mark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextInput
              label="Marks (in%)"
              name="Marks"
              type="number"
              textValue={hseSub2Mark}
              setTextValue={setHseSub2Mark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextInput
              label="Marks (in%)"
              name="Marks"
              type="number"
              textValue={hseSub3Mark}
              setTextValue={setHseSub3Mark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextInput
              label="Marks (in%)"
              name="Marks"
              type="number"
              textValue={hseSub4Mark}
              setTextValue={setHseSub4Mark}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Degree */}
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Details Section */}
        <Grid item md={12}>
          <Typography variant="subtitle1">Degree</Typography>
        </Grid>
        <Grid item md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="College Name"
              name="College Name"
              textValue={collegeName}
              setTextValue={setCollegeName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="University"
              name="University"
              textValue={ugUniversity}
              setTextValue={setUgUniversity}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <SelectInput
              label="Course"
              name="Course"
              menuItems={ugCourses}
              dropdownValue={ugCourse}
              setDropdownValue={setUgCourse}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextInput
              label="Core (Main) %"
              name="Marks"
              type="number"
              textValue={ugCoreMark}
              setTextValue={setUgCoreMark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <TextInput
              label="Complementary (Sub) %"
              name="Marks"
              type="number"
              textValue={ugComplementaryMark}
              setTextValue={setUgComplementaryMark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextInput
              label="Common (English) %"
              name="Marks"
              type="number"
              textValue={ugCommonEnglishMark}
              setTextValue={setUgCommonEnglishMark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextInput
              label="Common (Language) %"
              name="Marks"
              type="number"
              textValue={ugCommonLanguageMark}
              setTextValue={setUgCommonLanguageMark}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <TextInput
              label="Open Course %"
              name="Marks"
              type="number"
              textValue={ugOpenMark}
              setTextValue={setUgOpenMark}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Other Qualification */}
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Details Section */}
        <Grid item md={12}>
          <Typography variant="subtitle1">Other Qualification</Typography>
        </Grid>
        <Grid item md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Course Type"
              name="Course Type"
              textValue={othCourseType}
              setTextValue={setOthCourseType}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Institution Name"
              name="Institution Name"
              textValue={othInstitutionName}
              setTextValue={setOthInstitutionName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Grade"
              name="Grade"
              textValue={othGrade}
              setTextValue={setOthGrade}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="University (If Recognised)"
              name="University"
              textValue={othUniversity}
              setTextValue={setOthUniversity}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Additional Course */}
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Details Section */}
        <Grid item md={12}>
          <Typography variant="subtitle1">Additional Course</Typography>
        </Grid>
        <Grid item md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Degree / Diploma / Certificate Course"
              name="Course Name"
              textValue={addiCourse}
              setTextValue={setAddiCourse}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Institute Name"
              name="Institute Name"
              textValue={addiInstituionName}
              setTextValue={setAddiInstituionName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="University / Government"
              name="University"
              textValue={addiUniversity}
              setTextValue={setAddiUniversity}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <TextInput
              label="Marks / CGP Obtained"
              type="number"
              name="Marks"
              textValue={addiMarks}
              setTextValue={setAddiMarks}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* extra curricular activities */}
      <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
        {/* Add Details Section */}
        <Grid item md={12}>
          <Typography variant="subtitle1">
            Extra Curricular Activities
          </Typography>
        </Grid>
        <Grid item md={12} container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Activity"
              name="Activity"
              textValue={activity}
              setTextValue={setActivity}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <TextInput
              label="Prize"
              name="Prize"
              textValue={prize}
              setTextValue={setPrize}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={6}>
            <DatePickerInput
              views={["year"]}
              label="Year Of Participation"
              name="Year Of Participation"
              date={yearOfParticipation}
              setDate={setYearOfParticipation}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextInput
              label="Details of excellence in Perfomance"
              name="Details of excellence in Perfomance"
              textValue={perfomance}
              setTextValue={setPerfomance}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Button */}
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
