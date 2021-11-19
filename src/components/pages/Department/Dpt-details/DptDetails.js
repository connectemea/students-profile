import { Link as RouterLink } from 'react-router-dom';
// material components
import {
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';
import Page from '../../../utils/Page';
import AddIcon from '@mui/icons-material/Add';

export default function DptDetails() {
    return (
        <Page title="Departments">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           Departments
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/department/add"
            startIcon={<AddIcon/>}
          >
            New department
          </Button>
        </Stack>
      </Container>
    </Page>
    )
}
