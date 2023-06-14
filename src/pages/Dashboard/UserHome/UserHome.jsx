import { Bounce } from "react-awesome-reveal";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const UserHome = () => {
    return (
        <div>
           <Bounce>
            <SectionTitle
            subHeading={"Welcome to Admin Home"}
            heading={"ADMIN HOME"}
            ></SectionTitle>

            </Bounce>
        </div>
    );
};

export default UserHome;