import React from "react";

// Image icon
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

// material components
import { Avatar, Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const AddImage = styled(IconButton)(({ theme }) => ({
  height: theme.spacing(20),
  width: theme.spacing(20),
  outline: "1.5px dotted grey",
  outlineOffset: "10px",
}));

export default function ImageUpload(props) {
  // pops destructuring
  const { image, setImage } = props;

  const handleImageChange = (e) =>
    e.target.files[0] && setImage(URL.createObjectURL(e.target.files[0]));

  return (
    <>
      <input type="file" id="imageUpload" hidden onChange={handleImageChange} />
      <AddImage>
        <label for="imageUpload">
          <Stack direction="column" spacing={1}>
            {image ? (
              <Avatar
                alt="Upload image"
                src={
                  typeof image == "object" ? URL.createObjectURL(image) : image
                }
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