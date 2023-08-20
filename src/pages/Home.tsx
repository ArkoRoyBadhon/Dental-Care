import Banner from "../components/Home/Banner";
import { Box } from "@mui/material";
import ShowCase from "../components/Home/ShowCase";
import WelcomeCom from "../components/Home/WelcomeCom";

const Home = () => {
  return (
    <Box>
      <Banner />
      <ShowCase />
      <WelcomeCom />
    </Box>
  );
};

export default Home;
