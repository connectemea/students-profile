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

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />

      {/* Student data provider */}
      <StudentProvider>

        {/* User profile provider */}
        <ProfileProvider>
          <Routes>
            {/* Home routes (Dashboard) */}
            <Route path="/app" element={<DashboardLayout />}>
              <Route path="/app" element={<Navigate to="/app/home" />} />
              <Route path="home" element={<Home />} />

              {/* Teachers routes (Dashboard)*/}
              <Route path="teacher">
                <Route
                  path="/app/teacher"
                  element={<Navigate to="/app/teacher/list" />}
                />
                <Route path="view/:id" element={<TeachersView />} />
                <Route path="list" element={<TeachersList />} />
                <Route path="add" element={<AddTeacher />} />
              </Route>

              {/* students routes (Dashboard)*/}
              <Route path="student">
                <Route
                  path="/app/student"
                  element={<Navigate to="/app/student/list" />}
                />
                <Route path="list" element={<StudentsList />} />
                <Route path="add" element={<AddStudent />} />
                <Route path="view" element={<Details />} />
              </Route>
            </Route>

            {/* user routes */}
            <Route path="/user" element={<AuthLayout />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot" element={<ForgotPassword />} />
              <Route path="recover" element={<RecoverPassword />} />
            </Route>

            {/* teacher details forms routes */}
            <Route path="/teacher/details">
              <Route path="personal" element={<AddDetails />} />
            </Route>

            {/* student details forms routes */}
            <Route path="/student/details">
              <Route path="personal" element={<PersonalDetails />} />
              <Route path="educational" element={<EducationalDetails />} />
              <Route path="family" element={<FamilyDetails />} />
            </Route>
          </Routes>
        </ProfileProvider>
      </StudentProvider>
    </ThemeConfig>
  );
}

export default App;
