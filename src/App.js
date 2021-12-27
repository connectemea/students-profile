import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/utils/DashboardLayout";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import TeachersList from "./components/pages/Teachers/View/TeachersList";
import AddTeacher from "./components/pages/Teachers/Add/AddTeacher";
import TeachersView from "./components/pages/Teachers/View/TeachersView";
import StudentsList from "./components/pages/Students/view/StudentsList";
import AddStudent from "./components/pages/Students/Add/AddStudents";
import PersonalDetails from "./components/pages/Students/Add/PersonalDetails";
import EducationalDetails from "./components/pages/Students/Add/EducationalDetails";
import FamilyDetails from "./components/pages/Students/Add/FamilyDetails";
import Register from "./components/pages/Users/Register";
import Login from "./components/pages/Users/Login";
import AuthLayout from "./components/utils/UserLayout/AuthLayout";
import ForgotPassword from "./components/pages/Users/ForgotPassword";
import RecoverPassword from "./components/pages/Users/RecoverPassword";
import AddDetails from "./components/pages/Teachers/Add/AddDetails";
import Details from "./components/pages/Students/view/Details";
import ProfileProvider from "./context/profileContext";
import StudentProvider from "./context/studentContext";
import Dependencies from "./components/pages/Students/Add/Dependencies";
import DepartmentDetails from "./components/pages/Department/Dpt-details/DptDetails";
import Add from "./components/pages/Department/Add/Add";
import DptStudentList from "./components/pages/Department/List/DptStudentList";

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Routes>
        <Route path="/student/details">
          <Route path="personal" element={<PersonalDetails />} />
          <Route path="educational" element={<EducationalDetails />} />
          <Route path="family" element={<FamilyDetails />} />
        </Route>
        <Route path="/teacher/details">
          <Route path="personal" element={<AddDetails />} />
        </Route>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
          <Route path="teacher" element={<TeachersList />} />
          <Route path="teacher/add" element={<AddTeacher />} />
          <Route path="student" element={<StudentsList />} />
          <Route path="student/add" element={<AddStudent />} />
          <Route path="teacher/view" element={<TeachersView />} />
        </Route>
        <Route path="/user" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="recover/:token" element={<RecoverPassword />} />
        </Route>
      </Routes>
    </ThemeConfig>
  );
}

export default App;
