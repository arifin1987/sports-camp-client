import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";



const AllClasses = ({cls}) => {
    const{image,class_name,instructor_name,available_seats,price,_id}= cls;
    const{user} = useAuth();
    const [,refetch]= useCart();
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleAddToCart = cls =>{
        
        
        console.log(cls);
        if(user && user.email){
            const cartItem = {classId:_id,image,class_name,instructor_name,available_seats,price,email: user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
            })
            .then(res=> res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'class added in the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })

                }
            })

        }
        else{
            Swal.fire({
                title: 'Please login to order ',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })

        }
    }
    return (
        <div className="border-2 p-2 text-center">
            <img src={image} alt="" />
            <h2>Class Name:{class_name}</h2>
            <h1>Instructor Name:{instructor_name}</h1>
            <p>Available Seats:{available_seats}</p>
            <p>Price:${price}</p>
            <button onClick={()=>handleAddToCart(cls)} disabled={available_seats === 0} className="btn btn-primary">Select Class</button>

            
        </div>
    );
};

export default AllClasses;