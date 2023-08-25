/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, TextField, Typography, Button } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginUserMutation } from "../redux/features/user/userApi";

type InputLogin = {
  email: string;
  password: string;
};

const CustomLink = styled(NavLink)({
  textDecoration: "none",
  color: "blue",
});

const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit } = useForm<InputLogin>();
  const onSubmit: SubmitHandler<InputLogin> = async (data) => {
    const jsonData = {
      password: data.password,
      email: data.email,
    };

    const loginInfo = {
      data: jsonData,
    };

    const result: any = await loginUser(loginInfo);
    const from = location.state?.from?.pathname || "/";
    if (result?.data?.success) {
      document.cookie = `accessToken=${result?.data?.data?.accessToken}; HttpOnly; SameSite=Strict; Path=/`;
      navigate(from, { replace: true });
    }
  };
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
            <Button
              type="submit"
              sx={{ marginTop: "20px" }}
              variant="contained"
            >
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
