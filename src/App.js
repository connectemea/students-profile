import Home from './components/pages/Home'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import DashboardLayout from './components/utils/DashboardLayout';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import TeachersList from './components/pages/Teachers/View/TeachersList';
import AddTeacher from './components/pages/Teachers/Add/AddTeacher';
import StudentsList from './components/pages/Students/view/StudentsList';
import AddStudent from './components/pages/Students/Add/AddStudents'
import PersonalDetails from './components/pages/Students/Add/PersonalDetails';
import EducationalDetails from './components/pages/Students/Add/EducationalDetails';
import FamilyDetails from './components/pages/Students/Add/FamilyDetails';
import DepartmentDetails from './components/pages/Department/Dpt-details/DptDetails';
import Add from './components/pages/Department/Add/Add';
import DptStudentList from './components/pages/Department/List/DptStudentList';

function App() {
    return (
      <ThemeConfig>
      <GlobalStyles/>
        <Routes>
          <Route path="/student/details" >
            <Route path="personal" element={<PersonalDetails/>}/>
            <Route path="educational" element={<EducationalDetails/>}/>
            <Route path="family" element={<FamilyDetails/>}/>
          </Route>
          <Route path="/" element={<DashboardLayout/>}>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="teacher" element={<TeachersList/>}/>
            <Route path="teacher/add" element={<AddTeacher/>}/>
            <Route path="student" element={<StudentsList/>}/>
            <Route path="student/add" element={<AddStudent/>}/>
            <Route path="department" element={<DepartmentDetails/>}/>
            <Route path="department/details" element={<DptStudentList/>}/>
            <Route path="department/add" element={<Add/>}/>
          </Route>
          
        </Routes>
        </ThemeConfig>
    );
}

export default App;
