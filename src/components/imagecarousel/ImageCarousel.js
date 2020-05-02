import React from 'react';
import ReactDOM from 'react-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import pic1 from '../../assets/imgs/satisfactory.png';
import pic2 from '../../assets/imgs/playerunknown.png';
import pic3 from '../../assets/imgs/shadowgun.png';
import pic4 from '../../assets/imgs/flame.png';

import styles from './style.module.css';

// https://www.npmjs.com/package/react-responsive-carousel

const ImageCarousel = () => {


    return (
        <Carousel infiniteLoop showThumbs={false} showStatus={false} autoPlay interval={4000}>
            <div>
                <img src={pic1} alt="temp" />
            </div>
            <div>
                <img src={pic2} alt="temp" />
            </div>
            <div>
                <img src={pic3} alt="temp" />
            </div>
        </Carousel>
    );
}




export default ImageCarousel;