import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart]= useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li className="text-blue-400"><Link to="/">Home</Link></li>
        <li className="text-blue-400"><Link to="/instructors">Instructors</Link></li>
        <li className="text-blue-400"><Link to="/classes">Classes</Link></li>
       
        
        {
                        user ?   <> <span><li className="text-blue-400"><Link to="/dashboard/mycart">
                            Dashboard
                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </Link></li></span>  
                        <span><button onClick={handleLogOut}>Logout</button> </span>  </> : <Link to='/login'><button className="text-blue-400">Login</button> </Link>
                    }

                    {
                        user && <div className="tooltip" data-tip={user.displayName}>
                            <img src={user.photoURL} className='rounded-full w-9 h-8 m-4' />
                        </div>
                    }


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-blue-400">SportsCampZ</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;