

const AllInstructor = ({instructor}) => {
    const {image,name,email} = instructor;
    return (
        <div className="border-2 p-2 text-center">
            <img src={image}alt="" />
            <h2>{name}</h2>
            <p>{email}</p>
            
        </div>
    );
};

export default AllInstructor;