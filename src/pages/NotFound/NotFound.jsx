import { Link } from 'react-router-dom';
import notfound from '../../assets/not found/notfound.avif'

const NotFound = () => {
    return (
        <div>
            <button className='btn btn-primary m-4'><Link to="/">Home</Link></button>
         
            <img className='w-full' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;