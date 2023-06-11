import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';


const Dashboard = () => {
    const [cart] = useCart();

    return (

        <div className="flex justify-between" >
            
            <div className="bg-sky-400 m-5">
                <ul className="p-4 w-60" >



                    <li><Link to="/dashboard/home"><FaHome></FaHome> Admin Home</Link></li>
                    <li><Link to="/dashboard/reservations"> <FaUtensils></FaUtensils> Add Items</Link></li>
                    <li><Link to="/dashboard/history"><FaWallet></FaWallet> Manage Items</Link></li>
                    <li><Link to="/dashboard/history"><FaBook></FaBook> Manage Bookings</Link></li>
                    <li><Link to="/dashboard/allusers"><FaUsers></FaUsers> All Users</Link></li>


                    <li><Link to="/dashboard/home"><FaHome></FaHome> User Home</Link></li>
                    <li><Link to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</Link></li>
                    <li><Link to="/dashboard/history"><FaWallet></FaWallet> Payment History</Link></li>
                    <li>
                        <Link to="/dashboard/mycart"> My Selected Classes
                            <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                        </Link>

                    </li>





                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome> Home</Link> </li>
                    <li><Link to="/menu"> Our Menu</Link></li>
                    <li><Link to="/order/salad">Order Food</Link></li>
                </ul>

            </div>
            <div className="m-40">
                <Outlet></Outlet>
            </div>





        </div>

    );
};

export default Dashboard;