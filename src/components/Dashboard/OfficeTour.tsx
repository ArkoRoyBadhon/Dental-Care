/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Typography, Button } from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateImagesMutation } from "../../redux/features/office/officeApi";
import { useAppSelector } from "../../redux/hook";

type Inputs = {
  image: any;
};

const OfficeTour = () => {
  const [createImages] = useCreateImagesMutation();
  const { user } = useAppSelector((state) => state.persisted.auth);
  const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const [image, setImage] = useState<File | null>(null);

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmitOffice: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${img_hosting_token}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      console.log("Image uploaded:", responseData.data.url);
      const payload = {
        url: responseData.data.url,
        uploadedBy: user?._id,
      };
      const officeInfo = {
        data: payload,
      };
        await createImages(officeInfo);
      setImage(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };
  return (
    <Box
      sx={{
        padding: "10px",
      }}
    >
      <Box>
        <Typography fontWeight="600" fontSize="22px">
          {" "}
          Add Your Office New Photo
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmitOffice)}>
            <label htmlFor="img-office">
              <Box
                sx={{
                  width: "110px",
                  height: "100px",
                  border: "1px solid gray",
                  borderRadius: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <CloudUploadIcon />
                <Divider />
                Upload Image
              </Box>
            </label>
            <input
              id="img-office"
              type="file"
              accept="image/*"
              style={{ position: "absolute", left: "-9999px" }}
              {...register("image", { required: true })}
              onChange={handleImageChange}
            />

            <Typography>{image && image.name}</Typography>
            <Button
              type="submit"
              sx={{ marginTop: "20px" }}
              variant="contained"
            >
              Upload
            </Button>
          </form>

          {/* <input type="file" accept="image/*" onChange={handleImageChange} />
          <button onClick={handleUpload}>Upload Image</button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default OfficeTour;
