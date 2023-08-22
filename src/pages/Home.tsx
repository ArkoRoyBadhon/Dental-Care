import Banner from "../components/Home/Banner";
import { Box } from "@mui/material";
import ShowCase from "../components/Home/ShowCase";
import WelcomeCom from "../components/Home/WelcomeCom";
import PatientsSay from "../components/Home/PatientsSay";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hook";
import { useGetUserQuery } from "../redux/features/user/userAPI";
import { setUser } from "../redux/features/user/userSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { data: userData, isSuccess } = useGetUserQuery(undefined);

  useEffect(() => {
    if (isSuccess && userData?.data) {
      dispatch(setUser(userData.data.email));
    }
  }, [isSuccess, userData, dispatch]);
  return (
    <Box>
      <Banner />
      <ShowCase />
      <WelcomeCom />
      <PatientsSay />
    </Box>
  );
};

export default Home;
