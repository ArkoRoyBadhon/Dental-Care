/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Divider,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TextField,
  Stack,
} from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import { red, blue } from "@mui/material/colors";
import {
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useGetServicesQuery,
} from "../../redux/features/service/serviceApi";
import { toast } from "react-toastify";

type Inputs = {
  title: string;
  image: any;
};

export type IServiceData = {
  _id: string;
  title: string;
  image: string;
  uploadedBy: {
    email: string;
    password: string;
    role: string;
    _id: string;
  };
  createdAt: Date;
};

const Service = () => {
  const [createService, { isLoading, isSuccess, isError }] = useCreateServiceMutation();
  const [deleteService, { isLoading:isdelLoading, isSuccess:isdelSuccess, isError:isdelError }] = useDeleteServiceMutation();
  const { data: tableData } = useGetServicesQuery(undefined);
  const { user } = useAppSelector((state) => state.persisted.auth);
  const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const [image, setImage] = useState<File | null>(null);

  // toast
  if (isSuccess) {
    toast("Service Created succesfully!", {
      toastId: "service create",
    });
  }
  if (isLoading) {
    toast("Please wait a moment while Creating Service!", {
      toastId: "service pending",
    });
  }
  if (isError) {
    toast("Something went wrong", {
      toastId: "service error",
    });
  }
  if (isdelSuccess) {
    toast("Service deleted succesfully!", {
      toastId: "service del create",
    });
  }
  if (isdelLoading) {
    // toast("Please wait a moment while Creating Service!", {
    //   toastId: "service del pending",
    // });
  }
  if (isdelError) {
    toast("Something went wrong", {
      toastId: "service del error",
    });
  }

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmitService: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    console.log("title", data);

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
        title: data?.title,
        image: responseData.data.url,
        uploadedBy: user?._id,
      };
      const officeInfo = {
        data: payload,
      };
      await createService(officeInfo);
      setImage(null);
      reset();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleServiceImageDelete = async (id: string) => {
    await deleteService(id);
  };

  return (
    <Box
      sx={{
        padding: {
            md: "10px"
        },
      }}
    >
      <Box>
        <Typography fontWeight="600" fontSize="22px">
          {" "}
          Add New Service Photo
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmitService)}>
            <Stack rowGap={5} alignItems="center">
              <TextField
                sx={{ width: {
                    xs: "300px",
                    md: "400px"
                } }}
                id="outlined-title"
                label="Title"
                type="text"
                {...register("title", { required: true })}
              />
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
            </Stack>
          </form>
        </Box>
      </Box>
      <Divider sx={{ marginTop: "40px" }} />
      <Box sx={{ marginTop: "20px" }}>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "500",
          }}
        >
          Manage your Services
        </Typography>
        <TableContainer component={Paper} sx={{ background: blue[200] }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Image
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Uploaded By
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Created Time
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.data.map((row: IServiceData) => (
                <TableRow key={row?._id} sx={{ "td, th": { border: 1 } }}>
                  <TableCell align="center" component="th" scope="row">
                    <img
                      src={row?.image}
                      alt="photo"
                      style={{ width: "80px", height: "60px" }}
                    />
                  </TableCell>
                  <TableCell align="center">{row?.uploadedBy.email}</TableCell>
                  <TableCell align="center">
                    {new Date(row?.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ backgroundColor: red[500] }}
                      onClick={() => handleServiceImageDelete(row?._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Service;
