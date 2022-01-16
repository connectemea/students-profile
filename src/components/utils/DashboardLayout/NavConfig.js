import PieChartIcon from "@mui/icons-material/PieChart";
import FaceIcon from "@mui/icons-material/Face";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

//nav bar options
const NavConfig = [
  {
    title: "home",
    path: "/app/home",
    icon: PieChartIcon,
    permittedUser: "admin",
  },
  {
    title: "teacher",
    path: "/app/teacher",
    icon: FaceIcon,
    permittedUser: "admin",
  },
  {
    title: "student",
    path: "/app/student",
    icon: PersonIcon,
    permittedUser: "teacher",
  },
  {
    title: "department",
    path: "/app/department",
    icon: AccountBalanceIcon,
    permittedUser: "teacher",
  },
];

export default NavConfig;
