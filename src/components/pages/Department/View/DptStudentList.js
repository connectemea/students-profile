import {useState} from 'react'
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
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


// table header cell config
const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false, type: "stack" },
  { id: 'company', label: 'Company', alignRight: false, type: "text" },
  { id: 'role', label: 'Role', alignRight: false, type: "text" },
];

//dropdown
const years = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'first',
    label: '2021',
  }];



const TABLE_DATA = [
  {
    id: "134doojon",
    name: "Aseel",
    company: "microsoft",
    role: "Pentester"
  },
  {
    id: "ounr34343",
    name: "Noof",
    company: "google",
    role: "Front-end"
  },
  {
    id: "343433ojnn",
    name: "Nahyan",
    company: "facebook",
    role: "Back-end "
  }, {
    id: "eonkn2434",
    name: "Dilshad",
    company: "amazon",
    role: "Full-stack"
  }
]


export default function DptStudentList() {

  const [year, setYear] = useState();

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Page title="StudentsList">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Students
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={year}
                onChange={handleChange}
              >
                {years.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>
        </Stack>
        <DataTable
          TABLE_DATA={TABLE_DATA}
          TABLE_HEAD={TABLE_HEAD}
        />
      </Container>
    </Page>
  );
}
