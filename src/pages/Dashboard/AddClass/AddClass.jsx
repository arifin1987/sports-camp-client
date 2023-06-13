import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const[axiosSecure]= useAxiosSecure();
    
    const { register, handleSubmit,reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image',data.image[0])
        fetch(img_hosting_url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imgResponse=>{
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {class_name,instructor_name,instructor_email,available_seats,price}=data;
                const newClass = {class_name,instructor_name,instructor_email,available_seats,price:parseFloat(price),image:imgURL}
                console.log(newClass);
                axiosSecure.post('/classes', newClass)
                .then(data=>{
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        
                    }
                })
            }
        })

    }
    console.log(img_hosting_token);
    return (
        <div className="w-full">
            <SectionTitle
                subHeading={'New Class'}
                heading={'Add A Class'}

            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class name</span>

                    </label>
                    <input type="text" placeholder="Class name"
                     {...register("class_name", { required: true, maxLength: 120 })}
                     className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Image</span>

                    </label>
                    <input type="file" placeholder="Class Image" 
                    {...register("image", { required: true })}
                    className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor name</span>

                    </label>
                    <input type="text" placeholder="Instructor name" 
                     {...register("instructor_name", { required: true, maxLength: 120 })}
                    
                    className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor email</span>

                    </label>
                    <input type="email" placeholder="Instructor email" 
                     {...register("instructor_email", { required: true})}
                    className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available seats</span>

                    </label>
                    <input type="number" placeholder="Available seats" 
                     {...register("available_seats", { required: true })}
                    
                    className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>

                    </label>
                    <input type="number" placeholder="Price" 
                    {...register("price", { required: true })}
                    
                    className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="my-5">
                <input className="btn btn-primary" type="submit" value="Add Class" />

                </div>
                

            </form>


        </div>
    );
};

export default AddClass;