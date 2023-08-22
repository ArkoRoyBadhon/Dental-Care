import Banner from "../components/Home/Banner";
import { Box } from "@mui/material";
import ShowCase from "../components/Home/ShowCase";
import WelcomeCom from "../components/Home/WelcomeCom";
import PatientsSay from "../components/Home/PatientsSay";

const Home = () => {
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
