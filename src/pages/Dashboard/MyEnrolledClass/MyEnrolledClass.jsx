import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";


const MyEnrolledClass = () => {
    const [enrolled, setEnrolled]=useState([]);
    useEffect(()=>{
        fetch('https://sports-camp-server-eight.vercel.app/payments')
        .then(res=>res.json())
        .then(data=> setEnrolled(data))
    },[])
    return (
        <div>
            <SectionTitle
                heading={'Enrolled Class'}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-sky-300">
                        <tr>
                            <th></th>
                            <th>Class Name</th>
                            <th>Email Id</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((enroll,index)=> <tr
                            key={enroll._id}
                            >
                                <td>{index+1}</td>
                                <td>{enroll.className}</td>
                                <td>{enroll.email}</td>
                                
                                
                            </tr>)
                        }
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClass;