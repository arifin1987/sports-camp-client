import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }






    return (
        <div >
            <div className="md:flex justify-between ">
                <a className="btn btn-ghost normal-case text-xl text-blue-400">SportsCampZ</a>

                <div className="px-5">
                    <Link className="mx-4 text-sky-400" to='/'>Home</Link>
                    <Link  className="mx-4 text-sky-400" to='/instructors'>Instructors</Link>
                    <Link  className="mx-4 text-sky-400" to='/classes'>Classes</Link>

                    
            {
                user ? <> <span><Link className="text-blue-400" to="/dashboard/mycart">     

                    Dashboard

                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </Link></span>
                    <span><button onClick={handleLogOut}>Logout</button> </span>  </> : <Link to='/login'><button className="text-blue-400">Login</button> </Link>
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