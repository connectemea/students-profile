import PropTypes from 'prop-types';
// material UI components
import { styled } from '@mui/material/styles';
import {
  Box,
  Toolbar,
  Typography,
  OutlinedInput,
  InputAdornment
} from '@mui/material';

// material icons
import SearchIcon from '@mui/icons-material/Search';

// content wrapper style
const RootStyle = styled(Toolbar)(({ theme }) => ({
  // below height for the toolbar it disabled manually
  height:96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3)
}));

// custom style for searchInput (extending material outlinedInput)
const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));


DataTableToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func
};

export default function DataTableToolbar({ numSelected, filterName, onFilterName }) {
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter'
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          value={filterName}
          onChange={onFilterName}
          placeholder="Search "
          startAdornment={
            <InputAdornment position="start">
              <Box component={'div'} sx={{ color: 'text.disabled' }} >
                  <SearchIcon/>
              </Box>
            </InputAdornment>
          }
        />
      )}
    </RootStyle>
  );
}
