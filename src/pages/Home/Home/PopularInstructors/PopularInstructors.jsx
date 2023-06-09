
import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";



const PopularInstructors = () => {
    const [instructors,setInstructors]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/popularinstructors')
        .then(res=>res.json())
        .then(data=> setInstructors(data))
    },[])
    return (
        <div>
            <SectionTitle
            subHeading={"Our talented Instructors"}
            heading={"Popular Instructors"}
            ></SectionTitle>
            <div className="md:grid grid-cols-3 gap-2">
            
            {
                instructors.map(instructor=> <img key={instructor._id} src={instructor.image} alt="" />
                    
                
                
                )
            }
        </div>

        </div>
        
    );
};

export default PopularInstructors;