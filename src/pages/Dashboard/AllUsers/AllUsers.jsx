import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser } from "react-icons/fa";


const AllUsers = () => {
    const{data: users=[], refetch}= useQuery(['users'], async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleMakeAdmin= id =>{
        
    }
    return (
        <div>
            <h2>Total Users:{users.length}</h2>
          
            
           
           
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
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
                                    <button onClick={()=>handleMakeAdmin(user._id)}><FaUser></FaUser></button>
                                    
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