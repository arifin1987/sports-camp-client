import { useQuery } from "@tanstack/react-query";
import { FaTrash,  FaUserGraduate, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure]= useAxiosSecure();
    const{data: users=[], refetch}= useQuery(['users'], async()=>{
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = user =>{
        fetch(`https://sports-camp-server-eight.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin `,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = user=>{
        fetch(`https://sports-camp-server-eight.vercel.app/users/instructor/${user._id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor `,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }

        })

    }
    return (
        <div>
            <h2>Total Users:{users.length}</h2>
          
            
           
           
            <div className="overflow-x-auto w-full">
                <table className="table w-full bg-sky-300">
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                
                                
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {
                                    user.role ==='admin'? 'admin':
                                    <button onClick={()=>handleMakeAdmin(user)}><FaUserShield></FaUserShield></button>
                                    
                                    }
                                    
                                    

                                </td>
                                <td>
                                    {
                                    user.role ==='instructor'? 'instructor':
                                    <button onClick={()=>handleMakeInstructor(user)}><FaUserGraduate></FaUserGraduate></button>
                                    
                                    }
                                    
                                    

                                </td>
                                <td>
                                    <button><FaTrash></FaTrash></button>
                                </td>
                                
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        
        
    );
};

export default AllUsers;