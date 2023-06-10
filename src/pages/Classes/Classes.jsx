import { useEffect, useState } from "react";
import AllClasses from "./AllClasses";


const Classes = () => {
    const[classes, setClasses]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=> res.json())
        .then(data=> setClasses(data));
    },[])
    return (
        <div className="md:grid grid-cols-3 gap-2 ">
            {
                classes.map(cls => <AllClasses
                key={cls._id}
                cls={cls}
                
                ></AllClasses>)
            }
        </div>
    );
};

export default Classes;