import PieChartIcon from "@mui/icons-material/PieChart";
import FaceIcon from "@mui/icons-material/Face";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

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
  },
  {
    title: "department",
    path: "/app/department",
    icon: AccountBalanceIcon,
  }
];

export default NavConfig;
