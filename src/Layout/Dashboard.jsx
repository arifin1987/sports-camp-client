import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

import { FaHome, FaUsers } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { Bounce, Zoom } from "react-awesome-reveal";


const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log(isInstructor);



    return (

        <div className="flex justify-between" >

            <div className="bg-sky-400 m-5">
                <ul className="p-4 w-60" >

                    {
                        isAdmin && <>
                        <Bounce>
                        <li><Link to="/dashboard/manageclasses">  Manage Classes</Link></li>

                        </Bounce>

                            
                            <Bounce>
                            <li><Link to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</Link></li>
                            </Bounce>

                          




                           





                        </>
                    }

                    {
                        isInstructor &&
                        <>
                            <Zoom>
                            <li><Link to="/dashboard/myclass">  My Classes</Link></li>
                            </Zoom>
                            <Zoom>
                            <li><Link to="/dashboard/addclass">  Add A Class</Link></li>
                            </Zoom>
                            
                            
                        </>


                    }
                    {
                        !isAdmin && !isInstructor &&
                        <>
                            <Bounce>
                            <Link to="/dashboard/mycart"> My Selected Classes
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </Link>
                                
                            </Bounce>
                                
                                <Bounce>
                                <Link to="/dashboard/myenrolledclass">  My Enrolled Classes</Link>
                                </Bounce>

                                <Bounce>
                                <Link to="/dashboard/paymenthistory">  Payment History</Link>
                                </Bounce>
                                
                                


                            
                        </>
                    }



                    <div className="divider"></div>
                    <Bounce>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    </Bounce>
                    
                    








                </ul>

            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>





        </div>

    );
};

export default Dashboard;