import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import WhoWeare from "../WhoWeare/WhoWeare";


const Home = () => {
    return (
        <div>
            <Helmet> <title>Sports CampZ | Home</title></Helmet>
          <Banner></Banner>
          <PopularClasses></PopularClasses>
          <PopularInstructors></PopularInstructors>
          <WhoWeare></WhoWeare>
        </div>
    );
};

export default Home;