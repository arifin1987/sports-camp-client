

const AllClasses = ({cls}) => {
    const{image,class_name,instructor_name,available_seats,price}= cls
    return (
        <div className="border-2 p-2 text-center">
            <img src={image} alt="" />
            <h2>Class Name:{class_name}</h2>
            <h1>Instructor Name:{instructor_name}</h1>
            <p>Available Seats:{available_seats}</p>
            <p>Price:${price}</p>
            <button className="btn btn-primary">Select Class</button>

            
        </div>
    );
};

export default AllClasses;