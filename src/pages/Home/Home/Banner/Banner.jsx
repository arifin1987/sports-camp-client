import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../../assets/img/img1.avif'
import img2 from '../../../../assets/img/img2.avif'
import img3 from '../../../../assets/img/img3.avif'
import img4 from '../../../../assets/img/img4.avif'
import img5 from '../../../../assets/img/img5.avif'


const Banner = () => {
    return (
        <div >
             <Carousel>
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
            
            
            
        </Carousel>
            
        </div>
    );
};

export default Banner;