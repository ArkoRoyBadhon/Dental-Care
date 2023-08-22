import { Box, TextField, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";

type InputLogin = {
  email: string;
  password: string;
};

const CustomLink = styled(NavLink)({
  textDecoration: "none",
  color: "blue",
});

const Login = () => {
  const { register, handleSubmit } = useForm<InputLogin>();
  const onSubmit: SubmitHandler<InputLogin> = (data) => console.log(data);
  return (
    <Box
      sx={{
        paddingX: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Box
        sx={{
          paddingY: "20px",
          paddingX: "20px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography fontWeight="600" fontSize="32px">
            Login
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <TextField
              label="Email"
              variant="standard"
              {...register("email")}
              type="email"
            />
            <TextField
              label="Password"
              variant="standard"
              {...register("password")}
              type="password"
            />
            <Button type="submit" sx={{ marginTop: "20px" }} variant="contained">
              Login
            </Button>
            <Typography>
              New to Dental Care?{" "}
              <CustomLink to="/register">Register</CustomLink>{" "}
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
