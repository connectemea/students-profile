// material components
import { Typography } from "@mui/material";
export default function Field(props) {
  //props destructuring
  const { heading, subHeading } = props;
  return (
    <>
      <Typography sx={{ color: "text.secondary"}}>{heading}</Typography>
      <Typography sx={{ color: "text.primary", mt:1.5, mb:3}}>{subHeading}</Typography>
    </>
  );
}
