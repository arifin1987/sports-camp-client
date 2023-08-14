import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import WhoWeare from "../WhoWeare/WhoWeare";
import KeyPartners from "../../KeyPartners/KeyPartners";
import About from "../../About/About";
import Investors from "../../Investors/Investors";
import Vision from "../../Vision/Vision";


const Home = () => {
    return (
        <div>
        <Helmet> <title>Sports CampZ | Home</title></Helmet>
          <Banner></Banner>
          <PopularClasses></PopularClasses>
          <PopularInstructors></PopularInstructors>
          <About></About>
          <WhoWeare></WhoWeare>
          <KeyPartners></KeyPartners>
          <Investors></Investors>
          <Vision></Vision>
        </div>
    );
};

export default Home;