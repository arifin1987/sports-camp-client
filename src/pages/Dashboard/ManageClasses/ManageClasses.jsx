import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";


const ManageClasses = () => {
    const [classes] = useClasses();
    return (
        <div>
            <SectionTitle
                heading={'Manage Classes'}
                subHeading={'Classes managed by admin'}
            ></SectionTitle>
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
                        {classes.map((item,index)=><tr key={item._id}>
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
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>)}
                        
                       
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;