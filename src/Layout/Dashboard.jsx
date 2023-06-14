import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

import {  FaHome,  FaUsers } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


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
                            
                            <li><Link to="/dashboard/manageclasses">  Manage Classes</Link></li>
                          
                            
                            <li><Link to="/dashboard/allusers"><FaUsers></FaUsers> All Users</Link></li>
                            


                        
                            <li><Link to="/dashboard/home"><FaHome></FaHome> User Home</Link></li>
                            
                            
                           


                        </>
                    }
                    
                    {
                        isInstructor &&
                        <>
                        
                        <li><Link to="/dashboard/myclass">  My Classes</Link></li>
                        <li><Link to="/dashboard/addclass">  Add A Class</Link></li>
                        </>
                        

                    }
                    {
                        !isAdmin && !isInstructor &&
                        <>
                         <li>
                                <Link to="/dashboard/mycart"> My Selected Classes
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </Link>
                                <li><Link to="/dashboard/myenrolledclass">  My Enrolled Classes</Link></li>
                                <li><Link to="/dashboard/paymenthistory">  Payment History</Link></li>


                            </li>
                        </>
                    }











                    
                </ul>

            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>





        </div>

    );
};

export default Dashboard;