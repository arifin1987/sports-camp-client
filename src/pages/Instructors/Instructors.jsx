import { useEffect, useState } from "react";
import AllInstructor from "./AllInstructor";


const Instructors = () => {
    const [instructors, setInstructors]= useState([]);
    useEffect(()=>{
        fetch('https://sports-camp-server-eight.vercel.app/instructors')
        .then(res=> res.json())
        .then(data=> setInstructors(data))
    },[])
    return (
        <div className="md:grid grid-cols-3 gap-2 ">
            {
                instructors.map(instructor=> <AllInstructor
                key={instructor._id}
                instructor={instructor}
                
                ></AllInstructor> )
            }
        </div>
    );
};

export default Instructors;