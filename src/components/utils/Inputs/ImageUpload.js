import React from "react";

// Image icon
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

// material components
import { Avatar, Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import BACKEND_URL from "../../../constants/BACKEND_URL";

const AddImage = styled(IconButton)(({ theme, isError }) => ({
  height: theme.spacing(20),
  width: theme.spacing(20),
  outline: `1.5px dotted ${isError === "" ? "red" : "grey"}`,
  outlineOffset: "10px",
}));

export default function ImageUpload(props) {
  // props destructuring
  const { image, setImage } = props;
  const imageUrl =
    image instanceof File
      ? URL.createObjectURL(image)
      : `${BACKEND_URL.BASE_URL}upload/${image}`;
  console.log(imageUrl);
  const handleImageChange = (e) => {
    e.target.files[0] && setImage(e.target.files[0]);

  };

  return (
    <>
      <input type="file" id="imageUpload" hidden onChange={handleImageChange} />
      <AddImage isError={image}>
        <label for="imageUpload">
          <Stack direction="column" spacing={1}>
            {image ? (
              <Avatar
                alt="Upload image"
                src={imageUrl}
                sx={{ width: 182, height: 182 }}
              />
            ) : (
              <>
                <item>
                  <AddAPhotoIcon />
                </item>
                <item>
                  <Typography variant={"body1"}>Upload photo</Typography>
                </item>
              </>
            )}
          </Stack>
        </label>
      </AddImage>
    </>
  );
}
