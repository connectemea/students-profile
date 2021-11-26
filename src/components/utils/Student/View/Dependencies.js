import {
  Stack,
  Typography,
  Grid,
  Card,
  Container,
  Tabs,
  TextField,
  Avatar,
  Tab,
  MenuItem,
  Switch,
  FormControlLabel,
} from "@mui/material";

//  material table components

import { styled } from "@mui/material/styles";
import Page from "../../../utils/Page";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//   custom component
import Field from "./Field";
// custom card
const ProfileCard = styled(Card)(({ theme }) => ({
  paddingRight: `${theme.spacing(4)} !important`,
  paddingBottom: `${theme.spacing(4)} !important`,
}));

function createData(name, calories,fat) {
    return { name, calories,fat};
  }
  const rows = [
    createData('Class room lecture', 80, "Good"),
    createData('Lecture Notes',80, "Good"),
    createData('Notes Provided by the Teacher',80, "Good"),
    createData('Case Study', 80, "Good"),
    createData('Observation',80, "Good"),
    createData('Survey',80, "Good"),
    createData('Exprements',80, "Good"),
    createData('Extra reading',80, "Good"),
    createData('Internet/Learning Apps',80, "Good"),
  ];
  
export default function BasicTable() {
  return (
    <TableContainer  component={ProfileCard}
      sx={{ mt: 2, p: 2 }}
      container
      spacing={2}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Learning Methods</TableCell>
            <TableCell >% of Dependence</TableCell>
            <TableCell >Remark</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell >{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}