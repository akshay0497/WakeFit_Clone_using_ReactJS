import React from "react"
import { Carousel } from 'react-responsive-carousel';

import image1 from "../../Asset/ImageSlider/images/ads_1.jpg"
import image2 from "../../Asset/ImageSlider/images/ads_2.jpg"
import image3 from "../../Asset/ImageSlider/images/ads_3.jpg"
import img1 from "../../Asset/ImageSlider/images/img1.jpg"
import img2 from "../../Asset/ImageSlider/images/img2.jpg"
import img3 from "../../Asset/ImageSlider/images/img3.jpg"
import img4 from "../../Asset/ImageSlider/images/img4.jpg"
import img5 from "../../Asset/ImageSlider/images/img5.jpg"
import img6 from "../../Asset/ImageSlider/images/img6.jpg"
import img7 from "../../Asset/ImageSlider/images/img7.jpg"
import img8 from "../../Asset/ImageSlider/images/img8.jpg"


const ImageSlider = () => {
    return (
        <>
            <Carousel infiniteLoop autoPlay={true} time={1000} showThumbs={false} showStatus={false} >
                <div>
                    <img src={image1}></img>
                </div>
                <div>
                    <img src={image2}></img>
                </div>
                <div>
                    <img src={image3}></img>
                </div>
                <div>
                    <img src={img1}></img>
                </div>
                <div>
                    <img src={img2}></img>
                </div>
                <div>
                    <img src={img3}></img>
                </div>
                <div>
                    <img src={img4}></img>
                </div>
                <div>
                    <img src={img5}></img>
                </div>
                <div>
                    <img src={img6}></img>
                </div>
                <div>
                    <img src={img7}></img>
                </div>
                <div>
                    <img src={img8}></img>
                </div>
            </Carousel>
        </>
    )
}

export default ImageSlider;