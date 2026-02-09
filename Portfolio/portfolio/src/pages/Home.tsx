import Languages from "../components/Language";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import { ImCross } from "react-icons/im";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-170 md:h-screen">
        <Navbar />
        <div className="flex ">
          <div className="w-1/2  h-150 md:w-120 lg:h-200 screen bg-indigo-300"></div>
          <div className="w-1/2 md:w-280 h-200 bg-white"></div>
        </div>

        <ImCross className="text-indigo-300 text-3xl md:text-[4rem] absolute left-58 top-14 md:left-120 md:top-17 lg:top-38" />
        <div className="absolute left-55 lg:left-352 top-120 w-20 h-20 md:w-35 md:h-35 border-13 lg:border-25 border-indigo-300 rounded-full"></div>
        <Profile />
      </div>
      <Languages />
    </>
  );
};

export default Home;
