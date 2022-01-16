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
import DptStudentList from "./components/pages/Department/List/DptStudentList";
import UpdatePersonalDeatils from "./components/pages/Students/Edit/PersonalDetails";
import UpdateEducationDeatils from "./components/pages/Students/Edit/EducationalDetails";
import UpdateFamilyDetails from "./components/pages/Students/Edit/FamilyDetails";
import DepartmentDetails from "./components/pages/Department/View/DptDetails";
import Add from "./components/pages/Department/Add/Add";
//private route
import PrivateRoute from "./PrivateRoute";
import PrivateWrapper from "./PrivateWrapper";

function App() {
  const student = "student";
  const teacher = "teacher";
  const admin = "admin";
  const lowAccessRight = "low";
  const highAccessRight = "high";
  return (
    <ThemeConfig>
      <GlobalStyles />

      {/* Student data provider */}
      <StudentProvider>
        {/* User profile provider */}
        <ProfileProvider>
          <Routes>
            <Route element={<PrivateWrapper />}>
              {/* Home routes (Dashboard) */}
              <Route path="/app" element={<DashboardLayout />}>
                <Route path="/app" element={<Navigate to="/app/home" />} />
                <Route
                  path="home"
                  element={
                    <PrivateRoute type={admin} level={highAccessRight}>
                      <Home />
                    </PrivateRoute>
                  }
                />

                {/* Teachers routes (Dashboard)*/}
                <Route path="teacher">
                  <Route
                    path="/app/teacher"
                    element={<Navigate to="/app/teacher/list" />}
                  />
                  <Route
                    path="view/:id"
                    element={
                      <PrivateRoute type={teacher} level={highAccessRight}>
                        <TeachersView />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="list"
                    element={
                      <PrivateRoute type={admin} level={highAccessRight}>
                        <TeachersList />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="add"
                    element={
                      <PrivateRoute type={admin} level={highAccessRight}>
                        <AddTeacher />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="update/:id"
                    element={
                      <PrivateRoute type={teacher} level={highAccessRight}>
                        <AddDetails />
                      </PrivateRoute>
                    }
                  />
                </Route>

                {/* students routes (Dashboard)*/}
                <Route path="student">
                  <Route
                    path="/app/student"
                    element={<Navigate to="/app/student/list" />}
                  />
                  <Route
                    path="list"
                    element={
                      <PrivateRoute type={teacher} level={highAccessRight}>
                        <StudentsList />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="add"
                    element={
                      <PrivateRoute type={teacher} level={highAccessRight}>
                        <AddStudent />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="view/:id"
                    element={
                      <PrivateRoute type={student} level={highAccessRight}>
                        <Details />
                      </PrivateRoute>
                    }
                  />
                  <Route path="update/:id">
                    <Route
                      path="personal"
                      element={
                        <PrivateRoute type={student} level={highAccessRight}>
                          <UpdatePersonalDeatils />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="educational"
                      element={
                        <PrivateRoute type={student} level={highAccessRight}>
                          <UpdateEducationDeatils />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="family"
                      element={
                        <PrivateRoute type={student} level={highAccessRight}>
                          <UpdateFamilyDetails />
                        </PrivateRoute>
                      }
                    />
                  </Route>
                </Route>
                <Route path="department">
                  <Route
                    path="/app/department"
                    element={<Navigate to="/app/department/list" />}
                  />
                  <Route
                    path="list"
                    element={
                      <PrivateRoute type={teacher} level={highAccessRight}>
                        <DepartmentDetails />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="details/:id"
                    element={
                      <PrivateRoute type={teacher} level={highAccessRight}>
                        <DptStudentList />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="student/:id"
                    element={
                      <PrivateRoute type={teacher} level={highAccessRight}>
                        <Details />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="add"
                    element={
                      <PrivateRoute type={admin} level={highAccessRight}>
                        <Add />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="edit/:id"
                    element={
                      <PrivateRoute type={admin} level={highAccessRight}>
                        <Add update={true} />
                      </PrivateRoute>
                    }
                  />
                </Route>
              </Route>
              {/* teacher details forms routes */}
              <Route path="/teacher/details">
                <Route
                  path="personal"
                  element={
                    <PrivateRoute type={teacher} level={lowAccessRight}>
                      <AddDetails />
                    </PrivateRoute>
                  }
                />
              </Route>

              {/* student details forms routes */}
              <Route path="/student/details">
                <Route
                  path="/student/details"
                  element={<Navigate to="/student/details/personal" />}
                />
                <Route
                  path="personal"
                  element={
                    <PrivateRoute type={student} level={lowAccessRight}>
                      <PersonalDetails />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="educational"
                  element={
                    <PrivateRoute type={student} level={lowAccessRight}>
                      <EducationalDetails />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="family"
                  element={
                    <PrivateRoute type={student} level={lowAccessRight}>
                      <FamilyDetails />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="dependencies"
                  element={
                    <PrivateRoute type={student} level={lowAccessRight}>
                      <Dependencies />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Route>

            {/* user routes */}
            <Route path="/user" element={<AuthLayout />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot" element={<ForgotPassword />} />
              <Route path="recover/:token" element={<RecoverPassword />} />
            </Route>
            <Route path="/" element={<Navigate to="/user/login" />} />
            <Route path="*" element={<div>page not found</div>} />
          </Routes>
        </ProfileProvider>
      </StudentProvider>
    </ThemeConfig>
  );
}

export default App;
