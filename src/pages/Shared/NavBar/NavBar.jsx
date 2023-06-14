import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { FaShoppingCart } from "react-icons/fa";
import {  Zoom } from "react-awesome-reveal";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }






    return (
        <div >
            <div className="md:flex justify-between ">
                <Zoom>
                <a className="btn btn-ghost normal-case text-xl text-blue-400">SportsCampZ</a>
                </Zoom>
                

                <div className="px-5">
                    
                    <Link className="mx-4 text-sky-400" to='/'>Home</Link>
                    <Link className="mx-4 text-sky-400" to='/instructors'>Instructors</Link>
                    <Link className="mx-4 text-sky-400" to='/classes'>Classes</Link>

                   
                   
                    {
                        isAdmin && <Link to="/dashboard/adminhome" className="text-sky-500">Dashboard</Link>
                    }
                    {
                        isInstructor && <Link to="/dashboard/instructorhome" className="text-sky-500">Dashboard</Link>
                    }

                    {
                        !isAdmin && !isInstructor && <Link to="/dashboard/userhome" className="text-sky-500">Dashboard</Link>
                    }


                    <Link to="/dashboard/mycart">
                        <button className="btn gap-2">
                            <FaShoppingCart></FaShoppingCart>
                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                        </button>
                    </Link>

                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                        </> : <>
                            <Link to="/login">Login</Link>
                        </>
                    }



                    {
                        user && <div className="tooltip" data-tip={user.displayName}>
                            <img src={user.photoURL} className='rounded-full w-9 h-8 m-4' />
                        </div>
                    }

                </div>

            </div>





        </div>
    );
};

export default NavBar;