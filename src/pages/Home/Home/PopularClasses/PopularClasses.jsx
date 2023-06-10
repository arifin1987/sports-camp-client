import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";


const PopularClasses = () => {
    const[classes, setClasses]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/popularclasses')
        .then(res=> res.json())
        .then(data=> setClasses(data))
    },[])
    return (
        <div>
            <SectionTitle 
            subHeading={"Out Beautiful Classes"}
            heading={"Popular Classes"}
            ></SectionTitle>
            <div className="md:grid grid-cols-3 gap-2">
            {
                classes.map(cls=> <img key={cls._id} src={cls.image}></img>)
            }

            </div>
           
            
        </div>
    );
};

export default PopularClasses;