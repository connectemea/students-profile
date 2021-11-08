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
function App() {
    return (
      <ThemeConfig>
      <GlobalStyles/>
        <Routes>
          <Route path="/" element={<DashboardLayout/>}>
            {/* <Route path="teacher" element={<Teacher/>}/> */}
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="teachers" element={<TeachersList/>}/>
            <Route path="teachers/add" element={<AddTeacher/>}/>
          </Route>
        </Routes>
        </ThemeConfig>
    );
}

export default App;
