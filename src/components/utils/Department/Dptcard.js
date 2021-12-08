// import { Icon } from '@iconify/react';
// import appleFilled from '@iconify/icons-ant-design/apple-filled';
// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";

// utils
// import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Dptcard({ data, type }) {
  const deleteDepartment = () => {
    console.log("onClinck");
  };
  const { shortForm, colorType } = type;
  const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: "none",
    textAlign: "center",
    padding: theme.spacing(2, 1, 5, 2),
    color: theme.palette[colorType].darker,
    backgroundColor: theme.palette[colorType].lighter,
  }));
  const IconWrapperStyle = styled("div")(({ theme }) => ({
    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    color: theme.palette[colorType].dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(
      theme.palette[colorType].dark,
      0
    )} 0%, ${alpha(theme.palette[colorType].dark, 0.24)} 100%)`,
  }));
  const ShortFormStyle = styled("div")(({ theme }) => ({
    fontWeight: "600",
    fontSize: theme.spacing(2.3),
    textTransform: "uppercase",
  }));
  return (
    <Link to="/department/details" style={{ textDecoration: "none" }}>
      <RootStyle>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >

          <Link to="/department/add" style={{ color: "none" }}>
            <ModeEditOutlineOutlinedIcon sx={{ margin: "8px", opacity: "0.5" , height:"3vh" , width:"2vw"}} />
          </Link>
        </Grid>
        <IconWrapperStyle>
          {/* <Icon icon={appleFilled} width={24} height={24} /> */}
          <ShortFormStyle>{shortForm}</ShortFormStyle>
        </IconWrapperStyle>
        <Typography variant="h5">{data.dptName}</Typography>
        <Typography sx={{ mt: 4 }} variant="subtitle2">
          {data.hodName}
        </Typography>
        <Typography variant="subtitle2">{data.contact}</Typography>
      </RootStyle>
    </Link>
  );
}
