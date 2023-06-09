import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [show, setShow]= useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
        
    const {signIn}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit= data=>{
        signIn(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            reset();
            Swal.fire({
                title: ' Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <Helmet>
                <title>Sports CampZ | Login</title>
            </Helmet>
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login !</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show?"text":"password"}  {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">password is required</span>}

                                <p onClick={()=>setShow(!show)}>{show?<span><FaEyeSlash></FaEyeSlash></span>:<span><FaEye></FaEye></span>}</p>
                            </div>
                            <div className="form-control mt-6">
                               
                                <input className="btn btn-primary" type="submit" value="Login " />
                                
                            </div>
                        </form>
                        <p><small>Are you new here? <Link to="/signup">Sign Up</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Login;