import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";


const MyClass = () => {
    const[myclass, setMyclass] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=> res.json())
        .then(data=>setMyclass(data) )
    },[])
    return (
        <div>
            <SectionTitle
            subHeading={'All my classes here'}
            heading={'My Classes'}
            
            >

            </SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {myclass.map((item,index)=><tr key={item._id}>
                            <td>
                                {index +1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.class_name}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.instructor_name}
                                
                            </td>
                            <td>
                                {item.instructor_email}
                            </td>
                            <td>
                                {item.available_seats}
                            </td>
                            <td>
                                {item.price}
                            </td>
                            <td>
                                {item.status}
                            </td>
                            <button className="btn btn-primary btn-sm my-2">Feedback</button>
                            <button className="btn btn-primary btn-sm my-2">Update</button>

                            
                        </tr>)}
                        
                       
                    </tbody>
                   

                </table>

            </div>
            
        </div>
    );
};

export default MyClass;