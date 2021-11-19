import React from "react";

// Image icon
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function ImgaeUpload() {
  return (
    <>
      <input type="file" id="imageUpload" hidden />
      <AddImage>
        <label for="imageUpload">
          <Stack direction="column" spacing={1}>
            <item>
              <AddAPhotoIcon />
            </item>
            <item>
              <Typography variant={"body1"}>Upload photo</Typography>
            </item>
          </Stack>
        </label>
      </AddImage>
    </>
  );
}
