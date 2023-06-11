import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../../../../assets/img/img1.avif'
import img2 from '../../../../assets/img/img2.avif'
import img3 from '../../../../assets/img/img3.avif'
import img4 from '../../../../assets/img/img4.avif'
import img5 from '../../../../assets/img/img5.avif'


const Banner = () => {
    return (
        <div >
             <AwesomeSlider>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            
            
            
        </AwesomeSlider>
            
        </div>
    );
};

export default Banner;