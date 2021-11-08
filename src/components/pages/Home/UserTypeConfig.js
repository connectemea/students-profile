import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const UserTypeConfig =[
    {
        title:'Students',
        Icon:SupervisorAccountIcon,
        colorType:"primary"
    },
    {
        title:'Alumni',
        Icon:GroupIcon,
        colorType:"error"
    },
    {
        title:'Teachers',
        Icon:GroupIcon,
        colorType:"info"
    },{
        title:"Department",
        Icon:AccountBalanceIcon,
        colorType:"warning"
    }
]

export default UserTypeConfig;