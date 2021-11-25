import { Link as RouterLink } from 'react-router-dom';
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';

// material icons
import AddIcon from '@mui/icons-material/Add';
// page wrapper for dynamic meta tags
import Page from '../../../utils/Page';
import DataTable from '../../../utils/DataTable';

// table header cell config
const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false,type:"stack" },
  { id: 'company', label: 'Company', alignRight: false ,type:"text"},
  { id: 'role', label: 'Role', alignRight: false ,type:"text"},
];




const TABLE_DATA =[
    {
        id:"134doojon",
        name:"Aseel",
        company:"microsoft",
        role:"Pentester"
    },
    {
        id:"ounr34343",
        name:"Noof",
        company:"google",
        role:"Front-end"
    },
    {
        id:"343433ojnn",
        name:"Nahyan",
        company:"facebook",
        role:"Back-end "
    },{
        id:"eonkn2434",
        name:"Dilshad",
        company:"amazon",
        role:"Full-stack"
    }
]



export default function StudentsList() {

  return (
    <Page title="StudentsList">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           Students
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/app/student/add"
            startIcon={<AddIcon/>}
          >
            New Student
          </Button>
        </Stack>
        <DataTable
            TABLE_DATA={TABLE_DATA}
            TABLE_HEAD={TABLE_HEAD}
        />
      </Container>
    </Page>
  );
}