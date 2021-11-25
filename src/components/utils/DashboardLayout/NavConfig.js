import PieChartIcon from "@mui/icons-material/PieChart";
import FaceIcon from "@mui/icons-material/Face";
import PersonIcon from '@mui/icons-material/Person';

//nav bar options
const NavConfig = [
  {
    title: "home",
    path: "/app/home",
    icon: PieChartIcon,
  },
  {
    title: "teacher",
    path: "/app/teacher",
    icon: FaceIcon,
  },
  {
    title: "student",
    path: "/app/student",
    icon: PersonIcon,
  }
];

export default NavConfig;
